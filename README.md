# Farmers Marketplace 🌾

A full-stack e-commerce web application connecting farmers with buyers across communities. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

### 👨‍🌾 For Farmers (Admin)
- **Product Management**: Add, edit, and delete farm products
- **Order Tracking**: View and manage customer orders
- **Dashboard Analytics**: Track sales, revenue, and performance metrics
- **Inventory Management**: Monitor product quantities and availability

### 👨‍👩‍👧‍👦 For Buyers
- **Product Discovery**: Browse and search fresh farm products
- **Shopping Cart**: Add items and manage quantities
- **Secure Checkout**: Complete purchases with mock payment processing
- **Order Tracking**: Monitor order status and delivery progress
- **User Dashboard**: View order history and account information

### 🌟 Platform Features
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Authentication**: Secure login/signup with role-based access
- **Real-time Updates**: Live cart and order status updates
- **Search & Filtering**: Find products by category or keywords
- **Modern UI**: Clean, professional interface with smooth animations

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Authentication**: NextAuth.js with Credentials provider
- **State Management**: React Context API
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd farm-ecomm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)


### User Account
- **Email**: john@example.com
- **Password**: password123

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── admin/             # Admin dashboard
│   ├── products/          # Product pages
│   └── ...
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── ...
├── contexts/             # React Context providers
├── data/                 # Mock data and database
├── lib/                  # Utility functions
└── types/                # TypeScript type definitions
```

## Key Pages

- **Home** (`/`): Landing page with hero section and featured products
- **Products** (`/products`): Browse all products with search and filtering
- **Product Detail** (`/products/[id]`): Individual product information
- **Cart** (`/cart`): Shopping cart management
- **Checkout** (`/checkout`): Order placement and payment
- **Dashboard** (`/dashboard`): User order history and tracking
- **Admin Dashboard** (`/admin/dashboard`): Admin product and order management
- **About** (`/about`): Platform information and mission
- **Contact** (`/contact`): Contact form and information

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Environment Variables in Vercel**
   ```
   NEXTAUTH_URL=https://your-app.vercel.app
   NEXTAUTH_SECRET=your-production-secret
   ```

### Manual Deployment

```bash
npm run build
npm start
```

## Features in Detail

### Authentication System
- Secure login/signup with NextAuth.js
- Role-based access control (Admin/Buyer)
- Protected routes and API endpoints
- Session management with JWT tokens

### Shopping Cart
- Add/remove products with quantity management
- Persistent cart state using React Context
- Real-time total calculation
- Local storage for cart persistence

### Order Management
- Mock checkout process with form validation
- Order tracking with unique tracking IDs
- Status updates (Pending, Processing, Delivered)
- Order history in user dashboard

### Admin Features
- Product CRUD operations
- Order management and status updates
- Dashboard with analytics and statistics
- User management capabilities

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built as a Final Year Computer Science Project
- Department of Computer Science, MOUAU (Formerly Benue State University)
- Inspired by the need to connect local farmers with consumers


---

**Developed by Ojoh Peters 
