import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'
import User from '@/models/User'
import Category from '@/models/Category'
import bcrypt from 'bcryptjs'

const seedData = async () => {
  try {
    await connectDB()
    console.log('Connected to MongoDB')

    // Clear existing data
    await Product.deleteMany({})
    await User.deleteMany({})
    await Category.deleteMany({})
    console.log('Cleared existing data')

    // Create admin user
    const hashedPassword = await bcrypt.hash('password123', 12)
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@farmersmarket.com',
      password: hashedPassword,
      role: 'admin'
    })
    await adminUser.save()
    console.log('Created admin user')

    // Create regular user
    const regularUser = new User({
      name: 'John Doe',
      email: 'john@example.com',
      password: hashedPassword,
      role: 'buyer'
    })
    await regularUser.save()
    console.log('Created regular user')

    // Create categories
    const categories = [
      { name: 'Vegetables', description: 'Fresh vegetables from local farms' },
      { name: 'Fruits', description: 'Seasonal fruits and berries' },
      { name: 'Grains', description: 'Rice, wheat, and other grains' },
      { name: 'Dairy', description: 'Milk, cheese, and dairy products' },
      { name: 'Herbs & Spices', description: 'Fresh herbs and spices' }
    ]

    for (const categoryData of categories) {
      const category = new Category(categoryData)
      await category.save()
    }
    console.log('Created categories')

    // Create products
    const products = [
      {
        name: 'Fresh Tomatoes',
        description: 'Juicy, ripe tomatoes grown locally without pesticides. Perfect for salads, cooking, or canning.',
        price: 450,
        category: 'Vegetables',
        quantity: 50,
        image: 'https://images.unsplash.com/photo-1546470427-e8b3d1a1c3a8?w=400&h=300&fit=crop'
      },
      {
        name: 'Organic Carrots',
        description: 'Sweet and crunchy organic carrots, rich in vitamins and minerals. Great for snacking or cooking.',
        price: 350,
        category: 'Vegetables',
        quantity: 75,
        image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop'
      },
      {
        name: 'Fresh Bananas',
        description: 'Sweet and nutritious bananas, perfect for breakfast or as a healthy snack.',
        price: 200,
        category: 'Fruits',
        quantity: 100,
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop'
      },
      {
        name: 'Premium Rice',
        description: 'High-quality long grain rice, perfect for everyday cooking and special occasions.',
        price: 800,
        category: 'Grains',
        quantity: 30,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop'
      },
      {
        name: 'Fresh Milk',
        description: 'Pure, fresh milk from grass-fed cows. Rich in calcium and protein.',
        price: 300,
        category: 'Dairy',
        quantity: 60,
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop'
      },
      {
        name: 'Basil Leaves',
        description: 'Fresh basil leaves perfect for cooking, pesto, or garnishing dishes.',
        price: 150,
        category: 'Herbs & Spices',
        quantity: 25,
        image: 'https://images.unsplash.com/photo-1618172193624-8d8c65a8c9ae?w=400&h=300&fit=crop'
      },
      {
        name: 'Sweet Corn',
        description: 'Fresh, sweet corn on the cob. Perfect for grilling or boiling.',
        price: 400,
        category: 'Vegetables',
        quantity: 40,
        image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop'
      },
      {
        name: 'Mangoes',
        description: 'Sweet, juicy mangoes - the king of fruits. Perfect for smoothies or eating fresh.',
        price: 600,
        category: 'Fruits',
        quantity: 35,
        image: 'https://images.unsplash.com/photo-1605027990121-1c8c5e5e1c5e?w=400&h=300&fit=crop'
      }
    ]

    for (const productData of products) {
      const product = new Product(productData)
      await product.save()
    }
    console.log('Created products')

    console.log('Database seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedData()
