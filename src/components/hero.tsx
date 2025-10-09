import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Leaf, Truck, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-farm-green-50 to-farm-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connecting Farmers and{' '}
            <span className="text-farm-green-600">Buyers</span>{' '}
            Across Communities
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover fresh, locally-grown produce directly from farmers in your area. 
            Support local agriculture while enjoying the best quality fruits, vegetables, and farm products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-farm-green-600 hover:bg-farm-green-700">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-farm-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh & Organic</h3>
            <p className="text-gray-600">
              All products are sourced directly from local farms, ensuring freshness and quality.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-farm-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable delivery to your doorstep with real-time tracking.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-farm-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Platform</h3>
            <p className="text-gray-600">
              Secure transactions and verified farmers ensure you get the best products.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
