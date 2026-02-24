# Jain Electronics - E-Commerce Platform

A fully functional e-commerce platform for Jain Electronics, specializing in power tools and electrical components. This is a modern, responsive web application built with Next.js 16, React 19, and Tailwind CSS.

## Features

### Customer Features
- **Product Catalog**: Browse 100+ products across 4 categories
  - Power Tools (Grinders, Cutters, Drills, etc.)
  - Electrical Items (Fans, Lights, Coolers, etc.)
  - Components (Wires, Cables, Switches, etc.)
  - Other Electronics (Batteries, Chargers, Inverters, etc.)

- **Product Search & Filtering**: Search by name, filter by category and price range
- **Product Details**: View detailed product information, stock status, and reviews
- **Shopping Cart**: Add products to cart with quantity management
- **Checkout System**: Multi-step checkout with address and payment information
- **Order Tracking**: View order history and status
- **Contact & Inquiries**: Send product inquiries and messages directly

### Admin Features
- **Admin Dashboard**: Complete management interface
- **Product Management**: Add, edit, delete products with inventory tracking
- **Order Management**: View and track all customer orders
- **Inquiry Management**: View and respond to customer inquiries
- **Sales Analytics**: View key metrics like total revenue, orders, and inquiries

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, Shadcn/UI Components
- **State Management**: React Context API for cart management
- **Icons**: Lucide React
- **Notifications**: Sonner Toast Notifications
- **Database**: In-memory storage (can be replaced with real database)
- **Authentication**: Simple token-based admin auth

## Project Structure

```
/app
├── page.tsx                    # Homepage with hero and featured products
├── shop/                       # Product listing and filtering
├── product/[id]/              # Product detail pages
├── cart/                       # Shopping cart page
├── checkout/                   # Multi-step checkout process
├── contact/                    # Contact and inquiry form
├── admin/                      # Admin authentication and dashboard
├── api/                        # API routes for products and inquiries
└── layout.tsx                  # Root layout with cart provider

/components
├── header.tsx                  # Navigation header with cart
├── footer.tsx                  # Footer with shop info
└── ui/                         # Shadcn UI components

/lib
├── db.ts                       # Database models and functions
├── cart-context.tsx            # Shopping cart context and provider
├── shop-config.ts              # Shop configuration and colors
└── auth.ts                     # Admin authentication utilities
```

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jain-electronics
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## Shop Information

- **Shop Name**: Jain Electronics
- **Owner**: Manoj Jain
- **Contact**: 9660076586
- **Address**: Jain Electronics, Bundi Road, Naar Shree Ram Talkies, Bijoliya, Rajasthan 311602
- **Email**: info@jainelectronics.com
- **Business Hours**: Monday - Saturday, 9AM - 6PM IST

## Admin Access

To access the admin dashboard:

1. Navigate to `/admin`
2. Enter the admin password: `admin123` (Demo - change in production)
3. You'll have access to:
   - Dashboard with overview metrics
   - Product management interface
   - Order tracking
   - Customer inquiry management

## Key Features Explained

### Shopping Cart
- Uses React Context API with localStorage persistence
- Real-time quantity management
- Automatic total and tax calculation
- Free shipping on orders above ₹1000

### Checkout Process
1. **Address Step**: Enter shipping details
2. **Payment Step**: Select payment method (demo implementation)
3. **Review Step**: Verify order details
4. **Confirmation**: Order placed successfully

### Product Management
- Products stored in-memory with category filtering
- Stock management with availability indicators
- Advanced filtering by price range and category
- Sorting options: Featured, Price (Low/High), Name (A-Z)

### Admin Dashboard
- Beautiful dashboard with statistics
- Product CRUD operations
- Order status tracking
- Customer inquiry management
- Responsive design for mobile and desktop

## Customization

### Change Shop Details
Edit `/lib/shop-config.ts`:
```typescript
export const SHOP_CONFIG = {
  name: 'Your Shop Name',
  owner: 'Owner Name',
  contact: '9876543210',
  address: 'Your Address',
  // ... other properties
};
```

### Change Color Scheme
Edit `/lib/shop-config.ts` `SHOP_COLORS` object or modify Tailwind classes throughout the app.

### Add More Products
Edit `/lib/db.ts` and add products to the `products` array:
```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  category: 'Category Name',
  price: 1999,
  description: 'Product description',
  stock: 50,
  image: '/path/to/image'
}
```

## Database Integration

Currently uses in-memory storage. To integrate with a real database:

1. Replace `/lib/db.ts` functions with database calls
2. Update to Supabase, Neon, or any PostgreSQL provider
3. Implement proper authentication system (NextAuth.js recommended)
4. Add environment variables for database connection

## Payment Processing

Currently has a demo checkout interface. To integrate real payments:

1. Stripe: Install `stripe` package and follow Stripe documentation
2. Razorpay: Integrate Razorpay SDK for UPI and card payments
3. Update checkout form to handle real transactions
4. Add webhook handlers for payment confirmation

## Security Notes

⚠️ **Important for Production**:
- Change admin password in `/lib/auth.ts`
- Use environment variables for sensitive data
- Implement proper authentication (NextAuth.js or similar)
- Hash passwords using bcrypt
- Add CSRF protection
- Implement rate limiting
- Use HTTPS only
- Add input validation and sanitization

## Performance Optimization

- Next.js 16 optimizations enabled
- Image optimization (add real images for better UX)
- Responsive design with mobile-first approach
- Efficient cart state management
- Lazy loading for product images

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

## Troubleshooting

### Cart not persisting
- Check browser's localStorage settings
- Clear browser cache and reload

### Admin dashboard not loading
- Ensure you're logged in with correct password
- Check browser console for errors

### Products not displaying
- Verify products array in `/lib/db.ts` is populated
- Check if category filters are working correctly

## Future Enhancements

- Real payment gateway integration
- User authentication system
- Order email notifications
- Product reviews and ratings
- Wishlist feature
- Multiple language support
- Real image uploads
- Inventory management system
- Email marketing integration
- Analytics dashboard

## License

This project is created for Jain Electronics. All rights reserved.

## Support

For issues or questions, contact: info@jainelectronics.com or call 9660076586

---

**Built with Next.js 16, React 19, and Tailwind CSS**
