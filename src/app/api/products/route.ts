import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    
    let query = {}
    
    if (category && category !== '') {
      query = { category }
    }
    
    if (search && search !== '') {
      query = {
        ...query,
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } }
        ]
      }
    }
    
    const products = await Product.find(query).sort({ createdAt: -1 })
    
    return NextResponse.json({ success: true, data: products })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const body = await request.json()
    const { name, description, price, category, quantity, image } = body
    
    if (!name || !description || !price || !category || !quantity || !image) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      )
    }
    
    const product = new Product({
      name,
      description,
      price: parseFloat(price),
      category,
      quantity: parseInt(quantity),
      image
    })
    
    await product.save()
    
    return NextResponse.json(
      { success: true, data: product },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    )
  }
}
