import React, { useState } from 'react';
import { FaSearch, FaPlus, FaFilter, FaEye, FaPencilAlt, FaTrash, FaChartLine, FaCoffee, FaBoxOpen } from 'react-icons/fa';
import { BiCoffeeTogo } from 'react-icons/bi';
import { GiCoffeeBeans, GiCoffeeCup } from 'react-icons/gi';

const ProductsManagement = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample product data relevant to Sleepy Owl Coffee
  const products = [
    { 
      id: 'P001', 
      name: 'Classic Cold Brew Coffee', 
      category: 'Ready to Drink', 
      price: 125, 
      stock: 358, 
      status: 'Active',
      sales: 1845,
      rating: 4.8,
      image: 'https://storage.googleapis.com/gen-atmedia/3/2018/05/9eada0d203bfb580d801b478edd553465c7afb52.jpeg'
    },
    { 
      id: 'P002', 
      name: 'Hazelnut Cold Brew', 
      category: 'Ready to Drink', 
      price: 135, 
      stock: 265, 
      status: 'Active',
      sales: 1256,
      rating: 4.6,
      image: 'https://shottbeverages.com/wp-content/uploads/2019/10/Hazelnut-Cold-Brew.jpg'
    },
    { 
      id: 'P003', 
      name: 'Vanilla Cold Brew', 
      category: 'Ready to Drink', 
      price: 135, 
      stock: 198, 
      status: 'Active',
      sales: 1342,
      rating: 4.7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv3EetAlWkhQx1US0HZVs6BQIUjh34d05hCA&s'
    },
    { 
      id: 'P004', 
      name: 'Premium Arabica Beans', 
      category: 'Coffee Beans', 
      price: 450, 
      stock: 122, 
      status: 'Active',
      sales: 785,
      rating: 4.9,
      image: 'https://cdn.shopify.com/s/files/1/0561/6071/4931/files/buy-coffee-beans.jpg?v=1708682330'
    },
    { 
      id: 'P005', 
      name: 'Signature Blend Beans', 
      category: 'Coffee Beans', 
      price: 400, 
      stock: 98, 
      status: 'Low Stock',
      sales: 842,
      rating: 4.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPcwlVtTijYK7CCX-DgwxQ0HTm7p_PF0keg&s'
    },
    { 
      id: 'P006', 
      name: 'Brew Bags - Assorted', 
      category: 'Brew Bags', 
      price: 350, 
      stock: 210, 
      status: 'Active',
      sales: 1245,
      rating: 4.7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3YBN8DCa7sk6mRjxzhSQJU_esOLGKRZACw&s'
    },
    { 
      id: 'P007', 
      name: 'Sleepy Owl French Press', 
      category: 'Equipment', 
      price: 1250, 
      stock: 45, 
      status: 'Active',
      sales: 328,
      rating: 4.6,
      image: 'https://www.wonderchef.com/cdn/shop/files/6802363.jpg?v=1745669416'
    },
    { 
      id: 'P008', 
      name: 'Coffee Dripper', 
      category: 'Equipment', 
      price: 850, 
      stock: 32, 
      status: 'Low Stock',
      sales: 264,
      rating: 4.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-U3fiq8fISxvQJ3A8aUMmLw1cXELY7nBEqA&s'
    },
    { 
      id: 'P009', 
      name: 'Sleepy Owl Mug', 
      category: 'Merchandise', 
      price: 550, 
      stock: 76, 
      status: 'Active',
      sales: 521,
      rating: 4.7,
      image: 'https://sleepyowl.co/cdn/shop/files/Ground_coffee_mug_1.jpg?v=1720175349'
    }
  ];

  // Category summary
  const categories = [
    { name: 'Ready to Drink', count: 3, icon: <BiCoffeeTogo /> },
    { name: 'Coffee Beans', count: 2, icon: <GiCoffeeBeans /> },
    { name: 'Brew Bags', count: 1, icon: <GiCoffeeCup /> },
    { name: 'Equipment', count: 2, icon: <FaCoffee /> },
    { name: 'Merchandise', count: 1, icon: <FaBoxOpen /> },
  ];

  // Best selling products
  const bestSellers = products.sort((a, b) => b.sales - a.sales).slice(0, 3);

  // Filter products based on active tab and search query
  const filteredProducts = products
    .filter(product => 
      activeTab === 'all' || product.category.toLowerCase() === activeTab.toLowerCase()
    )
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setShowViewModal(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const handleDeleteProduct = (product) => {
    if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
      // Here you would typically make an API call to delete the product
      console.log('Deleting product:', product);
    }
  };

  return (
    <div className="container mx-auto pt-24 px-4 pb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#5c4434]">Product Management</h1>
        <p className="text-[#8c7b6e]">Manage and track Sleepy Owl Coffee products</p>
      </div>

      {/* Product Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Product Summary */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#5c4434] mb-3">Product Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#8c7b6e]">Total Products</span>
              <span className="text-xl font-bold text-[#5c4434]">{products.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8c7b6e]">Active Products</span>
              <span className="text-xl font-bold text-green-600">{products.filter(p => p.status === 'Active').length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8c7b6e]">Low Stock</span>
              <span className="text-xl font-bold text-amber-500">{products.filter(p => p.status === 'Low Stock').length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8c7b6e]">Categories</span>
              <span className="text-xl font-bold text-[#5c4434]">{categories.length}</span>
            </div>
          </div>
        </div>

        {/* Best Sellers */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#5c4434] mb-3">Best Sellers</h3>
          <div className="space-y-4">
            {bestSellers.map((product, index) => (
              <div key={product.id} className="flex items-center">
                <div className="w-8 h-8 bg-[#f8f0e7] rounded-full flex items-center justify-center text-[#5c4434] font-bold">
                  {index + 1}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-[#5c4434]">{product.name}</p>
                  <p className="text-sm text-[#8c7b6e]">{product.sales} units sold</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Performance */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#5c4434] mb-3">Product Performance</h3>
          <div className="h-40 flex items-center justify-center bg-[#f9f5f0] mb-3 rounded">
            {/* Placeholder for Chart */}
            <div className="text-[#8c7b6e] flex flex-col items-center">
              <FaChartLine className="text-4xl mb-2" />
              <p className="text-sm">Sales Performance Chart</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-[#5c4434] font-medium">Monthly Revenue Growth</p>
            <p className="text-green-600 font-bold flex items-center justify-center">
              <FaChartLine className="mr-1" /> +12.5%
            </p>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="bg-white rounded-lg shadow-md p-5 mb-8">
        <h3 className="text-lg font-semibold text-[#5c4434] mb-3">Product Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map(category => (
            <div 
              key={category.name} 
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                activeTab === category.name.toLowerCase() 
                  ? 'border-[#5c4434] bg-[#f8f0e7]' 
                  : 'border-gray-200 hover:border-[#c69f80] hover:bg-[#f9f5f0]'
              }`}
              onClick={() => setActiveTab(category.name.toLowerCase())}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`text-2xl mb-2 ${
                  activeTab === category.name.toLowerCase() ? 'text-[#5c4434]' : 'text-[#8c7b6e]'
                }`}>
                  {category.icon}
                </div>
                <p className="font-medium text-[#5c4434]">{category.name}</p>
                <p className="text-sm text-[#8c7b6e]">{category.count} products</p>
              </div>
            </div>
          ))}
          <div 
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              activeTab === 'all' 
                ? 'border-[#5c4434] bg-[#f8f0e7]' 
                : 'border-gray-200 hover:border-[#c69f80] hover:bg-[#f9f5f0]'
            }`}
            onClick={() => setActiveTab('all')}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`text-2xl mb-2 ${activeTab === 'all' ? 'text-[#5c4434]' : 'text-[#8c7b6e]'}`}>
                <FaBoxOpen />
              </div>
              <p className="font-medium text-[#5c4434]">All Products</p>
              <p className="text-sm text-[#8c7b6e]">{products.length} products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-5 border-b border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-lg font-semibold text-[#5c4434] mb-4 md:mb-0">
              {activeTab === 'all' ? 'All Products' : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Products`}
            </h3>
            <div className="flex space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c69f80] focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <FaSearch />
                </div>
              </div>
              <button className="bg-[#8c6d5c] hover:bg-[#5c4434] text-white font-medium py-2 px-4 rounded flex items-center">
                <FaPlus className="mr-2" /> Add Product
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sales
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4">
                    <div className="flex flex-col items-center">
                      <div className="h-24 w-24 bg-[#f8f0e7] rounded-md flex items-center justify-center overflow-hidden mb-2">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="h-24 w-24 object-cover" />
                        ) : (
                          <FaCoffee className="text-[#8c6d5c] text-3xl" />
                        )}
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-xs text-gray-500">ID: {product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">₹{product.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.stock} units</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.sales}</div>
                    <div className="w-16 bg-gray-200 rounded-full h-1.5 mt-1">
                      <div 
                        className="bg-[#8c6d5c] h-1.5 rounded-full" 
                        style={{ width: `${(product.sales / 2000) * 100}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleViewProduct(product)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      <FaEye />
                    </button>
                    <button 
                      onClick={() => handleEditProduct(product)}
                      className="text-[#8c6d5c] hover:text-[#5c4434] mr-3"
                    >
                      <FaPencilAlt />
                    </button>
                    <button 
                      onClick={() => handleDeleteProduct(product)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            {/* Add your form fields here */}
            <div className="flex justify-end space-x-3 mt-4">
              <button 
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-[#8c6d5c] text-white rounded"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Product Modal */}
      {showViewModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Product Details</h2>
            <div className="space-y-3">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-48 object-cover rounded" />
              <p><strong>Name:</strong> {selectedProduct.name}</p>
              <p><strong>ID:</strong> {selectedProduct.id}</p>
              <p><strong>Category:</strong> {selectedProduct.category}</p>
              <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
              <p><strong>Stock:</strong> {selectedProduct.stock}</p>
              <p><strong>Status:</strong> {selectedProduct.status}</p>
            </div>
            <button 
              onClick={() => setShowViewModal(false)}
              className="mt-4 px-4 py-2 bg-[#8c6d5c] text-white rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            {/* Add your edit form fields here */}
            <div className="flex justify-end space-x-3 mt-4">
              <button 
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-[#8c6d5c] text-white rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>  
  );
};

export default ProductsManagement;

