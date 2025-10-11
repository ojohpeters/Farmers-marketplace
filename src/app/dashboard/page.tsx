'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { Package, ShoppingBag, User, Clock, CheckCircle, Truck } from 'lucide-react'

interface Order {
  _id: string
  items: Array<{
    product: {
      id: string
      name: string
      image: string
      price: number
    }
    quantity: number
  }>
  total: number
  trackingId: string
  status: 'pending' | 'processing' | 'delivered'
  createdAt: string
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])

  const fetchOrders = useCallback(async () => {
    try {
      const response = await fetch(`/api/orders?userId=${session?.user?.id}`)
      const data = await response.json()
      
      if (data.success) {
        setOrders(data.data)
      }
    } catch (error) {
      console.error('Error fetching orders:', error)
    }
  }, [session?.user?.id])

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/auth/signin')
      return
    }

    fetchOrders()
  }, [session, status, router, fetchOrders])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />
      case 'processing':
        return <Truck className="w-5 h-5 text-blue-500" />
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'processing':
        return 'bg-blue-100 text-blue-800'
      case 'delivered':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-farm-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {session.user?.name}!
          </h1>
          <p className="text-sm sm:text-base text-gray-600">Here&apos;s what&apos;s happening with your orders</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center">
                <div className="p-2 bg-farm-green-100 rounded-lg">
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-farm-green-600" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="text-xs sm:text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">{orders.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Package className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="text-xs sm:text-sm font-medium text-gray-600">Active Orders</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    {orders.filter(order => order.status !== 'delivered').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-1">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="text-xs sm:text-sm font-medium text-gray-600">Delivered</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    {orders.filter(order => order.status === 'delivered').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
                <Button onClick={() => router.push('/products')} className="bg-farm-green-600 hover:bg-farm-green-700">
                  Start Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order._id} className="border rounded-lg p-3 sm:p-4">
                    {/* Mobile-first header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                          Order #{order._id.slice(-8)}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center justify-between sm:flex-col sm:items-end sm:space-y-1">
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">
                          {formatPrice(order.total)}
                        </p>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          <span className="ml-1 capitalize">{order.status}</span>
                        </span>
                      </div>
                    </div>

                    {/* Mobile-optimized content */}
                    <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                      {/* Items Section */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Items</h4>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                                <Image
                                  src={item.product.image}
                                  alt={item.product.name}
                                  fill
                                  className="object-cover rounded"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                                  {item.product.name}
                                </p>
                                <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                              </div>
                              <p className="text-xs sm:text-sm font-medium text-gray-900 flex-shrink-0">
                                {formatPrice(item.product.price * item.quantity)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tracking Section */}
                      <div className="mt-4 sm:mt-0">
                        <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Tracking</h4>
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm text-gray-600 break-all">
                            ID: {order.trackingId}
                          </p>
                          {order.status === 'delivered' && (
                            <p className="text-xs sm:text-sm text-green-600">✓ Delivered successfully</p>
                          )}
                          {order.status === 'processing' && (
                            <p className="text-xs sm:text-sm text-blue-600">🚚 Being prepared for shipment</p>
                          )}
                          {order.status === 'pending' && (
                            <p className="text-xs sm:text-sm text-yellow-600">⏳ Order confirmed, processing...</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
