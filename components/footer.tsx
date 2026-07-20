import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/shop-config';

export function Footer() {
  return (
    <footer className="bg-black text-white mt-16 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-400">{SHOP_CONFIG.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {SHOP_CONFIG.description}. Serving Rajasthan with quality products since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/shop" className="hover:text-yellow-300 transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {SHOP_CONFIG.categories.map((cat) => (
                <li key={cat}>
                  <Link href={`/shop?category=${cat}`} className="hover:text-yellow-300 transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>{SHOP_CONFIG.address}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href={`tel:${SHOP_CONFIG.contact}`} className="hover:text-yellow-300 transition-colors">
                  {SHOP_CONFIG.contact}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span>info@jainelectronics.com</span>
              </li>
              <li className="flex gap-2 items-center">
                <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span>Mon - Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
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
