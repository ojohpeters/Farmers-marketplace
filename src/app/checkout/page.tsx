'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { formatPrice, generateTrackingId } from '@/lib/utils'
import { useCart } from '@/contexts/cart-context'
import { CheckCircle, CreditCard, MapPin, User } from 'lucide-react'

export default function CheckoutPage() {
  const { state: cart, dispatch } = useCart()
  const { data: session } = useSession()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [orderId, setOrderId] = useState('')

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!session) {
      router.push('/auth/signin')
      return
    }
    
    setIsProcessing(true)

    try {
      // Simulate payment processing with a more realistic delay
      await new Promise(resolve => setTimeout(resolve, 3000))

      // Create order in MongoDB
      const orderData = {
        userId: session.user?.id,
        user: {
          id: session.user?.id,
          name: session.user?.name,
          email: session.user?.email
        },
        items: cart.items,
        total: cart.total,
        shippingAddress: formData
      }

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      const data = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to create order')
      }

      const order = data.data

      setOrderId(order._id)
      setShowSuccess(true)
      dispatch({ type: 'CLEAR_CART' })
    } catch (error) {
      console.error('Checkout error:', error)
      alert('There was an error processing your order. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Please sign in to continue</h2>
            <p className="text-gray-600 mb-6">You need to be signed in to proceed with checkout.</p>
            <Button onClick={() => router.push('/auth/signin')} className="bg-farm-green-600 hover:bg-farm-green-700">
              Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (cart.items.length === 0 && !showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some items to your cart before checking out.</p>
            <Button onClick={() => router.push('/products')} className="bg-farm-green-600 hover:bg-farm-green-700">
              Shop Now
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <Card className="overflow-hidden shadow-2xl border-0">
            <CardContent className="p-0">
              {/* Success Animation Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-10 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-6 animate-bounce">
                    <CheckCircle className="w-12 h-12 text-white animate-pulse" />
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in">
                    🎉 Payment Successful!
                  </h1>
                  <p className="text-green-100 text-lg animate-slide-up">
                    Your order has been confirmed and is being processed
                  </p>
                </div>
                
                {/* Floating particles animation */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-float opacity-60"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-float-delayed opacity-40"></div>
                <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-white rounded-full animate-float-slow opacity-50"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full animate-float opacity-30"></div>
              </div>

              {/* Order Details */}
              <div className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Order #{orderId}
                  </h2>
                  <p className="text-gray-600">
                    Thank you for your purchase! Your fresh farm products are on their way.
                  </p>
                </div>

                {/* Status Timeline */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 text-center">What happens next?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Order Confirmed</p>
                        <p className="text-sm text-gray-600">Payment processed successfully</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">📋</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Processing</p>
                        <p className="text-sm text-gray-600">Your order is being prepared for shipment</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🚚</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Shipping</p>
                        <p className="text-sm text-gray-600">Your goods will be shipped within 24-48 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🏠</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Delivery</p>
                        <p className="text-sm text-gray-600">Track your order on your dashboard</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">📧 Important:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• You&apos;ll receive a confirmation email shortly</li>
                    <li>• Track your order status in your dashboard</li>
                    <li>• Delivery typically takes 24-48 hours</li>
                    <li>• Contact support if you have any questions</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <Button 
                    onClick={() => router.push('/dashboard')} 
                    className="bg-farm-green-600 hover:bg-farm-green-700 h-12 text-lg font-medium transform hover:scale-105 transition-all duration-200"
                  >
                    📊 View Dashboard
                  </Button>
                  <Button 
                    onClick={() => router.push('/products')} 
                    variant="outline" 
                    className="h-12 text-lg font-medium border-2 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
                  >
                    🛒 Continue Shopping
                  </Button>
                </div>

                {/* Thank you message */}
                <div className="text-center pt-4 border-t">
                  <p className="text-gray-600 text-sm">
                    Thank you for choosing our farm-fresh products! 🌱
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="space-y-6">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cart.items.map((item) => (
                      <div key={item.productId} className="flex items-center space-x-3">
                        <div className="relative w-12 h-12">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{item.product.name}</h4>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium">{formatPrice(item.product.price * item.quantity)}</p>
                      </div>
                    ))}
                    
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{formatPrice(cart.total)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="text-green-600">Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>{formatPrice(cart.total * 0.05)}</span>
                      </div>
                      <div className="flex justify-between text-lg font-semibold border-t pt-2">
                        <span>Total</span>
                        <span>{formatPrice(cart.total + cart.total * 0.05)}</span>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-farm-green-600 hover:bg-farm-green-700 h-12 text-lg font-medium"
                    >
                      {isProcessing ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Processing Payment...</span>
                        </div>
                      ) : (
                        '🚀 Place Order'
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
