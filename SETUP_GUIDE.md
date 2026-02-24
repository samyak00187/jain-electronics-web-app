# Jain Electronics - Setup & Deployment Guide

## Quick Start (5 minutes)

### 1. Install & Run Locally
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open browser to http://localhost:3000
```

### 2. Access Admin Dashboard
- Navigate to http://localhost:3000/admin
- Password: `admin123`

### 3. Test the Application
- Browse products on the homepage
- Search and filter in the shop
- Add items to cart
- Proceed to checkout
- Check admin dashboard for orders

---

## Deployment to Vercel

### Option 1: Direct Deployment (Recommended)

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Click "Deploy"
   - Your site will be live in minutes!

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts to deploy
```

---

## Environment Configuration

### Development Environment
All default settings work out of the box. No environment variables needed for demo mode.

### Production Environment

Create a `.env.local` file:
```env
# Admin Password (Change this!)
ADMIN_PASSWORD=your_secure_password_here

# Database URL (when ready to use real database)
DATABASE_URL=your_database_url_here

# Payment Gateway Keys (when integrating)
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
RAZORPAY_KEY_ID=razorpay_key_id
RAZORPAY_KEY_SECRET=razorpay_key_secret

# Email Service (for notifications)
SMTP_HOST=your_email_host
SMTP_USER=your_email
SMTP_PASSWORD=your_email_password
```

---

## Customization Guide

### 1. Update Shop Information

**File**: `/lib/shop-config.ts`

```typescript
export const SHOP_CONFIG = {
  name: 'Your Shop Name',
  owner: 'Your Name',
  contact: 'Your Phone',
  address: 'Your Address',
  email: 'your@email.com',
  description: 'Your description',
  categories: ['Category1', 'Category2', ...],
};
```

### 2. Change Colors & Branding

**File**: `/lib/shop-config.ts`

```typescript
export const SHOP_COLORS = {
  primary: '#FF0000',      // Main color (red)
  secondary: '#000000',    // Secondary color
  accent: '#FFA500',       // Accent color
  // ... other colors
};
```

Also update:
- `/app/layout.tsx` - Metadata and title
- Tailwind classes throughout the app (search for `red-600`, `bg-red-*`)

### 3. Add or Modify Products

**File**: `/lib/db.ts`

Add products to the `products` array:
```typescript
{
  id: 'unique-product-id',
  name: 'Product Name',
  category: 'Your Category',
  price: 1999,
  image: '/path/to/image',
  description: 'Product description',
  stock: 50,
}
```

### 4. Update Admin Password

**File**: `/lib/auth.ts`

```typescript
const ADMIN_PASSWORD = 'your_new_secure_password';
```

Or use environment variable:
```typescript
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
```

### 5. Add Real Images

Replace placeholder images:
1. Add images to `/public` folder
2. Update product image paths in `/lib/db.ts`
3. Update component image references

---

## Integration Guide

### Adding Real Database

#### Option A: Supabase (Recommended for beginners)

1. Create Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Install client:
```bash
pnpm add @supabase/supabase-js
```

4. Update `/lib/db.ts` to use Supabase client
5. Create tables for products, orders, users

#### Option B: Neon PostgreSQL

1. Create Neon account at [neon.tech](https://neon.tech)
2. Create database
3. Install client:
```bash
pnpm add pg
```

4. Update `/lib/db.ts` with connection pool

### Adding Payment Gateway

#### Stripe Integration

1. Create Stripe account at [stripe.com](https://stripe.com)
2. Install Stripe:
```bash
pnpm add stripe
```

3. Update `/app/checkout/page.tsx` to process payments
4. Add webhook handlers in `/app/api/webhooks/stripe.ts`

#### Razorpay Integration

1. Create Razorpay account at [razorpay.com](https://razorpay.com)
2. Install Razorpay:
```bash
pnpm add razorpay
```

3. Update checkout to support UPI and card payments
4. Add webhook handlers for payment confirmation

### Email Notifications

Install email package:
```bash
pnpm add nodemailer
```

Create `/app/api/send-email/route.ts`:
```typescript
import nodemailer from 'nodemailer';

// Send confirmation emails on order
// Send inquiry response emails
```

---

## Performance Optimization

### 1. Image Optimization
- Use Next.js Image component
- Compress images before upload
- Use WebP format for web

### 2. Caching Strategy
- Implement ISR (Incremental Static Regeneration)
- Cache product data
- Use Redis for session management

### 3. Code Splitting
- Lazy load admin dashboard
- Code split payment components
- Dynamic imports for heavy components

### 4. Database Optimization
- Add indexes on frequently searched fields
- Use pagination for large queries
- Cache popular products

---

## Monitoring & Analytics

### Add Google Analytics

1. Create Google Analytics account
2. Get Measurement ID
3. Add to `/app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Monitor with Vercel Analytics

- Built-in with Vercel deployment
- Track Core Web Vitals
- Monitor performance

---

## Security Checklist

- [ ] Change admin password
- [ ] Use HTTPS only
- [ ] Add input validation
- [ ] Sanitize user inputs
- [ ] Implement rate limiting
- [ ] Add CSRF protection
- [ ] Use secure session cookies
- [ ] Hash passwords with bcrypt
- [ ] Implement proper error handling
- [ ] Hide sensitive data in env variables
- [ ] Regular security updates
- [ ] Back up data regularly

---

## Troubleshooting

### Issue: Cart data not persisting
**Solution**: Check localStorage is enabled in browser settings

### Issue: Admin login not working
**Solution**: Clear browser cache, check password in `/lib/auth.ts`

### Issue: Products not showing
**Solution**: Verify `/lib/db.ts` has products array populated

### Issue: Checkout form not submitting
**Solution**: Check console for validation errors, ensure all required fields filled

### Issue: Page not loading
**Solution**: 
- Check network tab in browser DevTools
- Look for 404 errors
- Verify file paths are correct

---

## Useful Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# Database
pnpm db:setup         # Initialize database
pnpm db:seed          # Seed initial data
pnpm db:migrate       # Run migrations

# Deployment
pnpm deploy           # Deploy to Vercel
git push              # Push to GitHub (triggers auto-deploy)
```

---

## Getting Help

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/UI](https://ui.shadcn.com)

### Community
- Stack Overflow (tag with `nextjs`, `react`)
- GitHub Discussions
- Discord communities

### Professional Support
- Contact Jain Electronics: 9660076586
- Email: info@jainelectronics.com

---

## Next Steps

1. ✅ Test application locally
2. ✅ Customize shop information
3. ✅ Add real products
4. ✅ Deploy to Vercel
5. ⬜ Integrate real database
6. ⬜ Add payment processing
7. ⬜ Set up email notifications
8. ⬜ Configure analytics
9. ⬜ Optimize for SEO
10. ⬜ Plan marketing strategy

---

**Last Updated**: February 2026
**Version**: 1.0.0
