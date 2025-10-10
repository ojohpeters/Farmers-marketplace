import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Truck, Clock, Shield, MapPin } from 'lucide-react'

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Information</h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about our delivery service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="w-6 h-6 mr-2 text-farm-green-600" />
                Delivery Areas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Makurdi and surrounding areas</li>
                <li>• Abuja metropolitan area</li>
                <li>• Lagos Island and Mainland</li>
                <li>• Port Harcourt city</li>
                <li>• Kano metropolitan area</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-farm-green-600" />
                Delivery Times
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Standard delivery: 24-48 hours</li>
                <li>• Express delivery: 12-24 hours</li>
                <li>• Same-day delivery: Available in select areas</li>
                <li>• Weekend deliveries available</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-6 h-6 mr-2 text-farm-green-600" />
                Packaging
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                All products are carefully packaged using eco-friendly materials to ensure freshness and quality during transit.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-farm-green-600" />
                Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Track your order in real-time using the tracking number provided via email and SMS notifications.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Shipping Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Order Value</th>
                    <th className="text-left py-3 px-4">Standard Delivery</th>
                    <th className="text-left py-3 px-4">Express Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Under ₦5,000</td>
                    <td className="py-3 px-4">₦500</td>
                    <td className="py-3 px-4">₦1,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">₦5,000 - ₦15,000</td>
                    <td className="py-3 px-4">₦300</td>
                    <td className="py-3 px-4">₦800</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Over ₦15,000</td>
                    <td className="py-3 px-4">FREE</td>
                    <td className="py-3 px-4">₦500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
