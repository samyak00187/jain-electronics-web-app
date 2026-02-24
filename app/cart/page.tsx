'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';
import { products } from '@/lib/db';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const cartItems = items.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId),
  }));

  const shippingCost = total > 1000 ? 0 : 100;
  const tax = Math.round(total * 0.18);
  const finalTotal = total + tax + shippingCost;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-6">
              <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🛒</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Start shopping to add items to your cart</p>
            <Button asChild>
              <Link href="/shop">
                Continue Shopping <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {cartItems.map((item) => (
                  <div key={item.productId} className="p-4 border-b border-gray-200 last:border-b-0">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="bg-gray-100 w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-center text-gray-400 px-2">
                          {item.product?.name || 'Product'}
                        </span>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <Link href={`/product/${item.productId}`} className="font-semibold text-gray-900 hover:text-red-600 mb-1 block">
                          {item.product?.name || 'Unknown Product'}
                        </Link>
                        <p className="text-sm text-gray-600 mb-3">
                          SKU: {item.productId}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-lg text-red-600">₹{item.price}</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 py-1 bg-gray-100 rounded font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="text-red-600 hover:bg-red-50 p-2 rounded-lg self-start"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Line Total */}
                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                      <span className="text-sm text-gray-600">Line Total:</span>
                      <span className="font-semibold text-gray-900">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/shop">
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-32 border border-gray-200">
                <h3 className="font-bold text-lg mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (18% GST)</span>
                    <span>₹{tax}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
                  </div>
                  {shippingCost > 0 && (
                    <p className="text-xs text-green-600">Free shipping on orders above ₹1000</p>
                  )}
                </div>

                <div className="flex justify-between mb-6">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-xl text-red-600">₹{finalTotal}</span>
                </div>

                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>

                <Button variant="outline" asChild className="w-full mt-3">
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
