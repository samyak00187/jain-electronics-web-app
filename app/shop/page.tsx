'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo, Suspense } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/db';
import { SHOP_CONFIG } from '@/lib/shop-config';
import { ChevronDown } from 'lucide-react';

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-full">
        <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-400">
          <span className="text-center px-2">{product.name}</span>
        </div>
        <div className="p-4">
          <span className="inline-block text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded mb-2">
            {product.category}
          </span>
          <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 text-sm">
            {product.name}
          </h3>
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-red-600 text-lg">₹{product.price}</span>
            <span className={`text-xs ${product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-orange-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ShopPageContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    // Filter by price
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [category, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Shop</span>
          {category && (
            <>
              <span>/</span>
              <span className="text-gray-900 font-medium">{category}</span>
            </>
          )}
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {category || 'All Products'}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-32">
              <h3 className="font-bold text-lg mb-4">Filters</h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
                <div className="space-y-2">
                  <Link href="/shop" className={`block text-sm py-2 ${!category ? 'text-red-600 font-semibold' : 'text-gray-600 hover:text-red-600'}`}>
                    All Categories
                  </Link>
                  {SHOP_CONFIG.categories.map((cat) => (
                    <Link key={cat} href={`/shop?category=${cat}`} className={`block text-sm py-2 ${category === cat ? 'text-red-600 font-semibold' : 'text-gray-600 hover:text-red-600'}`}>
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-gray-600">Min: ₹{priceRange[0]}</label>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600">Max: ₹{priceRange[1]}</label>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Availability</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="w-4 h-4" defaultChecked readOnly />
                    <span>In Stock</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="w-4 h-4" readOnly />
                    <span>Out of Stock</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort */}
            <div className="mb-6 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Showing {filteredProducts.length} results
              </span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-600" />
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No products found matching your criteria.</p>
                <Button asChild>
                  <Link href="/shop">View All Products</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading shop...</p>
        </div>
      </div>
    }>
      <ShopPageContent />
    </Suspense>
  );
}
