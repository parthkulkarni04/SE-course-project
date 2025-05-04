import React from 'react';
import { FaBoxes, FaExclamationTriangle, FaSearch, FaPlus } from 'react-icons/fa';

const Inventory = () => {
  // Sample inventory data
  const inventoryItems = [
    { id: 1, name: 'Arabica Beans', category: 'Raw Materials', quantity: 250, unit: 'kg', value: 425000, status: 'In Stock' },
    { id: 2, name: 'Robusta Beans', category: 'Raw Materials', quantity: 180, unit: 'kg', value: 270000, status: 'In Stock' },
    { id: 3, name: 'Cold Brew Blend', category: 'Raw Materials', quantity: 120, unit: 'kg', value: 240000, status: 'Low Stock' },
    { id: 4, name: 'Paper Filters', category: 'Accessories', quantity: 5000, unit: 'pcs', value: 25000, status: 'In Stock' },
    { id: 5, name: 'Glass Bottles (350ml)', category: 'Packaging', quantity: 3500, unit: 'pcs', value: 175000, status: 'In Stock' },
    { id: 6, name: 'Paper Bags', category: 'Packaging', quantity: 2800, unit: 'pcs', value: 84000, status: 'In Stock' },
    { id: 7, name: 'Gift Boxes', category: 'Packaging', quantity: 450, unit: 'pcs', value: 67500, status: 'Low Stock' },
    { id: 8, name: 'French Press', category: 'Merchandise', quantity: 75, unit: 'pcs', value: 112500, status: 'In Stock' },
    { id: 9, name: 'Coffee Mugs', category: 'Merchandise', quantity: 120, unit: 'pcs', value: 72000, status: 'In Stock' },
  ];

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
          <p className="text-3xl font-bold text-[#8c6d5c]">9</p>
          <p className="text-sm text-[#8c7b6e]">Across all categories</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#5c4434]">Low Stock</h3>
          <p className="text-3xl font-bold text-[#c69f80]">2</p>
          <p className="text-sm text-[#8c7b6e]">Items need reordering</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#5c4434]">Categories</h3>
          <p className="text-3xl font-bold text-[#5c4434]">4</p>
          <p className="text-sm text-[#8c7b6e]">Product categories</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#5c4434]">Total Value</h3>
          <p className="text-3xl font-bold text-[#8c6d5c]">₹14.71L</p>
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
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c69f80] focus:border-transparent"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <FaSearch />
                </div>
              </div>
              <button className="bg-[#8c6d5c] hover:bg-[#5c4434] text-white font-medium py-2 px-4 rounded flex items-center">
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
              {inventoryItems.map((item) => (
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
                    <button className="text-[#8c6d5c] hover:text-[#5c4434] mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory; 