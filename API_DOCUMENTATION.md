# Jain Electronics API Documentation

This document provides comprehensive API documentation for the Jain Electronics e-commerce platform.

## Base URL

```
http://localhost:3000/api
```

For production, use your Vercel deployment URL.

---

## Products API

### Get All Products

**Endpoint**: `GET /api/products`

**Description**: Retrieve all products or filter by category

**Query Parameters**:
- `category` (optional): Filter products by category
  - Valid values: "Power Tools", "Electrical Items", "Components", "Other Electronics"

**Example**:
```bash
# Get all products
curl http://localhost:3000/api/products

# Get products by category
curl http://localhost:3000/api/products?category=Power%20Tools
```

**Response**:
```json
[
  {
    "id": "grinder-001",
    "name": "Angle Grinder 4.5 inch",
    "category": "Power Tools",
    "price": 1299,
    "image": "/api/placeholder?w=400&h=300&text=Angle+Grinder",
    "description": "Professional grade angle grinder with 4.5 inch cutting disc",
    "stock": 25
  },
  ...
]
```

**Status Codes**:
- `200 OK` - Success
- `500 Internal Server Error` - Server error

---

## Inquiries API

### Create Inquiry

**Endpoint**: `POST /api/inquiries`

**Description**: Submit a customer inquiry

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "I'm interested in bulk orders"
}
```

**Required Fields**:
- `name` (string): Customer name
- `email` (string): Customer email
- `phone` (string): Customer phone number
- `message` (string): Inquiry message

**Example**:
```bash
curl -X POST http://localhost:3000/api/inquiries \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Rajesh Kumar",
    "email": "rajesh@example.com",
    "phone": "9876543210",
    "message": "Can I get wholesale prices?"
  }'
```

**Response** (201 Created):
```json
{
  "id": "inq-1234567890",
  "name": "Rajesh Kumar",
  "email": "rajesh@example.com",
  "phone": "9876543210",
  "message": "Can I get wholesale prices?",
  "createdAt": "2026-02-24T10:30:00Z"
}
```

**Status Codes**:
- `201 Created` - Inquiry created successfully
- `400 Bad Request` - Missing required fields
- `500 Internal Server Error` - Server error

### Get All Inquiries

**Endpoint**: `GET /api/inquiries`

**Description**: Retrieve all customer inquiries (Admin only)

**Authentication**: Admin token required in localStorage

**Example**:
```bash
curl http://localhost:3000/api/inquiries
```

**Response** (200 OK):
```json
[
  {
    "id": "inq-1234567890",
    "name": "Rajesh Kumar",
    "email": "rajesh@example.com",
    "phone": "9876543210",
    "message": "Can I get wholesale prices?",
    "createdAt": "2026-02-24T10:30:00Z"
  },
  ...
]
```

**Status Codes**:
- `200 OK` - Success
- `500 Internal Server Error` - Server error

---

## Data Models

### Product

```typescript
interface Product {
  id: string;                    // Unique product identifier
  name: string;                  // Product name
  category: string;              // Product category
  price: number;                 // Price in INR
  image: string;                 // Product image URL
  description: string;           // Product description
  stock: number;                 // Available quantity
}
```

### Cart Item

```typescript
interface CartItem {
  productId: string;             // Reference to product
  quantity: number;              // Number of items
  price: number;                 // Unit price at time of adding
}
```

### Order

```typescript
interface Order {
  id: string;                    // Unique order ID
  userId: string;                // Customer ID
  items: CartItem[];             // Products ordered
  total: number;                 // Order subtotal (₹)
  status: string;                // Order status
  shippingAddress: string;       // Shipping address
  createdAt: Date;               // Order creation time
}
```

### Inquiry

```typescript
interface Inquiry {
  id: string;                    // Unique inquiry ID
  name: string;                  // Customer name
  email: string;                 // Customer email
  phone: string;                 // Customer phone
  message: string;               // Inquiry message
  createdAt: Date;               // Submission time
}
```

### User

```typescript
interface User {
  id: string;                    // Unique user ID
  email: string;                 // User email
  name: string;                  // User full name
  password: string;              // Hashed password
  createdAt: Date;               // Account creation time
}
```

---

## Error Responses

All error responses follow this format:

```json
{
  "error": "Description of what went wrong"
}
```

### Common Error Codes

| Code | Message | Description |
|------|---------|-------------|
| 400 | Bad Request | Missing or invalid parameters |
| 404 | Not Found | Resource not found |
| 500 | Internal Server Error | Server-side error |

---

## Rate Limiting

Currently not implemented. In production, implement:
- 100 requests per minute for public endpoints
- 1000 requests per minute for authenticated endpoints
- 10 requests per minute for inquiry submission

---

## Authentication

### Admin Authentication

Admin access uses token-based authentication:

1. Login via `/admin` page with password
2. Token stored in `localStorage` as `adminToken`
3. Token required for admin-only API endpoints

**Token Format**:
```
admin-session-token
```

---

## CORS Policy

Currently allows all origins. In production, configure:

```typescript
const allowedOrigins = [
  'https://jainelectronics.com',
  'https://www.jainelectronics.com',
];
```

---

## Rate Limit Headers

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1708747200
```

