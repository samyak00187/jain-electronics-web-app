'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { SHOP_CONFIG } from '@/lib/shop-config';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Info Bar */}
      <div className="bg-red-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>{SHOP_CONFIG.contact}</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Bijoliya, Rajasthan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-red-600 text-white rounded-lg p-2 font-bold">
              JE
            </div>
            <div className="hidden md:block">
              <h1 className="font-bold text-lg text-gray-900">{SHOP_CONFIG.name}</h1>
              <p className="text-xs text-gray-600">Power Tools & Electronics</p>
            </div>
          </Link>

          {/* Search - Hidden on mobile */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-red-600">
              Admin
            </Link>
            <Link href="/cart" className="relative">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="mb-4 mt-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <Link href="/admin" className="block text-sm font-medium text-gray-700 hover:text-red-600 py-2">
              Admin Panel
            </Link>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-6 overflow-x-auto">
            <Link href="/shop?category=Power%20Tools" className="py-3 text-sm font-medium text-gray-700 hover:text-red-600 whitespace-nowrap border-b-2 border-transparent hover:border-red-600">
              Power Tools
            </Link>
            <Link href="/shop?category=Electrical%20Items" className="py-3 text-sm font-medium text-gray-700 hover:text-red-600 whitespace-nowrap border-b-2 border-transparent hover:border-red-600">
              Electrical Items
            </Link>
            <Link href="/shop?category=Components" className="py-3 text-sm font-medium text-gray-700 hover:text-red-600 whitespace-nowrap border-b-2 border-transparent hover:border-red-600">
              Components
            </Link>
            <Link href="/shop?category=Other%20Electronics" className="py-3 text-sm font-medium text-gray-700 hover:text-red-600 whitespace-nowrap border-b-2 border-transparent hover:border-red-600">
              Other Electronics
            </Link>
            <Link href="/contact" className="py-3 text-sm font-medium text-gray-700 hover:text-red-600 whitespace-nowrap border-b-2 border-transparent hover:border-red-600">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
