'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { ShoppingCart, User, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/cart-context'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session } = useSession()
  const { state: cart } = useCart()

  const cartItemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-farm-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🌾</span>
            </div>
            <span className="text-xl font-bold text-farm-green-600">
              Farmers Marketplace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-farm-green-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-farm-green-600 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-farm-green-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-farm-green-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-farm-green-600 transition-colors" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-farm-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* User menu */}
            {session ? (
              <div className="flex items-center space-x-2">
                <Link href={session.user?.role === 'admin' ? "/admin/dashboard" : "/dashboard"}>
                  <User className="w-6 h-6 text-gray-700 hover:text-farm-green-600 transition-colors" />
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/auth/signin">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-farm-green-600 transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-farm-green-600 transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-farm-green-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-farm-green-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
