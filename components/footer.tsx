import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/shop-config';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">{SHOP_CONFIG.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {SHOP_CONFIG.description}. Serving Rajasthan with quality products since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/shop" className="hover:text-red-500">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {SHOP_CONFIG.categories.map((cat) => (
                <li key={cat}>
                  <Link href={`/shop?category=${cat}`} className="hover:text-red-500">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{SHOP_CONFIG.address}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href={`tel:${SHOP_CONFIG.contact}`} className="hover:text-red-500">
                  {SHOP_CONFIG.contact}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>info@jainelectronics.com</span>
              </li>
              <li className="flex gap-2 items-center">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Mon - Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2024 {SHOP_CONFIG.name}. All rights reserved. Owned by {SHOP_CONFIG.owner}
          </p>
          <p className="mt-2">
            Your trusted source for quality power tools and electronics in Bijoliya, Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
}