---

## Pagination

For large datasets, implement pagination:

```bash
GET /api/products?page=1&limit=20
```

Response includes:
```json
{
  "data": [...],
  "page": 1,
  "limit": 20,
  "total": 100,
  "pages": 5
}
```

---

## Filtering & Sorting

### Filtering

```bash
# Filter by price range
GET /api/products?minPrice=500&maxPrice=2000

# Filter by stock status
GET /api/products?inStock=true
```

### Sorting

```bash
# Sort by price (ascending)
GET /api/products?sort=price&order=asc

# Sort by name
GET /api/products?sort=name&order=desc
```

---

## Response Headers

All responses include:

```
Content-Type: application/json
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

---

## Webhook Events

Future webhook implementation for:
- `order.created` - New order placed
- `order.shipped` - Order shipped
- `order.delivered` - Order delivered
- `inquiry.received` - New inquiry received
- `product.outofstock` - Product out of stock

---

## Code Examples

### JavaScript/Fetch

```javascript
// Get all products
const response = await fetch('/api/products');
const products = await response.json();

// Submit inquiry
const inquiry = await fetch('/api/inquiries', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    message: 'Product inquiry'
  })
});
```

### cURL

```bash
# Get products by category
curl "http://localhost:3000/api/products?category=Power%20Tools"

# Submit inquiry
curl -X POST "http://localhost:3000/api/inquiries" \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","phone":"9876543210","message":"Hi"}'
```

### Python

```python
import requests
import json

# Get products
response = requests.get('http://localhost:3000/api/products')
products = response.json()

# Submit inquiry
inquiry_data = {
    'name': 'John Doe',
    'email': 'john@example.com',
    'phone': '9876543210',
    'message': 'Product inquiry'
}
response = requests.post(
    'http://localhost:3000/api/inquiries',
    json=inquiry_data,
    headers={'Content-Type': 'application/json'}
)
```

---

## Best Practices

1. **Error Handling**: Always check response status
2. **Caching**: Cache product data client-side
3. **Validation**: Validate input on client before sending
4. **Security**: Never send sensitive data in URL parameters
5. **Performance**: Use pagination for large results
6. **Rate Limiting**: Implement backoff for failed requests

---

## Versioning

Current API Version: `v1`

For future versions:
```
GET /api/v2/products
POST /api/v2/orders
```

---

## Support

For API questions or issues:
- Email: info@jainelectronics.com
- Phone: 9660076586
- GitHub Issues: [Link to repository]

---

## Changelog

### Version 1.0.0 (2026-02-24)
- Initial API release
- Products endpoint
- Inquiries endpoint
- Admin dashboard API

---

**Last Updated**: February 24, 2026
**Maintained by**: Jain Electronics Development Team
