import Hero from '@/components/hero'
import ProductShowcase from '@/components/product-showcase'
import Features from '@/components/features'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <Features />
      <Footer />
    </main>
  )
}
