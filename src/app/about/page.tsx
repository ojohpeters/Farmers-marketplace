import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Target, Award, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-farm-green-50 to-farm-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Farmers Marketplace
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re on a mission to connect farmers and buyers, creating a sustainable 
            ecosystem that benefits everyone in the agricultural community.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded with the vision of bridging the gap between local farmers and consumers, 
                Farmers Marketplace was born from a simple idea: fresh, local produce should be 
                accessible to everyone.
              </p>
              <p className="text-gray-600 mb-6">
                We understand the challenges farmers face in reaching customers directly, while 
                consumers struggle to find fresh, locally-grown products. Our platform solves 
                both problems by creating a direct connection between farm and table.
              </p>
              <p className="text-gray-600">
                Today, we&apos;re proud to support hundreds of local farmers and serve thousands of 
                customers across our communities, making fresh, sustainable agriculture accessible to all.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-farm-green-100 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🌾</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-farm-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community First</h3>
                <p className="text-gray-600">
                  We believe in supporting local communities and building lasting relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-farm-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Focus</h3>
                <p className="text-gray-600">
                  Every product on our platform meets our strict quality standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-farm-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600">
                  We believe in clear communication and honest business practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-farm-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from service to sustainability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-farm-green-600">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create a sustainable agricultural ecosystem that connects local farmers 
                directly with consumers, promoting fresh, healthy food while supporting 
                local economies and reducing environmental impact.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-farm-green-600">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the leading platform that transforms how people access fresh, 
                local produce, making sustainable agriculture the norm and creating a 
                healthier, more connected world.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-farm-green-600 mb-2">500+</div>
              <div className="text-gray-600">Partner Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-farm-green-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-farm-green-600 mb-2">50,000+</div>
              <div className="text-gray-600">Products Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-farm-green-600 mb-2">5+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;re a passionate team of developers, farmers, and food enthusiasts 
            dedicated to revolutionizing the agricultural marketplace.
          </p>
          <Button className="bg-farm-green-600 hover:bg-farm-green-700">
            Join Our Team
          </Button>
        </div>
      </div>
    </div>
  )
}
