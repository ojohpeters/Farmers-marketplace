import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(price)
}

export function generateTrackingId(): string {
  return 'TRK' + Math.random().toString(36).substr(2, 9).toUpperCase()
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}
