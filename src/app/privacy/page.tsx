import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                  <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Usage Information</h4>
                  <p>We automatically collect certain information about your use of our services, including your IP address, browser type, and device information.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Information</h4>
                  <p>We collect payment information to process your orders. This information is securely processed by our payment partners.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Process and fulfill your orders</li>
                <li>• Provide customer support</li>
                <li>• Send you important updates about your orders</li>
                <li>• Improve our services and user experience</li>
                <li>• Comply with legal obligations</li>
                <li>• Prevent fraud and ensure security</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
                <ul className="space-y-2 ml-4">
                  <li>• With service providers who assist us in operating our platform</li>
                  <li>• When required by law or to protect our rights</li>
                  <li>• In connection with a business transfer or merger</li>
                  <li>• With your explicit consent</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Access and Control</h4>
                  <p>You have the right to access, update, or delete your personal information at any time through your account settings.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Communication Preferences</h4>
                  <p>You can opt out of marketing communications while still receiving important order updates.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Portability</h4>
                  <p>You can request a copy of your data in a portable format.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@farmersmarket.com</p>
                <p><strong>Phone:</strong> +234 815 528 2910</p>
                <p><strong>Address:</strong> MOUAU Campus, Makurdi, Benue State, Nigeria</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
