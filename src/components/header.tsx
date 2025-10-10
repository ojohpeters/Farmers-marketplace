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
    <header className="bg-white shadow-sm border-b overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-farm-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">🌾</span>
            </div>
            <span className="text-sm sm:text-xl font-bold text-farm-green-600 hidden xs:block">
              Farmers Marketplace
            </span>
            <span className="text-sm font-bold text-farm-green-600 xs:hidden">
              Farm Market
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
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-farm-green-600 transition-colors" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-farm-green-600 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* User menu */}
            {session ? (
              <div className="hidden sm:flex items-center space-x-2">
                <Link href={session.user?.role === 'admin' ? "/admin/dashboard" : "/dashboard"}>
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-farm-green-600 transition-colors" />
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => signOut()}
                  className="text-xs sm:text-sm px-2 sm:px-3"
                >
                  <span className="hidden sm:inline">Sign Out</span>
                  <span className="sm:hidden">Out</span>
                </Button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
                <Link href="/auth/signin">
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
                    <span className="hidden sm:inline">Sign In</span>
                    <span className="sm:hidden">In</span>
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
                    <span className="hidden sm:inline">Sign Up</span>
                    <span className="sm:hidden">Up</span>
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden ml-1 sm:ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-farm-green-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-farm-green-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-farm-green-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-farm-green-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile User Actions */}
              <div className="pt-4 border-t space-y-3">
                {session ? (
                  <>
                    <Link 
                      href={session.user?.role === 'admin' ? "/admin/dashboard" : "/dashboard"}
                      className="flex items-center space-x-2 text-gray-700 hover:text-farm-green-600 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="w-5 h-5" />
                      <span>Dashboard</span>
                    </Link>
                    <button
                      onClick={() => {
                        signOut()
                        setIsMenuOpen(false)
                      }}
                      className="w-full text-left text-gray-700 hover:text-farm-green-600 transition-colors py-2"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      href="/auth/signin"
                      className="block text-gray-700 hover:text-farm-green-600 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link 
                      href="/auth/signup"
                      className="block text-gray-700 hover:text-farm-green-600 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
