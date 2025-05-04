import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { FaCoffee, FaBoxOpen, FaRupeeSign, FaUsers, FaShoppingBag, FaChartLine, FaClipboardList, FaBoxes, FaWallet, FaArrowUp, FaArrowDown, FaCalendarAlt, FaClock, FaTruck, FaExclamationCircle, FaCheck, FaStar } from 'react-icons/fa';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('week');

  // Sample data for dashboard metrics
  const summaryMetrics = {
    totalProducts: 28,
    totalOrders: 457,
    totalCustomers: 345,
    totalRevenue: 534250,
    activeProducts: 24,
    lowStockProducts: 5,
    pendingOrders: 24,
    deliveredOrders: 398
  };

  // Sales data for charts
  const salesData = {
    daily: [
      { name: 'Mon', sales: 12500, orders: 15 },
      { name: 'Tue', sales: 14800, orders: 18 },
      { name: 'Wed', sales: 16200, orders: 21 },
      { name: 'Thu', sales: 15600, orders: 19 },
      { name: 'Fri', sales: 18900, orders: 24 },
      { name: 'Sat', sales: 21500, orders: 28 },
      { name: 'Sun', sales: 19800, orders: 25 }
    ],
    weekly: [
      { name: 'Week 1', sales: 98500, orders: 120 },
      { name: 'Week 2', sales: 105200, orders: 135 },
      { name: 'Week 3', sales: 112800, orders: 142 },
      { name: 'Week 4', sales: 124500, orders: 156 }
    ],
    monthly: [
      { name: 'Jan', sales: 425000, orders: 520 },
      { name: 'Feb', sales: 398000, orders: 480 },
      { name: 'Mar', sales: 452000, orders: 545 },
      { name: 'Apr', sales: 489000, orders: 590 },
      { name: 'May', sales: 534250, orders: 640 }
    ]
  };

  // Product category data
  const categoryData = [
    { name: 'Ready to Drink', value: 35 },
    { name: 'Coffee Beans', value: 25 },
    { name: 'Brew Bags', value: 20 },
    { name: 'Equipment', value: 15 },
    { name: 'Merchandise', value: 5 }
  ];

  // Order status data
  const orderStatusData = [
    { name: 'Delivered', value: 65 },
    { name: 'Shipped', value: 15 },
    { name: 'Processing', value: 12 },
    { name: 'Pending', value: 5 },
    { name: 'Cancelled', value: 3 }
  ];

  // Customer location data
  const customerLocations = [
    { name: "Delhi", coordinates: [77.1025, 28.7041], customers: 85, value: 28 },
    { name: "Mumbai", coordinates: [72.8777, 19.0760], customers: 76, value: 22 },
    { name: "Bangalore", coordinates: [77.5946, 12.9716], customers: 65, value: 18 },
    { name: "Chennai", coordinates: [80.2707, 13.0827], customers: 42, value: 13 },
    { name: "Hyderabad", coordinates: [78.4867, 17.3850], customers: 39, value: 11 },
    { name: "Kolkata", coordinates: [88.3639, 22.5726], customers: 32, value: 10 },
    { name: "Ahmedabad", coordinates: [72.5714, 23.0225], customers: 28, value: 9 },
    { name: "Pune", coordinates: [73.8567, 18.5204], customers: 25, value: 8 }
  ];

  // Top selling products
  const topSellingProducts = [
    { id: 'P001', name: 'Classic Cold Brew Coffee', category: 'Ready to Drink', sales: 1845, change: '+12%' },
    { id: 'P003', name: 'Vanilla Cold Brew', category: 'Ready to Drink', sales: 1342, change: '+8%' },
    { id: 'P002', name: 'Hazelnut Cold Brew', category: 'Ready to Drink', sales: 1256, change: '+5%' },
    { id: 'P006', name: 'Brew Bags - Assorted', category: 'Brew Bags', sales: 1245, change: '+15%' }
  ];

  // Recent orders
  const recentOrders = [
    { id: 'ORD-12354', customer: 'Riya Joshi', date: '2023-05-18', amount: 1870, status: 'Delivered' },
    { id: 'ORD-12353', customer: 'Deepak Verma', date: '2023-05-17', amount: 690, status: 'Shipped' },
    { id: 'ORD-12352', customer: 'Kavita Krishnan', date: '2023-05-17', amount: 1450, status: 'Processing' },
    { id: 'ORD-12351', customer: 'Arjun Nair', date: '2023-05-16', amount: 920, status: 'Delivered' },
    { id: 'ORD-12350', customer: 'Meera Reddy', date: '2023-05-15', amount: 1750, status: 'Cancelled' }
  ];

  // Quick links for navigation
  const quickLinks = [
    { name: 'Products', icon: <FaShoppingBag />, path: '/products', color: 'bg-blue-500' },
    { name: 'Orders', icon: <FaClipboardList />, path: '/orders', color: 'bg-green-500' },
    { name: 'Inventory', icon: <FaBoxes />, path: '/inventory', color: 'bg-amber-500' },
    { name: 'Finance', icon: <FaWallet />, path: '/finance', color: 'bg-purple-500' },
    { name: 'Customers', icon: <FaUsers />, path: '/customers', color: 'bg-red-500' }
  ];

  // Color arrays for charts
  const PRODUCT_COLORS = ['#8c6d5c', '#c69f80', '#d7b79a', '#e5cdb7', '#f2e3d6'];
  const ORDER_COLORS = ['#4caf50', '#9575cd', '#5c6bc0', '#ffb74d', '#ef5350'];

  // Helper function to get appropriate sales data based on time range
  const getSalesData = () => {
    return salesData[timeRange === 'month' ? 'monthly' : timeRange === 'week' ? 'weekly' : 'daily'];
  };

  // Helper function for status icon
  const getStatusIcon = (status) => {
    switch(status) {
      case 'Delivered': return <FaCheck className="text-green-600" />;
      case 'Processing': return <FaClock className="text-blue-600" />;
      case 'Shipped': return <FaTruck className="text-indigo-600" />;
      case 'Pending': return <FaCalendarAlt className="text-amber-600" />;
      case 'Cancelled': return <FaExclamationCircle className="text-red-600" />;
      default: return <FaCheck className="text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f5f0]">
      {/* Header with branding */}
      <div className="bg-white shadow-md mb-6 pt-24 px-6 pb-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-3xl font-bold text-[#5c4434]">Sleepy Owl Dashboard</h1>
            <p className="text-[#8c7b6e]">Your coffee business at a glance</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-32 h-32 rounded-full bg-[#f9f5f0] flex items-center justify-center border-2 border-[#c69f80]">
              <img 
                src="https://sleepyowl.co/cdn/shop/files/logo_107a2c0c-7f30-46ef-b852-05b27807f310_110x.png?v=1629351406" 
                alt="Sleepy Owl Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main dashboard content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Quick navigation section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#5c4434] mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {quickLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`${link.color} text-white rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105`}
              >
                <div className="text-3xl mb-2">{link.icon}</div>
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Key metrics */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#5c4434] mb-4">Key Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
              <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mr-4">
                <FaBoxOpen className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-[#8c7b6e]">Total Products</p>
                <p className="text-2xl font-bold text-[#5c4434]">{summaryMetrics.totalProducts}</p>
                <p className="text-xs text-green-600">{summaryMetrics.activeProducts} Active</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
              <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mr-4">
                <FaClipboardList className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="text-[#8c7b6e]">Total Orders</p>
                <p className="text-2xl font-bold text-[#5c4434]">{summaryMetrics.totalOrders}</p>
                <p className="text-xs text-blue-600">{summaryMetrics.pendingOrders} Pending</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
              <div className="rounded-full bg-amber-100 w-12 h-12 flex items-center justify-center mr-4">
                <FaUsers className="text-amber-600 text-xl" />
              </div>
              <div>
                <p className="text-[#8c7b6e]">Total Customers</p>
                <p className="text-2xl font-bold text-[#5c4434]">{summaryMetrics.totalCustomers}</p>
                <p className="text-xs text-green-600">+24 this month</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mr-4">
                <FaRupeeSign className="text-purple-600 text-xl" />
              </div>
              <div>
                <p className="text-[#8c7b6e]">Total Revenue</p>
                <p className="text-2xl font-bold text-[#5c4434]">₹{summaryMetrics.totalRevenue.toLocaleString('en-IN')}</p>
                <p className="text-xs text-green-600">+8.5% vs last month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Performance */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#5c4434]">Sales Performance</h2>
            <div className="flex bg-white rounded-lg overflow-hidden border border-[#c69f80]">
              <button 
                className={`px-3 py-1 text-sm ${timeRange === 'day' ? 'bg-[#c69f80] text-white' : 'text-[#8c7b6e]'}`}
                onClick={() => setTimeRange('day')}
              >
                Daily
              </button>
              <button 
                className={`px-3 py-1 text-sm ${timeRange === 'week' ? 'bg-[#c69f80] text-white' : 'text-[#8c7b6e]'}`}
                onClick={() => setTimeRange('week')}
              >
                Weekly
              </button>
              <button 
                className={`px-3 py-1 text-sm ${timeRange === 'month' ? 'bg-[#c69f80] text-white' : 'text-[#8c7b6e]'}`}
                onClick={() => setTimeRange('month')}
              >
                Monthly
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={getSalesData()} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8c6d5c" />
                  <YAxis yAxisId="right" orientation="right" stroke="#5c4434" />
                  <Tooltip 
                    formatter={(value, name) => [
                      name === 'sales' ? `₹${value.toLocaleString('en-IN')}` : value,
                      name === 'sales' ? 'Revenue' : 'Orders'
                    ]}
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e0e0e0' }}
                  />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="sales" name="Revenue" stroke="#8c6d5c" strokeWidth={2} dot={{ r: 4 }} />
                  <Line yAxisId="right" type="monotone" dataKey="orders" name="Orders" stroke="#5c4434" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Product Categories */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-[#5c4434] mb-2">Product Categories</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8c6d5c"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={PRODUCT_COLORS[index % PRODUCT_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Order Status */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-[#5c4434] mb-2">Order Status Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={orderStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8c6d5c"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {orderStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={ORDER_COLORS[index % ORDER_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Customer Map and Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Customer Map */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-[#5c4434] mb-2">Customer Distribution</h3>
            <div className="h-80">
              <ComposableMap
                projectionConfig={{
                  scale: 800,
                  center: [83, 22]
                }}
                projection="geoMercator"
                width={800}
                height={400}
                style={{ width: "100%", height: "100%" }}
              >
                <Geographies geography="https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json">
                  {({ geographies }) =>
                    geographies.map(geo => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#f9f5f0"
                        stroke="#c69f80"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#f1e7dc", outline: "none" },
                          pressed: { outline: "none" }
                        }}
                      />
                    ))
                  }
                </Geographies>
                {customerLocations.map(({ name, coordinates, customers, value }) => (
                  <Marker key={name} coordinates={coordinates}>
                    <circle 
                      r={Math.max(4, value / 3)} 
                      fill="#5c4434" 
                      stroke="#fff" 
                      strokeWidth={1} 
                    />
                    <title>{name}: {customers} customers</title>
                  </Marker>
                ))}
              </ComposableMap>
            </div>
      </div>

          {/* Top Selling Products */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-[#5c4434] mb-3">Top Selling Products</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-left text-sm font-medium text-[#8c7b6e]">Product</th>
                    <th className="py-2 text-left text-sm font-medium text-[#8c7b6e]">Category</th>
                    <th className="py-2 text-left text-sm font-medium text-[#8c7b6e]">Sales</th>
                    <th className="py-2 text-left text-sm font-medium text-[#8c7b6e]">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {topSellingProducts.map((product) => (
                    <tr key={product.id} className="border-b border-gray-100">
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-md bg-[#f9f5f0] flex items-center justify-center mr-2">
                            <FaCoffee className="text-[#8c6d5c]" />
                          </div>
                          <span className="font-medium text-[#5c4434]">{product.name}</span>
                        </div>
                      </td>
                      <td className="py-3 text-sm text-[#8c7b6e]">{product.category}</td>
                      <td className="py-3 font-medium text-[#5c4434]">{product.sales}</td>
                      <td className="py-3">
                        <span className={`text-sm ${product.change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {product.change}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#5c4434]">Recent Orders</h2>
            <Link to="/orders" className="text-[#8c6d5c] hover:underline text-sm font-medium">View All Orders</Link>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#5c4434]">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {new Date(order.date).toLocaleDateString('en-IN')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex items-center">
                          <FaRupeeSign className="text-[#8c6d5c] mr-1 text-xs" />
                          {order.amount.toLocaleString('en-IN')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {getStatusIcon(order.status)}
                          <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                              order.status === 'Shipped' ? 'bg-indigo-100 text-indigo-800' :
                              order.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                              'bg-red-100 text-red-800'}`}>
                            {order.status}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}