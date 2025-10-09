import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Order from '@/models/Order'
import Product from '@/models/Product'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const status = searchParams.get('status')
    
    let query = {}
    
    if (userId) {
      query = { userId }
    }
    
    if (status) {
      query = { ...query, status }
    }
    
    const orders = await Order.find(query).sort({ createdAt: -1 })
    
    return NextResponse.json({ success: true, data: orders })
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const body = await request.json()
    const { userId, user, items, total, shippingAddress } = body
    
    if (!userId || !user || !items || !total || !shippingAddress) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      )
    }
    
    // Generate tracking ID
    const trackingId = 'TRK' + Math.random().toString(36).substr(2, 9).toUpperCase()
    
    // Verify products exist and get current data
    const productIds = items.map((item: any) => item.productId)
    const products = await Product.find({ _id: { $in: productIds } })
    
    if (products.length !== productIds.length) {
      return NextResponse.json(
        { success: false, error: 'Some products not found' },
        { status: 400 }
      )
    }
    
    // Update product quantities
    for (const item of items) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { quantity: -item.quantity }
      })
    }
    
    // Create order with current product data
    const orderItems = items.map((item: any) => {
      const product = products.find(p => p._id.toString() === item.productId)
      return {
        productId: item.productId,
        product: {
          id: product!._id.toString(),
          name: product!.name,
          image: product!.image,
          price: product!.price
        },
        quantity: item.quantity
      }
    })
    
    const order = new Order({
      userId,
      user,
      items: orderItems,
      total: parseFloat(total),
      trackingId,
      shippingAddress
    })
    
    await order.save()
    
    return NextResponse.json(
      { success: true, data: order },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
