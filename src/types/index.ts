export interface User {
  id: string
  name: string
  email: string
  role: 'buyer' | 'admin'
  createdAt: Date
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  quantity: number
  image: string
  createdAt: Date
  updatedAt: Date
}

export interface CartItem {
  productId: string
  product: Product
  quantity: number
}

export interface Order {
  id: string
  userId: string
  user: User
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'delivered'
  trackingId: string
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: string
  name: string
  description: string
}
