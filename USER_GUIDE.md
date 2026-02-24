# Jain Electronics - User Guide

A comprehensive guide for using the Jain Electronics e-commerce platform.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Customer Guide](#customer-guide)
3. [Admin Guide](#admin-guide)
4. [Troubleshooting](#troubleshooting)
5. [FAQs](#faqs)

---

## Getting Started

### First Visit

When you first visit the website:

1. **Homepage** - Browse featured products and categories
2. **Navigation** - Use header to navigate to different sections
3. **Cart** - Add items to your shopping cart
4. **Checkout** - Proceed to purchase
5. **Contact** - Send inquiries or feedback

### Key Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Browse featured products |
| Shop | `/shop` | View all products |
| Product | `/product/[id]` | View product details |
| Cart | `/cart` | Manage shopping cart |
| Checkout | `/checkout` | Complete purchase |
| Contact | `/contact` | Send inquiries |
| Admin | `/admin` | Admin dashboard |

---

## Customer Guide

### Browsing Products

#### Homepage
- View featured products
- Explore product categories
- Read about shop features
- Call-to-action buttons for shopping

#### Shop Page (`/shop`)
1. **Category Filter**: Click on category in sidebar to filter
2. **Price Range**: Use sliders to set budget
3. **Sort**: Choose sorting order (featured, price, name)
4. **Search**: Type product name to search
5. **View**: Click product to see details

### Product Details

On the product page, you can:
- **View Information**: Product name, description, price
- **Check Stock**: See availability
- **Read Reviews**: Check 5-star ratings
- **Related Products**: See similar items
- **Add to Cart**: Choose quantity and add

### Shopping Cart

#### Add Items
1. Go to product page
2. Select quantity
3. Click "Add to Cart"
4. See confirmation message

#### View Cart
1. Click shopping cart icon in header
2. See all items with prices
3. View order summary with:
   - Subtotal
   - Tax (18% GST)
   - Shipping cost (Free on orders >₹1000)
   - **Total**

#### Manage Cart
- **Update Quantity**: Use +/- buttons
- **Remove Item**: Click trash icon
- **Continue Shopping**: Go back to shop
- **Proceed to Checkout**: Move to payment

### Checkout Process

#### Step 1: Shipping Address
Fill in:
- Full Name (required)
- Email (required)
- Phone Number (required)
- Street Address (required)
- City (required)
- ZIP Code (optional)

#### Step 2: Payment Method
Choose:
- Credit/Debit Card
- UPI (Coming Soon)

If card selected, enter:
- Cardholder Name
- Card Number
- Expiry Date (MM/YY)
- CVV

#### Step 3: Review Order
- Verify shipping address
- Confirm payment method
- Check order total
- Place order

#### Step 4: Confirmation
- See order ID
- Receive confirmation message
- Email confirmation sent (when implemented)

### Contact & Inquiries

#### Send Inquiry
1. Go to Contact page (`/contact`)
2. Fill inquiry form:
   - Full Name
   - Email
   - Phone Number
   - Subject (optional)
   - Message
3. Click "Send Message"
4. Receive confirmation

#### Get Support
- **Call**: 9660076586
- **Email**: info@jainelectronics.com
- **Address**: Jain Electronics, Bundi Road, Bijoliya, Rajasthan
- **Hours**: Mon-Sat, 9AM-6PM

---

## Admin Guide

### Accessing Admin Dashboard

1. Navigate to `/admin`
2. Enter admin password: `admin123` (Change in production!)
3. Click "Login to Dashboard"

### Admin Dashboard Features

#### Overview Tab (Default)

**Metrics Displayed**:
- Total Products
- Orders Count
- Inquiries Count
- Total Revenue

**Recent Activity**:
- Last 3 orders
- Last 3 inquiries

#### Products Tab

##### View Products
- Search by name
- Sort by any column
- Filter active products
- See stock status

##### Add Product
1. Click "Add Product" button
2. Fill form:
   - Name (required)
   - Category (dropdown)
   - Price in ₹ (required)
   - Stock quantity (required)
3. Click "Add"

##### Edit Product
1. Click edit icon (pencil)
2. Modify details
3. Click "Update"

##### Delete Product
1. Click delete icon (trash)
2. Confirm deletion

#### Orders Tab

##### View Orders
- Order ID
- Total amount
- Order status
- Date created

**Status Types**:
- `pending` - Awaiting payment
- `processing` - Payment received
- `shipped` - In transit
- `delivered` - Completed

##### Update Order Status
- Edit in database
- Send notification email
- Track shipment

#### Inquiries Tab

##### View Inquiries
- Customer name
- Email address
- Phone number
- Message content
- Date submitted

##### Respond to Inquiry
- Note customer details
- Call or email
- Update inquiry status
- Track responses

---

## How to Use Features

### Search & Filter

#### Search Products
1. Use search box in header
2. Type product name
3. Results update in real-time

#### Filter by Category
- Click category in shop sidebar
- View filtered products
- Adjust price range if needed

#### Filter by Price
1. Go to shop page
2. Use price range sliders
3. Set minimum price
4. Set maximum price
5. See filtered results

#### Sort Products
1. Click sort dropdown
2. Choose option:
   - Featured
   - Price: Low to High
   - Price: High to Low
   - Name: A to Z

### Cart Operations

#### Add to Cart
1. View product
2. Select quantity
3. Click "Add to Cart"
4. Cart updates instantly

#### Update Quantity
1. Go to cart
2. Use +/- buttons
3. Quantity updates
4. Total recalculates

#### Remove Item
1. Go to cart
2. Click trash icon on item
3. Item removed instantly
4. Total updates

#### View Cart Total
- Subtotal: Sum of all items
- Tax: 18% GST
- Shipping: Free >₹1000, ₹100 otherwise
- **Total**: Final amount

### Checkout

#### Complete Order
1. Add items to cart
2. Click "Proceed to Checkout"
3. Enter shipping address
4. Select payment method
5. Review order
6. Click "Place Order"
7. See confirmation

#### Track Order
- View order ID in confirmation
- Check admin dashboard
- Email notifications (when enabled)

### Contact Shop

#### Phone Contact
- **Number**: 9660076586
- **Hours**: 9AM - 6PM (Mon-Sat)
- **Best for**: Urgent queries

#### Email Contact
- **Address**: info@jainelectronics.com
- **Response**: Within 24 hours
- **Best for**: Detailed inquiries

#### Online Form
- **Page**: `/contact`
- **Response**: Same day
- **Best for**: General inquiries

---

## Troubleshooting

### Issue: Cart Items Not Saving

**Problem**: Items disappear from cart after refresh

**Solutions**:
1. Check if localStorage is enabled
   - Chrome: Settings > Privacy > Clear browsing data
   - Firefox: about:preferences > Privacy
2. Try private/incognito mode
3. Clear browser cache
4. Try different browser

### Issue: Can't Login to Admin

**Problem**: "Invalid password" error

**Solutions**:
1. Check password: `admin123`
2. Verify CAPS LOCK is off
3. Clear browser cache
4. Try different browser
5. Check localStorage isn't full

### Issue: Products Not Showing

**Problem**: Shop page is empty or products missing

**Solutions**:
1. Refresh page (F5 or Cmd+R)
2. Clear cache (Ctrl+Shift+Delete)
3. Check internet connection
4. Try different browser
5. Contact support

### Issue: Checkout Won't Submit

**Problem**: Form doesn't proceed to next step

**Solutions**:
1. Check all required fields filled (marked with *)
2. Verify email format is valid
3. Ensure phone number has no special characters
4. Try different browser
5. Clear browser cache

### Issue: Slow Loading

**Problem**: Pages take long to load

**Solutions**:
1. Check internet speed
2. Close unnecessary browser tabs
3. Disable browser extensions
4. Clear browser cache
5. Try different network

### Issue: Can't Send Inquiry

**Problem**: Contact form submission fails

**Solutions**:
1. Fill all required fields
2. Verify email is valid format
3. Check internet connection
4. Try shorter message
5. Try again later

---

## FAQs

### General Questions

**Q: Is the shop open today?**
A: Check business hours at bottom of contact page or call 9660076586

**Q: How do I contact the shop?**
A: Call 9660076586, email info@jainelectronics.com, or use contact form

**Q: Do you offer bulk orders?**
A: Yes! Use contact form to inquire about wholesale pricing

**Q: Is the website mobile-friendly?**
A: Yes, fully responsive on phones, tablets, and desktops

### Shopping Questions

**Q: What payment methods do you accept?**
A: Currently demo mode. Real payments support coming soon

**Q: How long does shipping take?**
A: Typically 2-5 business days (local delivery faster)

**Q: What's your return policy?**
A: 30-day returns for unused products. See policy for details

**Q: Do you have a loyalty program?**
A: Currently under development. Sign up for updates

### Product Questions

**Q: Is the product in stock?**
A: Check the product page for current stock status

**Q: Can I pre-order out of stock items?**
A: Yes, use contact form to inquire

**Q: Are prices negotiable for bulk orders?**
A: Yes, contact us for wholesale quotes

**Q: Do you offer warranty?**
A: Yes, most products have manufacturer warranty

### Account Questions

**Q: Do I need to create an account?**
A: Not yet, checkout as guest. Accounts coming soon

**Q: Can I track my order?**
A: Yes, order ID provided in confirmation. Check admin page

**Q: How do I reset my password?**
A: Feature coming soon. Contact support meanwhile

### Technical Questions

**Q: What browsers are supported?**
A: Chrome, Firefox, Safari, Edge (latest 2 versions)

**Q: Is my data secure?**
A: Yes, following industry security standards

**Q: Can I access the API?**
A: Yes, see API_DOCUMENTATION.md for details

**Q: How do I report a bug?**
A: Email info@jainelectronics.com with details

---

## Tips & Tricks

### Save Money
- Use filters to find products in your price range
- Free shipping on orders above ₹1000
- Check for "Featured" products for deals

### Better Shopping Experience
- Save products to wishlist (coming soon)
- Join email list for updates
- Follow on social media (coming soon)

### Admin Tips
- Backup order data regularly
- Monitor low stock items
- Respond to inquiries quickly
- Update product photos regularly

### Website Speed
- Enable browser cache
- Use Firefox or Chrome
- Close extra tabs
- Disable extensions

---

## Getting Help

### Documentation
- README.md - Full documentation
- SETUP_GUIDE.md - Setup instructions
- API_DOCUMENTATION.md - API reference
- PROJECT_SUMMARY.md - Project overview

### Support Channels
1. **Email**: info@jainelectronics.com
2. **Phone**: 9660076586
3. **Contact Form**: `/contact` page
4. **In Person**: Jain Electronics, Bijoliya

### Response Times
- Email: Within 24 hours
- Phone: Immediate (during business hours)
- Contact Form: Same day
- In Person: Instant

---

## Best Practices

### For Customers
1. ✅ Create account for faster checkout (coming soon)
2. ✅ Save favorite products to wishlist
3. ✅ Read product reviews before buying
4. ✅ Check stock before purchasing
5. ✅ Save order confirmation email

### For Admin
1. ✅ Update product info regularly
2. ✅ Manage inventory carefully
3. ✅ Respond to inquiries promptly
4. ✅ Process orders quickly
5. ✅ Back up data regularly

### For Everyone
1. ✅ Use strong passwords
2. ✅ Keep browser updated
3. ✅ Enable two-factor auth (coming)
4. ✅ Report issues immediately
5. ✅ Provide feedback

---

## Accessibility

### Features
- Keyboard navigation
- Screen reader support
- High contrast mode
- Adjustable text size
- Mobile-friendly design

### How to Use
- **Keyboard**: Tab to navigate, Enter to select
- **Screen Reader**: Use NVDA or JAWS
- **Zoom**: Ctrl/Cmd + Plus to increase
- **Contrast**: Check browser settings

---

## Updates & Maintenance

### Regular Maintenance
- Products updated weekly
- Prices verified monthly
- Security patches applied
- New features added regularly

### Version History
- v1.0.0 (Feb 2026) - Initial launch
- v1.1.0 (Coming) - User accounts
- v1.2.0 (Coming) - Real payments
- v2.0.0 (Coming) - Advanced features

---

## Feedback

We'd love to hear from you!

### Share Feedback
- Use contact form
- Call 9660076586
- Email info@jainelectronics.com
- Visit in person

### Help Us Improve
- Report bugs
- Suggest features
- Share reviews
- Tell friends

---

**Last Updated**: February 24, 2026
**Version**: 1.0.0

**For more information, visit jainelectronics.com or contact 9660076586**
