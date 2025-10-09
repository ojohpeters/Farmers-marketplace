import { Users, TrendingUp, Award, Heart } from 'lucide-react'

export default function Features() {
  const stats = [
    { label: 'Active Farmers', value: '500+', icon: Users },
    { label: 'Happy Customers', value: '10,000+', icon: Heart },
    { label: 'Products Sold', value: '50,000+', icon: TrendingUp },
    { label: 'Years of Service', value: '5+', icon: Award },
  ]

  return (
    <section className="py-20 bg-farm-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Farmers Marketplace?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to connecting communities with fresh, local produce
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-farm-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-farm-green-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Direct from Farm
            </h3>
            <p className="text-gray-600">
              Our products come directly from local farms, ensuring maximum freshness and supporting local agriculture.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quality Guaranteed
            </h3>
            <p className="text-gray-600">
              Every product is carefully selected and quality-checked before reaching your doorstep.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Community Focus
            </h3>
            <p className="text-gray-600">
              We believe in building stronger communities by connecting farmers and buyers directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
