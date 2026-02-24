// In-memory database for Jain Electronics
// In production, this would use a real database

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  stock: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  shippingAddress: string;
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  password: string; // Should be hashed in production
  createdAt: Date;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}

// Product database
export const products: Product[] = [
  // Power Tools - Grinders
  {
    id: 'grinder-001',
    name: 'Angle Grinder 4.5 inch',
    category: 'Power Tools',
    price: 1299,
    image: '/api/placeholder?w=400&h=300&text=Angle+Grinder',
    description: 'Professional grade angle grinder with 4.5 inch cutting disc',
    stock: 25,
  },
  {
    id: 'grinder-002',
    name: 'Bench Grinder 6 inch',
    category: 'Power Tools',
    price: 2499,
    image: '/api/placeholder?w=400&h=300&text=Bench+Grinder',
    description: 'Heavy-duty bench grinder with dual wheels',
    stock: 15,
  },
  {
    id: 'grinder-003',
    name: 'Mini Grinder Rotary Tool',
    category: 'Power Tools',
    price: 899,
    image: '/api/placeholder?w=400&h=300&text=Mini+Grinder',
    description: 'Compact rotary tool with variable speed',
    stock: 40,
  },
  {
    id: 'grinder-004',
    name: 'Belt Grinder',
    category: 'Power Tools',
    price: 3499,
    image: '/api/placeholder?w=400&h=300&text=Belt+Grinder',
    description: 'Industrial belt grinder for heavy-duty grinding',
    stock: 8,
  },
  {
    id: 'grinder-005',
    name: 'Disc Grinder 7 inch',
    category: 'Power Tools',
    price: 1699,
    image: '/api/placeholder?w=400&h=300&text=Disc+Grinder',
    description: '7 inch disc grinder with powerful motor',
    stock: 20,
  },

  // Power Tools - Cutters
  {
    id: 'cutter-001',
    name: 'Metal Cutting Saw',
    category: 'Power Tools',
    price: 2199,
    image: '/api/placeholder?w=400&h=300&text=Metal+Saw',
    description: 'Precision metal cutting circular saw',
    stock: 12,
  },
  {
    id: 'cutter-002',
    name: 'Jigsaw Variable Speed',
    category: 'Power Tools',
    price: 1399,
    image: '/api/placeholder?w=400&h=300&text=Jigsaw',
    description: 'Variable speed jigsaw for wood and metal',
    stock: 18,
  },
  {
    id: 'cutter-003',
    name: 'Hand Circular Saw',
    category: 'Power Tools',
    price: 899,
    image: '/api/placeholder?w=400&h=300&text=Circular+Saw',
    description: 'Portable circular saw with laser guide',
    stock: 30,
  },
  {
    id: 'cutter-004',
    name: 'Tile Cutter Machine',
    category: 'Power Tools',
    price: 4999,
    image: '/api/placeholder?w=400&h=300&text=Tile+Cutter',
    description: 'Electric tile cutter for precise cuts',
    stock: 5,
  },
  {
    id: 'cutter-005',
    name: 'Hacksaw',
    category: 'Power Tools',
    price: 399,
    image: '/api/placeholder?w=400&h=300&text=Hacksaw',
    description: 'Heavy-duty hacksaw for metal cutting',
    stock: 50,
  },

  // Power Tools - Other
  {
    id: 'drill-001',
    name: 'Impact Drill 20V',
    category: 'Power Tools',
    price: 2299,
    image: '/api/placeholder?w=400&h=300&text=Impact+Drill',
    description: 'Cordless impact drill with battery',
    stock: 22,
  },
  {
    id: 'drill-002',
    name: 'Rotary Hammer Drill',
    category: 'Power Tools',
    price: 3799,
    image: '/api/placeholder?w=400&h=300&text=Rotary+Hammer',
    description: 'Professional rotary hammer for concrete',
    stock: 10,
  },
  {
    id: 'driver-001',
    name: 'Screwdriver Set Electric',
    category: 'Power Tools',
    price: 699,
    image: '/api/placeholder?w=400&h=300&text=E-Driver',
    description: 'Electric screwdriver with 100 bits',
    stock: 35,
  },
  {
    id: 'sander-001',
    name: 'Orbital Sander',
    category: 'Power Tools',
    price: 1599,
    image: '/api/placeholder?w=400&h=300&text=Orbital+Sander',
    description: 'Electric orbital sander for smooth finishing',
    stock: 14,
  },
  {
    id: 'nailer-001',
    name: 'Nail Gun Pneumatic',
    category: 'Power Tools',
    price: 1299,
    image: '/api/placeholder?w=400&h=300&text=Nail+Gun',
    description: 'Air-powered nail gun with compressor',
    stock: 17,
  },

  // Electrical Items - Fans
  {
    id: 'fan-001',
    name: 'Ceiling Fan 1200mm',
    category: 'Electrical Items',
    price: 1499,
    image: '/api/placeholder?w=400&h=300&text=Ceiling+Fan',
    description: 'Energy-efficient ceiling fan with remote',
    stock: 45,
  },
  {
    id: 'fan-002',
    name: 'Table Fan 24 inch',
    category: 'Electrical Items',
    price: 699,
    image: '/api/placeholder?w=400&h=300&text=Table+Fan',
    description: 'Portable table fan with oscillation',
    stock: 60,
  },
  {
    id: 'fan-003',
    name: 'Pedestal Fan 18 inch',
    category: 'Electrical Items',
    price: 799,
    image: '/api/placeholder?w=400&h=300&text=Pedestal+Fan',
    description: 'Adjustable height pedestal fan',
    stock: 55,
  },
  {
    id: 'fan-004',
    name: 'Tower Fan with AC',
    category: 'Electrical Items',
    price: 2499,
    image: '/api/placeholder?w=400&h=300&text=Tower+Fan',
    description: 'Tower fan with air conditioning feature',
    stock: 20,
  },
  {
    id: 'fan-005',
    name: 'Wall Mount Fan',
    category: 'Electrical Items',
    price: 549,
    image: '/api/placeholder?w=400&h=300&text=Wall+Fan',
    description: 'Compact wall-mounted fan',
    stock: 70,
  },

  // Electrical Items - Lights
  {
    id: 'light-001',
    name: 'LED Bulb 9W Cool White',
    category: 'Electrical Items',
    price: 149,
    image: '/api/placeholder?w=400&h=300&text=LED+Bulb',
    description: 'Long-lasting LED bulb with 10-year warranty',
    stock: 200,
  },
  {
    id: 'light-002',
    name: 'Ceiling Light Fixture',
    category: 'Electrical Items',
    price: 899,
    image: '/api/placeholder?w=400&h=300&text=Ceiling+Light',
    description: 'Modern ceiling light with dimmable feature',
    stock: 35,
  },
  {
    id: 'light-003',
    name: 'Wall Sconce 40W',
    category: 'Electrical Items',
    price: 599,
    image: '/api/placeholder?w=400&h=300&text=Wall+Sconce',
    description: 'Decorative wall sconce lighting',
    stock: 40,
  },
  {
    id: 'light-004',
    name: 'LED Tube Light 20W',
    category: 'Electrical Items',
    price: 299,
    image: '/api/placeholder?w=400&h=300&text=Tube+Light',
    description: 'Energy-efficient tube light',
    stock: 120,
  },
  {
    id: 'light-005',
    name: 'Spotlight LED 30W',
    category: 'Electrical Items',
    price: 399,
    image: '/api/placeholder?w=400&h=300&text=Spotlight',
    description: 'Adjustable LED spotlight',
    stock: 85,
  },

  // Electrical Items - Coolers
  {
    id: 'cooler-001',
    name: 'Air Cooler 60L',
    category: 'Electrical Items',
    price: 4999,
    image: '/api/placeholder?w=400&h=300&text=Air+Cooler',
    description: 'Desert cooler with honeycomb pads',
    stock: 15,
  },
  {
    id: 'cooler-002',
    name: 'Water Cooler Dispenser',
    category: 'Electrical Items',
    price: 2999,
    image: '/api/placeholder?w=400&h=300&text=Water+Cooler',
    description: 'Hot and cold water dispenser',
    stock: 10,
  },
  {
    id: 'cooler-003',
    name: 'Mini USB Cooler',
    category: 'Electrical Items',
    price: 299,
    image: '/api/placeholder?w=400&h=300&text=Mini+Cooler',
    description: 'Portable mini cooler for desk',
    stock: 100,
  },
  {
    id: 'cooler-004',
    name: 'Industrial Air Cooler',
    category: 'Electrical Items',
    price: 7999,
    image: '/api/placeholder?w=400&h=300&text=Industrial+Cooler',
    description: 'Heavy-duty cooler for large areas',
    stock: 5,
  },

  // Components - Wires and Cables
  {
    id: 'wire-001',
    name: 'Copper Wire 1.5mm (100m)',
    category: 'Components',
    price: 399,
    image: '/api/placeholder?w=400&h=300&text=Copper+Wire',
    description: '100 meters of copper wire',
    stock: 80,
  },
  {
    id: 'wire-002',
    name: 'Power Cable 2.5mm (50m)',
    category: 'Components',
    price: 599,
    image: '/api/placeholder?w=400&h=300&text=Power+Cable',
    description: '50 meters of power cable',
    stock: 60,
  },
  {
    id: 'cable-001',
    name: 'HDMI Cable 5m',
    category: 'Components',
    price: 299,
    image: '/api/placeholder?w=400&h=300&text=HDMI+Cable',
    description: 'High-speed HDMI cable',
    stock: 100,
  },
  {
    id: 'cable-002',
    name: 'USB-C Cable',
    category: 'Components',
    price: 199,
    image: '/api/placeholder?w=400&h=300&text=USB+Cable',
    description: 'Fast charging USB-C cable',
    stock: 150,
  },

  // Components - Switches and Plugs
  {
    id: 'switch-001',
    name: 'Light Switch 1-Way',
    category: 'Components',
    price: 79,
    image: '/api/placeholder?w=400&h=300&text=Light+Switch',
    description: 'Standard electrical switch',
    stock: 200,
  },
  {
    id: 'socket-001',
    name: 'Power Socket 5A',
    category: 'Components',
    price: 99,
    image: '/api/placeholder?w=400&h=300&text=Power+Socket',
    description: 'Standard power outlet',
    stock: 250,
  },
  {
    id: 'plug-001',
    name: 'Electrical Plug 15A',
    category: 'Components',
    price: 49,
    image: '/api/placeholder?w=400&h=300&text=Plug',
    description: 'Three-pin electrical plug',
    stock: 300,
  },
  {
    id: 'mcb-001',
    name: 'MCB 20A Single Pole',
    category: 'Components',
    price: 199,
    image: '/api/placeholder?w=400&h=300&text=MCB',
    description: 'Mini circuit breaker',
    stock: 100,
  },

  // Other Electronics
  {
    id: 'battery-001',
    name: 'Lithium Battery 18V',
    category: 'Other Electronics',
    price: 1499,
    image: '/api/placeholder?w=400&h=300&text=Battery',
    description: '18V lithium ion battery pack',
    stock: 50,
  },
  {
    id: 'charger-001',
    name: 'Fast Charger Multi-Port',
    category: 'Other Electronics',
    price: 599,
    image: '/api/placeholder?w=400&h=300&text=Charger',
    description: 'Universal charger for multiple devices',
    stock: 75,
  },
  {
    id: 'inverter-001',
    name: 'Inverter 500W',
    category: 'Other Electronics',
    price: 2999,
    image: '/api/placeholder?w=400&h=300&text=Inverter',
    description: 'DC to AC power inverter',
    stock: 20,
  },
  {
    id: 'stabilizer-001',
    name: 'Voltage Stabilizer 3KW',
    category: 'Other Electronics',
    price: 4499,
    image: '/api/placeholder?w=400&h=300&text=Stabilizer',
    description: 'Automatic voltage regulator',
    stock: 15,
  },
  {
    id: 'transformer-001',
    name: 'Step Down Transformer 5KW',
    category: 'Other Electronics',
    price: 5999,
    image: '/api/placeholder?w=400&h=300&text=Transformer',
    description: '5KW capacity step-down transformer',
    stock: 10,
  },
  {
    id: 'meter-001',
    name: 'Digital Multimeter',
    category: 'Other Electronics',
    price: 499,
    image: '/api/placeholder?w=400&h=300&text=Multimeter',
    description: 'Digital meter for AC/DC measurement',
    stock: 60,
  },
  {
    id: 'tester-001',
    name: 'Non-Contact Voltage Tester',
    category: 'Other Electronics',
    price: 199,
    image: '/api/placeholder?w=400&h=300&text=Tester',
    description: 'Safety voltage tester',
    stock: 80,
  },
  {
    id: 'speaker-001',
    name: 'Bluetooth Speaker 20W',
    category: 'Other Electronics',
    price: 999,
    image: '/api/placeholder?w=400&h=300&text=Speaker',
    description: 'Portable wireless speaker',
    stock: 40,
  },
  {
    id: 'led-strip-001',
    name: 'RGB LED Strip 5m',
    category: 'Other Electronics',
    price: 499,
    image: '/api/placeholder?w=400&h=300&text=LED+Strip',
    description: 'Color-changing LED strip with remote',
    stock: 70,
  },
  {
    id: 'motion-sensor-001',
    name: 'Motion Sensor Switch',
    category: 'Other Electronics',
    price: 399,
    image: '/api/placeholder?w=400&h=300&text=Motion+Sensor',
    description: 'Automatic motion detection switch',
    stock: 50,
  },
];

