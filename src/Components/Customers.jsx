import React from 'react';
import { FaUser, FaUserPlus, FaSearch } from 'react-icons/fa';

const Customers = () => {
  // Sample customer data
  const customers = [
    { id: 1, name: 'Rajiv Sharma', email: 'rajiv.sharma@gmail.com', phone: '+91 98765 43210', status: 'Active', orders: 12, totalSpent: 15400 },
    { id: 2, name: 'Anjali Patel', email: 'anjali.p@outlook.com', phone: '+91 87654 32109', status: 'Active', orders: 8, totalSpent: 9800 },
    { id: 3, name: 'Vikram Malhotra', email: 'vikram.m@hotmail.com', phone: '+91 76543 21098', status: 'Inactive', orders: 3, totalSpent: 4500 },
    { id: 4, name: 'Priya Singh', email: 'priya.singh@gmail.com', phone: '+91 65432 10987', status: 'Active', orders: 15, totalSpent: 18900 },
    { id: 5, name: 'Sanjay Gupta', email: 'sanjay.g@yahoo.com', phone: '+91 54321 09876', status: 'Active', orders: 6, totalSpent: 7200 }
  ];

  return (
    <div className="container mx-auto pt-24 px-4 pb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#5c4434]">Customer Management</h1>
        <p className="text-[#8c7b6e]">Manage and track Sleepy Owl Coffee customers</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-xl font-bold text-[#5c4434] mb-4 md:mb-0">Customer List</h2>
            <div className="flex space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search customers..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c69f80] focus:border-transparent"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <FaSearch />
                </div>
              </div>
              <button className="bg-[#8c6d5c] hover:bg-[#5c4434] text-white font-medium py-2 px-4 rounded flex items-center">
                <FaUserPlus className="mr-2" /> Add Customer
              </button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Information
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-[#f8f0e7] rounded-full flex items-center justify-center text-[#8c6d5c]">
                        <FaUser />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500">ID: #{customer.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.email}</div>
                    <div className="text-sm text-gray-500">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.orders}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ₹{customer.totalSpent.toLocaleString('en-IN')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-[#8c6d5c] hover:text-[#5c4434] mr-3">View</button>
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

export default Customers; 