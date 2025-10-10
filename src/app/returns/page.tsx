import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, RefreshCw, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns & Refunds</h1>
          <p className="text-xl text-gray-600">
            Hassle-free returns and refunds for your peace of mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <RefreshCw className="w-6 h-6 mr-2 text-farm-green-600" />
                Return Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li>• 30-day return window from delivery date</li>
                <li>• Items must be unused and in original packaging</li>
                <li>• Fresh produce returns within 24 hours</li>
                <li>• Damaged items replaced immediately</li>
                <li>• No questions asked for quality issues</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-farm-green-600" />
                Refund Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-farm-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-farm-green-600 text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-600">Contact our support team</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-farm-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-farm-green-600 text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-600">Receive return authorization</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-farm-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-farm-green-600 text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-600">Package and ship items</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-farm-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-farm-green-600 text-sm font-bold">4</span>
                  </div>
                  <p className="text-gray-600">Receive refund within 5-7 business days</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-6 h-6 mr-2 text-farm-green-600" />
              Return Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Step</th>
                    <th className="text-left py-3 px-4">Timeframe</th>
                    <th className="text-left py-3 px-4">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Request</td>
                    <td className="py-3 px-4">Immediate</td>
                    <td className="py-3 px-4">Submit return request via dashboard or email</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Approval</td>
                    <td className="py-3 px-4">24 hours</td>
                    <td className="py-3 px-4">Return authorization and instructions</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Shipping</td>
                    <td className="py-3 px-4">1-3 days</td>
                    <td className="py-3 px-4">Package and ship items back</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Refund</td>
                    <td className="py-3 px-4">5-7 days</td>
                    <td className="py-3 px-4">Process refund to original payment method</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-gray-600 mb-4">Need help with a return?</p>
          <Link href="/contact">
            <Button className="bg-farm-green-600 hover:bg-farm-green-700">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
