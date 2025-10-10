import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply browse our products, add items to your cart, and proceed to checkout. You can pay securely using our payment system."
    },
    {
      question: "What are your delivery times?",
      answer: "We deliver within 24-48 hours for most locations. Express delivery options are available for urgent orders."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day return policy for unused items. Contact our support team for assistance with returns."
    },
    {
      question: "Are your products organic?",
      answer: "Many of our products are organic and locally sourced. Each product listing specifies its certification status."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email. You can track your order status in your dashboard."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and mobile money payments for your convenience."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our marketplace
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-farm-green-600 text-white rounded-lg hover:bg-farm-green-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
