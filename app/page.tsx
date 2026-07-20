import Link from 'next/link';
import { ArrowRight, Zap, Lightbulb, Wind, Package } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/db';

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg border-2 border-black overflow-hidden hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 transform hover:-translate-y-1">
        <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-600">
          <span className="text-center px-2 font-semibold">{product.name}</span>
        </div>
        <div className="p-4">
          <span className="inline-block text-xs font-bold text-black bg-yellow-400 px-3 py-1 rounded mb-2">
            {product.category}
          </span>
          <h3 className="font-bold text-black line-clamp-2 mb-2 text-sm">
            {product.name}
          </h3>
          <p className="text-xs text-gray-700 mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-yellow-600 text-lg">₹{product.price}</span>
            <span className={`text-xs font-semibold ${product.stock > 10 ? 'text-green-700' : product.stock > 0 ? 'text-yellow-700' : 'text-red-700'}`}>
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
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 md:py-24 border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-yellow-400">
                Premium Power Tools & Electronics
              </h1>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Your one-stop shop for high-quality power tools, electrical items, and components. 
                Trusted by professionals in Rajasthan for over a decade.
              </p>
              <div className="flex gap-4">
                <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold border-2 border-yellow-400">
                  <Link href="/shop">
                    Shop Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4 text-center">
              <div className="bg-black border-2 border-yellow-400 rounded-lg p-6 hover:shadow-lg hover:shadow-yellow-400/50 transition-all">
                <Zap className="w-12 h-12 mx-auto mb-2 text-yellow-400" />
                <p className="font-semibold text-white">Power Tools</p>
              </div>
              <div className="bg-black border-2 border-yellow-400 rounded-lg p-6 hover:shadow-lg hover:shadow-yellow-400/50 transition-all">
                <Lightbulb className="w-12 h-12 mx-auto mb-2 text-yellow-400" />
                <p className="font-semibold text-white">Lighting</p>
              </div>
              <div className="bg-black border-2 border-yellow-400 rounded-lg p-6 hover:shadow-lg hover:shadow-yellow-400/50 transition-all">
                <Wind className="w-12 h-12 mx-auto mb-2 text-yellow-400" />
                <p className="font-semibold text-white">Fans & Coolers</p>
              </div>
              <div className="bg-black border-2 border-yellow-400 rounded-lg p-6 hover:shadow-lg hover:shadow-yellow-400/50 transition-all">
                <Package className="w-12 h-12 mx-auto mb-2 text-yellow-400" />
                <p className="font-semibold text-white">Components</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-100 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center bg-white border-2 border-black rounded-lg p-6 hover:shadow-lg hover:shadow-yellow-400/50 transition-all">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-bold text-black mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-700">Quick shipping to your location</p>
            </div>
            <div className="text-center bg-white border-2 border-black rounded-lg p-6 hover:shadow-lg hover:shadow-yellow-400/50 transition-all">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black">
                <Package className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-bold text-black mb-2">Quality Products</h3>
              <p className="text-sm text-gray-700">100% authentic and tested</p>
            </div>
            <div className="text-center bg-white border-2 border-black rounded-lg p-6 hover:shadow-lg hover:shadow-yellow-400/50 transition-all">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black">
                <Lightbulb className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-bold text-black mb-2">Expert Support</h3>
              <p className="text-sm text-gray-700">Knowledgeable team ready to help</p>
            </div>
            <div className="text-center bg-white border-2 border-black rounded-lg p-6 hover:shadow-lg hover:shadow-yellow-400/50 transition-all">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-black">
                <Wind className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-bold text-black mb-2">Best Prices</h3>
              <p className="text-sm text-gray-700">Competitive pricing guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Shop by Category</h2>
            <p className="text-gray-700 font-semibold">Browse our complete range of products</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {['Power Tools', 'Electrical Items', 'Components', 'Other Electronics'].map((category) => (
              <Link key={category} href={`/shop?category=${category}`}>
                <div className="bg-white border-2 border-black rounded-lg p-6 hover:bg-yellow-50 hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 cursor-pointer hover:border-yellow-400">
                  <h3 className="font-bold text-black mb-2">{category}</h3>
                  <p className="text-sm text-gray-700">Explore {category.toLowerCase()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-gray-100 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Featured Products</h2>
              <p className="text-gray-700 font-semibold">Check out our bestselling items</p>
            </div>
            <Button asChild className="bg-black text-yellow-400 border-2 border-black hover:bg-yellow-400 hover:text-black font-bold transition-all">
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
      <section className="py-12 md:py-16 bg-black text-white border-t-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">Need Help Finding Something?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Our expert team is here to help you find exactly what you need. Contact us for personalized recommendations.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold border-2 border-yellow-400">
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
