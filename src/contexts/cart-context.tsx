'use client'

import { createContext, useContext, useReducer, ReactNode } from 'react'
import { CartItem, Product } from '@/types'

interface CartState {
  items: CartItem[]
  total: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        item => item.productId === action.payload.product.id
      )

      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.productId === action.payload.product.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0),
        }
      }

      const newItems = [
        ...state.items,
        {
          productId: action.payload.product.id,
          product: action.payload.product,
          quantity: action.payload.quantity,
        },
      ]
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0),
      }
    }

    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(
        item => item.productId !== action.payload.productId
      )
      return {
        ...state,
        items: filteredItems,
        total: filteredItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0),
      }
    }

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { productId: action.payload.productId } })
      }

      const updatedItems = state.items.map(item =>
        item.productId === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0),
      }
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 }

    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
