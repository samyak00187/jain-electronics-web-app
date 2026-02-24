'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  LogOut,
  Plus,
  Trash2,
  Edit2,
  Search,
  Menu,
  X,
  Home,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products, type Product, getAllOrders, getAllInquiries } from '@/lib/db';
import { toast } from 'sonner';

type Tab = 'overview' | 'products' | 'orders' | 'inquiries';

export default function AdminDashboard() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [tab, setTab] = useState<Tab>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    category: 'Power Tools',
    price: 0,
    description: '',
    stock: 0,
  });

  useEffect(() => {
    setMounted(true);
    // Check admin authentication
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
    }
  }, [router]);

  if (!mounted) return null;

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin');
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || formData.price === undefined) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success(editingProduct ? 'Product updated' : 'Product added');
    setShowModal(false);
    setFormData({ name: '', category: 'Power Tools', price: 0, description: '', stock: 0 });
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      toast.success('Product deleted');
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setFormData(product);
    setShowModal(true);
  };

  const orders = getAllOrders();
  const inquiries = getAllInquiries();

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    {
      title: 'Total Products',
      value: products.length,
      icon: Package,
      color: 'text-blue-600',
    },
    {
      title: 'Orders',
      value: orders.length,
      icon: ShoppingCart,
      color: 'text-green-600',
    },
    {
      title: 'Inquiries',
      value: inquiries.length,
      icon: MessageSquare,
      color: 'text-orange-600',
    },
    {
      title: 'Total Revenue',
      value: `₹${orders.reduce((sum, o) => sum + o.total, 0)}`,
      icon: BarChart3,
      color: 'text-purple-600',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-900 text-white w-64 transform transition-transform md:relative md:translate-x-0 z-50 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="bg-red-600 rounded-lg p-2 font-bold">JE</div>
            <span className="font-bold">Admin</span>
          </Link>

          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: Home },
              { id: 'products', label: 'Products', icon: Package },
              { id: 'orders', label: 'Orders', icon: ShoppingCart },
              { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setTab(item.id as Tab);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  tab === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full text-gray-300 border-gray-700 hover:bg-gray-800"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden text-gray-600"
              >
                {sidebarOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                {tab === 'overview' && 'Dashboard'}
                {tab === 'products' && 'Products Management'}
                {tab === 'orders' && 'Orders'}
                {tab === 'inquiries' && 'Customer Inquiries'}
              </h1>
            </div>
            <div className="hidden md:block text-sm text-gray-600">
              Welcome, Admin
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Overview Tab */}
          {tab === 'overview' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.title}
                    className="bg-white rounded-lg p-6 border border-gray-200"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-600 text-sm font-medium">
                          {stat.title}
                        </p>
                        <p className="text-3xl font-bold text-gray-900 mt-2">
                          {stat.value}
                        </p>
                      </div>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Recent Orders
                  </h3>
                  {orders.length === 0 ? (
                    <p className="text-gray-600 text-sm">No orders yet</p>
                  ) : (
                    <div className="space-y-3">
                      {orders.slice(-3).map((order) => (
                        <div
                          key={order.id}
                          className="flex justify-between items-start pb-3 border-b border-gray-200 last:border-b-0"
                        >
                          <div>
                            <p className="font-medium text-gray-900">
                              Order {order.id}
                            </p>
                            <p className="text-xs text-gray-600">
                              {order.createdAt.toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900">
                              ₹{order.total}
                            </p>
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Recent Inquiries
                  </h3>
                  {inquiries.length === 0 ? (
                    <p className="text-gray-600 text-sm">No inquiries yet</p>
                  ) : (
                    <div className="space-y-3">
                      {inquiries.slice(-3).map((inquiry) => (
                        <div
                          key={inquiry.id}
                          className="pb-3 border-b border-gray-200 last:border-b-0"
                        >
                          <p className="font-medium text-gray-900">
                            {inquiry.name}
                          </p>
                          <p className="text-xs text-gray-600 truncate">
                            {inquiry.email}
                          </p>
                          <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                            {inquiry.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Products Tab */}
          {tab === 'products' && (
            <div className="space-y-6">
              <div className="flex gap-4 flex-col md:flex-row md:justify-between md:items-center">
                <div className="relative flex-1 md:flex-initial md:w-64">
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <Button
                  onClick={() => {
                    setEditingProduct(null);
                    setFormData({
                      name: '',
                      category: 'Power Tools',
                      price: 0,
                      description: '',
                      stock: 0,
                    });
                    setShowModal(true);
                  }}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Button>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          Stock
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((product) => (
                        <tr
                          key={product.id}
                          className="border-b border-gray-200 hover:bg-gray-50"
                        >
                          <td className="px-6 py-3 text-sm text-gray-900 font-medium">
                            {product.name}
                          </td>
                          <td className="px-6 py-3 text-sm text-gray-600">
                            {product.category}
                          </td>
                          <td className="px-6 py-3 text-sm text-gray-900 font-semibold">
                            ₹{product.price}
                          </td>
                          <td className="px-6 py-3 text-sm">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                product.stock > 10
                                  ? 'bg-green-100 text-green-700'
                                  : product.stock > 0
                                    ? 'bg-orange-100 text-orange-700'
                                    : 'bg-red-100 text-red-700'
                              }`}
                            >
                              {product.stock}
                            </span>
                          </td>
                          <td className="px-6 py-3 text-sm flex gap-2">
                            <button
                              onClick={() => handleEditProduct(product)}
                              className="text-blue-600 hover:bg-blue-50 p-2 rounded"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="text-red-600 hover:bg-red-50 p-2 rounded"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {tab === 'orders' && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {orders.length === 0 ? (
                <div className="p-8 text-center text-gray-600">
                  No orders yet
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          Order ID
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          Total
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr
                          key={order.id}
                          className="border-b border-gray-200 hover:bg-gray-50"
                        >
                          <td className="px-6 py-3 text-sm font-medium text-gray-900">
                            {order.id}
                          </td>
                          <td className="px-6 py-3 text-sm font-semibold text-gray-900">
                            ₹{order.total}
                          </td>
                          <td className="px-6 py-3 text-sm">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-3 text-sm text-gray-600">
                            {order.createdAt.toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Inquiries Tab */}
          {tab === 'inquiries' && (
            <div className="space-y-4">
              {inquiries.length === 0 ? (
                <div className="bg-white rounded-lg p-8 text-center text-gray-600 border border-gray-200">
                  No inquiries yet
                </div>
              ) : (
                inquiries.map((inquiry) => (
                  <div
                    key={inquiry.id}
                    className="bg-white rounded-lg p-6 border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {inquiry.name}
                        </h4>
                        <p className="text-sm text-gray-600">{inquiry.email}</p>
                        <p className="text-sm text-gray-600">{inquiry.phone}</p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {inquiry.createdAt.toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700">{inquiry.message}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {editingProduct ? 'Edit Product' : 'Add Product'}
            </h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={formData.category || ''}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option>Power Tools</option>
                  <option>Electrical Items</option>
                  <option>Components</option>
                  <option>Other Electronics</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price (₹)
                </label>
                <input
                  type="number"
                  value={formData.price || 0}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: parseFloat(e.target.value),
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock
                </label>
                <input
                  type="number"
                  value={formData.stock || 0}
                  onChange={(e) =>
                    setFormData({ ...formData, stock: parseInt(e.target.value) })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700"
                >
                  {editingProduct ? 'Update' : 'Add'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
