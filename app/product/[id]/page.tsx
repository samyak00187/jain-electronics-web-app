'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/db';
import { useCart } from '@/lib/cart-context';
import { Heart, Share2, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Product not found</h1>
          <Button asChild className="bg-yellow-400 text-black border-2 border-yellow-400 hover:bg-yellow-300 font-bold">
            <Link href="/shop">Back to Shop</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`Added ${quantity}x ${product.name} to cart`);
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex gap-2 text-sm text-gray-700 font-semibold">
          <Link href="/" className="hover:text-yellow-600">Home</Link>
          <span className="text-black">/</span>
          <Link href="/shop" className="hover:text-yellow-600">Shop</Link>
          <span className="text-black">/</span>
          <Link href={`/shop?category=${product.category}`} className="hover:text-yellow-600">
            {product.category}
          </Link>
          <span className="text-black">/</span>
          <span className="text-black">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12 pb-8 border-b-2 border-black">
          {/* Product Image */}
          <div className="bg-gray-200 border-2 border-black rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-600 text-center px-4 font-semibold">{product.name}</span>
          </div>

          {/* Product Details */}
          <div>
            <span className="inline-block text-xs font-bold text-black bg-yellow-400 px-3 py-1 rounded mb-4">
              {product.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
              {product.name}
            </h1>

            <div className="flex gap-4 items-center mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-700 font-semibold">(128 reviews)</span>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed font-medium">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-yellow-600">₹{product.price}</span>
              <span className="text-gray-700 ml-4 font-semibold">Including GST</span>
            </div>

            {/* Stock Status */}
            <div className={`mb-6 p-3 rounded-lg text-sm font-bold ${product.stock > 10 ? 'bg-green-100 text-green-800 border-2 border-green-800' : product.stock > 0 ? 'bg-yellow-100 text-yellow-800 border-2 border-yellow-800' : 'bg-red-100 text-red-800 border-2 border-red-800'}`}>
              {product.stock > 10 ? `${product.stock} items in stock` : product.stock > 0 ? `Only ${product.stock} left in stock!` : 'Out of stock'}
            </div>

            {/* Quantity Selector */}
            {product.stock > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-bold text-black mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-black rounded-lg bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-yellow-100 text-black font-bold"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 py-2 font-bold text-black text-lg">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="p-2 hover:bg-yellow-100 text-black font-bold"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mb-8 flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 border-2 border-yellow-400"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12 border-2 border-black hover:bg-yellow-100">
                <Heart className="w-5 h-5 text-black" />
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12 border-2 border-black hover:bg-yellow-100">
                <Share2 className="w-5 h-5 text-black" />
              </Button>
            </div>

            {/* Trust Features */}
            <div className="border-t-2 border-black pt-6 space-y-3">
              <div className="flex gap-3">
                <Truck className="w-5 h-5 text-yellow-600 flex-shrink-0 font-bold" />
                <div>
                  <p className="font-bold text-black">Free Shipping</p>
                  <p className="text-sm text-gray-700">On orders above ₹1000</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-black">Authentic Guarantee</p>
                  <p className="text-sm text-gray-700">100% genuine products</p>
                </div>
              </div>
              <div className="flex gap-3">
                <RotateCcw className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-black">Easy Returns</p>
                  <p className="text-sm text-gray-700">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Related Products
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/product/${p.id}`}>
                  <div className="bg-white rounded-lg border-2 border-black overflow-hidden hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-600">
                      <span className="text-center px-2 text-sm font-semibold">{p.name}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-black line-clamp-2 mb-2 text-sm">
                        {p.name}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-yellow-600">₹{p.price}</span>
                        <span className="text-xs font-bold text-green-700">In stock</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
