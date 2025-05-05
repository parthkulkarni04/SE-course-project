import React, { useState } from 'react';
import { FaBoxes, FaExclamationTriangle, FaSearch, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Inventory = () => {
  // State for inventory items
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: 'Arabica Beans', category: 'Raw Materials', quantity: 250, unit: 'kg', value: 425000, status: 'In Stock' },
    { id: 2, name: 'Robusta Beans', category: 'Raw Materials', quantity: 180, unit: 'kg', value: 270000, status: 'In Stock' },
    { id: 3, name: 'Cold Brew Blend', category: 'Raw Materials', quantity: 120, unit: 'kg', value: 240000, status: 'Low Stock' },
    { id: 4, name: 'Paper Filters', category: 'Accessories', quantity: 5000, unit: 'pcs', value: 25000, status: 'In Stock' },
    { id: 5, name: 'Glass Bottles (350ml)', category: 'Packaging', quantity: 3500, unit: 'pcs', value: 175000, status: 'In Stock' },
    { id: 6, name: 'Paper Bags', category: 'Packaging', quantity: 2800, unit: 'pcs', value: 84000, status: 'In Stock' },
    { id: 7, name: 'Gift Boxes', category: 'Packaging', quantity: 450, unit: 'pcs', value: 67500, status: 'Low Stock' },
    { id: 8, name: 'French Press', category: 'Merchandise', quantity: 75, unit: 'pcs', value: 112500, status: 'In Stock' },
    { id: 9, name: 'Coffee Mugs', category: 'Merchandise', quantity: 120, unit: 'pcs', value: 72000, status: 'In Stock' },
  ]);

  // State for search
  const [searchQuery, setSearchQuery] = useState('');

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    unit: '',
    value: '',
    status: 'In Stock'
  });

  // Categories for dropdown
  const categories = ['Raw Materials', 'Accessories', 'Packaging', 'Merchandise'];

  // Handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter items based on search
  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Open modal for adding new item
  const handleAddItem = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      category: '',
      quantity: '',
      unit: '',
      value: '',
      status: 'In Stock'
    });
    setIsModalOpen(true);
  };

  // Open modal for editing item
  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      category: item.category,
      quantity: item.quantity,
      unit: item.unit,
      value: item.value,
      status: item.status
    });
    setIsModalOpen(true);
  };

  // Handle delete item
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setInventoryItems(prev => prev.filter(item => item.id !== id));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingItem) {
      // Update existing item
      setInventoryItems(prev => prev.map(item =>
        item.id === editingItem.id
          ? { ...item, ...formData, value: Number(formData.value), quantity: Number(formData.quantity) }
          : item
      ));
    } else {
      // Add new item
      const newItem = {
        id: Math.max(...inventoryItems.map(item => item.id)) + 1,
        ...formData,
        value: Number(formData.value),
        quantity: Number(formData.quantity)
      };
      setInventoryItems(prev => [...prev, newItem]);
    }
    
    setIsModalOpen(false);
  };

  // Calculate summary metrics
  const totalItems = inventoryItems.length;
  const lowStockItems = inventoryItems.filter(item => item.status === 'Low Stock').length;
  const uniqueCategories = new Set(inventoryItems.map(item => item.category)).size;
  const totalValue = inventoryItems.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="container mx-auto pt-24 px-4 pb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#5c4434]">Inventory Management</h1>
        <p className="text-[#8c7b6e]">Track and manage Sleepy Owl Coffee inventory items</p>
      </div>

      {/* Inventory Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#5c4434]">Total Items</h3>
          <p className="text-3xl font-bold text-[#8c6d5c]">{totalItems}</p>
          <p className="text-sm text-[#8c7b6e]">Across all categories</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#5c4434]">Low Stock</h3>
          <p className="text-3xl font-bold text-[#c69f80]">{lowStockItems}</p>
          <p className="text-sm text-[#8c7b6e]">Items need reordering</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#5c4434]">Categories</h3>
          <p className="text-3xl font-bold text-[#5c4434]">{uniqueCategories}</p>
          <p className="text-sm text-[#8c7b6e]">Product categories</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#5c4434]">Total Value</h3>
          <p className="text-3xl font-bold text-[#8c6d5c]">₹{(totalValue / 100000).toFixed(2)}L</p>
          <p className="text-sm text-[#8c7b6e]">Inventory valuation</p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-xl font-bold text-[#5c4434] mb-4 md:mb-0">Inventory Items</h2>
            <div className="flex space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search inventory..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c69f80] focus:border-transparent"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <FaSearch />
                </div>
              </div>
              <button 
                onClick={handleAddItem}
                className="bg-[#8c6d5c] hover:bg-[#5c4434] text-white font-medium py-2 px-4 rounded flex items-center"
              >
                <FaPlus className="mr-2" /> Add Item
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.quantity} {item.unit}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">₹{(item.value).toLocaleString('en-IN')}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleEdit(item)}
                      className="text-[#8c6d5c] hover:text-[#5c4434] mr-3"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)}
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

      {/* Add/Edit Item Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-[#5c4434] mb-4">
              {editingItem ? 'Edit Item' : 'Add New Item'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#c69f80] focus:ring-[#c69f80]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#c69f80] focus:ring-[#c69f80]"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#c69f80] focus:ring-[#c69f80]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Unit</label>
                    <input
                      type="text"
                      name="unit"
                      value={formData.unit}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#c69f80] focus:ring-[#c69f80]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Value (₹)</label>
                  <input
                    type="number"
                    name="value"
                    value={formData.value}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#c69f80] focus:ring-[#c69f80]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#c69f80] focus:ring-[#c69f80]"
                    required
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Low Stock">Low Stock</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#8c6d5c] text-white rounded-md hover:bg-[#5c4434]"
                >
                  {editingItem ? 'Update' : 'Add'} Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory; 