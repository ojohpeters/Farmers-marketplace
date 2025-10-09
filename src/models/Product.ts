import mongoose, { Document, Schema } from 'mongoose'

export interface IProduct extends Document {
  name: string
  description: string
  price: number
  category: string
  quantity: number
  image: string
  createdAt: Date
  updatedAt: Date
}

const ProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema)
