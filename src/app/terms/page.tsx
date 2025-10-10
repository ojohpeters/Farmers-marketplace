import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                By accessing and using Farmers Marketplace, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use License</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>Permission is granted to temporarily download one copy of the materials on Farmers Marketplace for personal, non-commercial transitory viewing only.</p>
                <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Modify or copy the materials</li>
                  <li>• Use the materials for any commercial purpose or for any public display</li>
                  <li>• Attempt to reverse engineer any software contained on the website</li>
                  <li>• Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times.</p>
                <p>You are responsible for safeguarding the password and for all activities that occur under your account.</p>
                <p>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, or error-free.</p>
                <p>Product prices are subject to change without notice. We reserve the right to modify or discontinue products at any time.</p>
                <p>Fresh produce may vary in appearance from product images due to seasonal changes and natural variations.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>All payments must be made in advance before order processing begins.</p>
                <p>We accept various payment methods including credit cards, bank transfers, and mobile money.</p>
                <p>Refunds will be processed according to our return policy within 5-7 business days.</p>
                <p>You are responsible for any applicable taxes, duties, or fees associated with your purchase.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delivery and Risk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>Delivery times are estimates and may vary due to factors beyond our control.</p>
                <p>Risk of loss and title for products purchased pass to you upon delivery to the carrier.</p>
                <p>We are not responsible for delays caused by weather, traffic, or other circumstances beyond our control.</p>
                <p>You must inspect products upon delivery and report any issues within 24 hours.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prohibited Uses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>You may not use our service:</p>
                <ul className="space-y-2 ml-4">
                  <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>• To submit false or misleading information</li>
                  <li>• To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                In no event shall Farmers Marketplace, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                These Terms shall be interpreted and governed by the laws of Nigeria. Any disputes arising from these terms 
                or your use of our service shall be subject to the exclusive jurisdiction of the courts in Benue State, Nigeria.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> legal@farmersmarket.com</p>
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
