import Link from 'next/link';
import { ArrowRight, Zap, Lightbulb, Wind, Package } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/db';

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
        <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-400">
          <span>{product.name}</span>
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

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Premium Power Tools & Electronics
              </h1>
              <p className="text-lg text-red-100 mb-6 leading-relaxed">
                Your one-stop shop for high-quality power tools, electrical items, and components. 
                Trusted by professionals in Rajasthan for over a decade.
              </p>
              <div className="flex gap-4">
                <Button asChild className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
                  <Link href="/shop">
                    Shop Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-red-700">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4 text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <Zap className="w-12 h-12 mx-auto mb-2" />
                <p className="font-semibold">Power Tools</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <Lightbulb className="w-12 h-12 mx-auto mb-2" />
                <p className="font-semibold">Lighting</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <Wind className="w-12 h-12 mx-auto mb-2" />
                <p className="font-semibold">Fans & Coolers</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <Package className="w-12 h-12 mx-auto mb-2" />
                <p className="font-semibold">Components</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Quick shipping to your location</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Products</h3>
              <p className="text-sm text-gray-600">100% authentic and tested</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-sm text-gray-600">Knowledgeable team ready to help</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wind className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-sm text-gray-600">Competitive pricing guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shop by Category</h2>
            <p className="text-gray-600">Browse our complete range of products</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {['Power Tools', 'Electrical Items', 'Components', 'Other Electronics'].map((category) => (
              <Link key={category} href={`/shop?category=${category}`}>
                <div className="bg-gray-100 rounded-lg p-6 hover:bg-red-50 transition-colors cursor-pointer border border-gray-200 hover:border-red-300">
                  <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                  <p className="text-sm text-gray-600">Explore {category.toLowerCase()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">Check out our bestselling items</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/shop">View All</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Finding Something?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            Our expert team is here to help you find exactly what you need. Contact us for personalized recommendations.
          </p>
          <Button asChild className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
            <Link href="/contact">
              Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