// In-memory storage
let users: User[] = [];
let orders: Order[] = [];
let inquiries: Inquiry[] = [];

// User functions
export function createUser(email: string, name: string, password: string): User {
  const newUser: User = {
    id: Math.random().toString(36).substr(2, 9),
    email,
    name,
    password, // In production, hash this!
    createdAt: new Date(),
  };
  users.push(newUser);
  return newUser;
}

export function getUserByEmail(email: string): User | undefined {
  return users.find((u) => u.email === email);
}

// Order functions
export function createOrder(
  userId: string,
  items: CartItem[],
  total: number,
  shippingAddress: string
): Order {
  const newOrder: Order = {
    id: Math.random().toString(36).substr(2, 9),
    userId,
    items,
    total,
    status: 'pending',
    shippingAddress,
    createdAt: new Date(),
  };
  orders.push(newOrder);
  return newOrder;
}

export function getOrdersByUserId(userId: string): Order[] {
  return orders.filter((o) => o.userId === userId);
}

export function getAllOrders(): Order[] {
  return orders;
}

// Inquiry functions
export function createInquiry(
  name: string,
  email: string,
  phone: string,
  message: string
): Inquiry {
  const newInquiry: Inquiry = {
    id: Math.random().toString(36).substr(2, 9),
    name,
    email,
    phone,
    message,
    createdAt: new Date(),
  };
  inquiries.push(newInquiry);
  return newInquiry;
}

export function getAllInquiries(): Inquiry[] {
  return inquiries;
}
