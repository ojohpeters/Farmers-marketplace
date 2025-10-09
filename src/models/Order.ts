import mongoose, { Document, Schema } from 'mongoose'

export interface IOrderItem {
  productId: string
  product: {
    id: string
    name: string
    image: string
    price: number
  }
  quantity: number
}

export interface IOrder extends Document {
  userId: string
  user: {
    id: string
    name: string
    email: string
  }
  items: IOrderItem[]
  total: number
  status: 'pending' | 'processing' | 'delivered'
  trackingId: string
  shippingAddress: {
    fullName: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zipCode: string
  }
  createdAt: Date
  updatedAt: Date
}

const OrderSchema = new Schema<IOrder>({
  userId: {
    type: String,
    required: true
  },
  user: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true }
  },
  items: [{
    productId: { type: String, required: true },
    product: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true }
    },
    quantity: { type: Number, required: true, min: 1 }
  }],
  total: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'delivered'],
    default: 'pending'
  },
  trackingId: {
    type: String,
    required: true,
    unique: true
  },
  shippingAddress: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true }
  }
}, {
  timestamps: true
})

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema)
