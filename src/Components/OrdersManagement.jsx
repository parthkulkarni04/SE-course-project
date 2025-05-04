import React, { useState } from 'react';
import { FaSearch, FaFilter, FaEye, FaDownload, FaTruck, FaCheck, FaExclamationCircle, FaPause, FaChartBar, FaCalendarAlt, FaRupeeSign, FaBoxOpen, FaClock, FaChartLine } from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const OrdersManagement = () => {
  const [activeStatus, setActiveStatus] = useState('all');
  const [dateRange, setDateRange] = useState('this-month');

  // Sample order data
  const orders = [
    {
      id: 'ORD-12345',
      customerName: 'Rajiv Sharma',
      customerEmail: 'rajiv.sharma@gmail.com',
      date: '2023-05-12',
      amount: 1250,
      status: 'Delivered',
      paymentStatus: 'Paid',
      items: 3,
      shippingAddress: 'H-42, Sector 63, Noida, Uttar Pradesh, 201301'
    },
    {
      id: 'ORD-12346',
      customerName: 'Priya Singh',
      customerEmail: 'priya.singh@outlook.com',
      date: '2023-05-13',
      amount: 875,
      status: 'Processing',
      paymentStatus: 'Paid',
      items: 2,
      shippingAddress: '504, Palm Avenue, Bandra West, Mumbai, Maharashtra, 400050'
    },
    {
      id: 'ORD-12347',
      customerName: 'Vikram Malhotra',
      customerEmail: 'vikram.m@gmail.com',
      date: '2023-05-13',
      amount: 2450,
      status: 'Shipped',
      paymentStatus: 'Paid',
      items: 4,
      shippingAddress: '23, Richmond Road, Bangalore, Karnataka, 560025'
    },
    {
      id: 'ORD-12348',
      customerName: 'Anjali Patel',
      customerEmail: 'anjali.p@hotmail.com',
      date: '2023-05-14',
      amount: 525,
      status: 'Pending',
      paymentStatus: 'Pending',
      items: 1,
      shippingAddress: 'C-12, Vaishali Nagar, Jaipur, Rajasthan, 302021'
    },
    {
      id: 'ORD-12349',
      customerName: 'Sanjay Gupta',
      customerEmail: 'sanjay.g@yahoo.com',
      date: '2023-05-14',
      amount: 3250,
      status: 'Delivered',
      paymentStatus: 'Paid',
      items: 5,
      shippingAddress: '78, Park Street, Kolkata, West Bengal, 700016'
    },
    {
      id: 'ORD-12350',
      customerName: 'Meera Reddy',
      customerEmail: 'meera.r@gmail.com',
      date: '2023-05-15',
      amount: 1750,
      status: 'Cancelled',
      paymentStatus: 'Refunded',
      items: 3,
      shippingAddress: '42, Jubilee Hills, Hyderabad, Telangana, 500033'
    },
    {
      id: 'ORD-12351',
      customerName: 'Arjun Nair',
      customerEmail: 'arjun.n@gmail.com',
      date: '2023-05-16',
      amount: 920,
      status: 'Delivered',
      paymentStatus: 'Paid',
      items: 2,
      shippingAddress: '27, Marine Drive, Mumbai, Maharashtra, 400020'
    },
    {
      id: 'ORD-12352',
      customerName: 'Kavita Krishnan',
      customerEmail: 'kavita.k@outlook.com',
      date: '2023-05-17',
      amount: 1450,
      status: 'Processing',
      paymentStatus: 'Paid',
      items: 3,
      shippingAddress: '14, Indiranagar, Bangalore, Karnataka, 560038'
    },
    {
      id: 'ORD-12353',
      customerName: 'Deepak Verma',
      customerEmail: 'deepak.v@yahoo.com',
      date: '2023-05-17',
      amount: 690,
      status: 'Shipped',
      paymentStatus: 'Paid',
      items: 1,
      shippingAddress: 'E-11, Hauz Khas, New Delhi, Delhi, 110016'
    },
    {
      id: 'ORD-12354',
      customerName: 'Riya Joshi',
      customerEmail: 'riya.j@gmail.com',
      date: '2023-05-18',
      amount: 1870,
      status: 'Delivered',
      paymentStatus: 'Paid',
      items: 4,
      shippingAddress: '9, Civil Lines, Allahabad, Uttar Pradesh, 211001'
    }
  ];

  // Order status summary
  const orderStatusSummary = {
    total: orders.length,
    delivered: orders.filter(o => o.status === 'Delivered').length,
    processing: orders.filter(o => o.status === 'Processing').length,
    shipped: orders.filter(o => o.status === 'Shipped').length,
    pending: orders.filter(o => o.status === 'Pending').length,
    cancelled: orders.filter(o => o.status === 'Cancelled').length
  };

  // Financial summary
  const financialSummary = {
    totalRevenue: orders.reduce((sum, order) => sum + order.amount, 0),
    averageOrderValue: Math.round(orders.reduce((sum, order) => sum + order.amount, 0) / orders.length),
    pendingPayments: orders.filter(o => o.paymentStatus === 'Pending').reduce((sum, order) => sum + order.amount, 0)
  };

  // Weekly order data for timeline
  const timelineData = [
    { name: 'Week 1', delivered: 45, processing: 12, shipped: 18, pending: 8, cancelled: 3, total: 86 },
    { name: 'Week 2', delivered: 52, processing: 15, shipped: 20, pending: 5, cancelled: 2, total: 94 },
    { name: 'Week 3', delivered: 58, processing: 13, shipped: 22, pending: 7, cancelled: 4, total: 104 },
    { name: 'Week 4', delivered: 65, processing: 18, shipped: 25, pending: 6, cancelled: 1, total: 115 }
  ];

  // Daily order data (more detailed)
  const dailyOrderData = [
    { date: '01 May', orders: 12, revenue: 14500 },
    { date: '02 May', orders: 15, revenue: 18200 },
    { date: '03 May', orders: 11, revenue: 13400 },
    { date: '04 May', orders: 14, revenue: 16900 },
    { date: '05 May', orders: 18, revenue: 22100 },
    { date: '06 May', orders: 21, revenue: 25500 },
    { date: '07 May', orders: 19, revenue: 23000 },
    { date: '08 May', orders: 16, revenue: 19400 },
    { date: '09 May', orders: 14, revenue: 17000 },
    { date: '10 May', orders: 17, revenue: 20600 },
    { date: '11 May', orders: 20, revenue: 24300 },
    { date: '12 May', orders: 23, revenue: 27900 },
    { date: '13 May', orders: 25, revenue: 30400 },
    { date: '14 May', orders: 22, revenue: 26700 }
  ];

  // Order locations for the India map
  const orderLocations = [
    { name: "Delhi", coordinates: [77.1025, 28.7041], orders: 245, value: 28 },
    { name: "Mumbai", coordinates: [72.8777, 19.0760], orders: 189, value: 22 },
    { name: "Bangalore", coordinates: [77.5946, 12.9716], orders: 156, value: 18 },
    { name: "Chennai", coordinates: [80.2707, 13.0827], orders: 112, value: 13 },
    { name: "Hyderabad", coordinates: [78.4867, 17.3850], orders: 98, value: 11 },
    { name: "Kolkata", coordinates: [88.3639, 22.5726], orders: 87, value: 10 },
    { name: "Ahmedabad", coordinates: [72.5714, 23.0225], orders: 76, value: 9 },
    { name: "Pune", coordinates: [73.8567, 18.5204], orders: 68, value: 8 },
    { name: "Jaipur", coordinates: [75.7873, 26.9124], orders: 54, value: 6 },
    { name: "Lucknow", coordinates: [80.9462, 26.8467], orders: 47, value: 5 }
  ];

  // Filter orders based on active status
  const filteredOrders = activeStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status.toLowerCase() === activeStatus.toLowerCase());

  // Get status icon based on status
  const getStatusIcon = (status) => {
    switch(status.toLowerCase()) {
      case 'delivered':
        return <FaCheck className="text-green-600" />;
      case 'processing':
        return <FaClock className="text-blue-600" />;
      case 'shipped':
        return <FaTruck className="text-indigo-600" />;
      case 'pending':
        return <FaPause className="text-amber-600" />;
      case 'cancelled':
        return <FaExclamationCircle className="text-red-600" />;
      default:
        return <FaCheck className="text-gray-600" />;
    }
  };

  // Display timeline data based on selected range
  const getTimelineData = () => {
    switch(dateRange) {
      case 'today':
        return dailyOrderData.slice(-1);
      case 'this-week':
        return dailyOrderData.slice(-7);
      case 'this-month':
      default:
        return dailyOrderData;
    }
  };

    return (
    <div className="container mx-auto pt-24 px-4 pb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#5c4434]">Order Management</h1>
        <p className="text-[#8c7b6e]">Track and manage Sleepy Owl Coffee orders</p>
      </div>

      {/* Order Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Order Summary Card */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#5c4434] mb-3">Order Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#8c7b6e]">Total Orders</span>
              <span className="text-xl font-bold text-[#5c4434]">{orderStatusSummary.total}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8c7b6e]">Delivered</span>
              <span className="text-xl font-bold text-green-600">{orderStatusSummary.delivered}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8c7b6e]">Processing</span>
              <span className="text-xl font-bold text-blue-600">{orderStatusSummary.processing}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8c7b6e]">Pending</span>
              <span className="text-xl font-bold text-amber-600">{orderStatusSummary.pending}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8c7b6e]">Cancelled</span>
              <span className="text-xl font-bold text-red-600">{orderStatusSummary.cancelled}</span>
            </div>
          </div>
        </div>

        {/* Order Financial Summary */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#5c4434] mb-3">Financial Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#8c7b6e]">Total Revenue</span>
              <span className="text-xl font-bold text-[#5c4434] flex items-center">
                <FaRupeeSign className="mr-1 text-sm" /> {financialSummary.totalRevenue.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8c7b6e]">Average Order Value</span>
              <span className="text-xl font-bold text-[#5c4434] flex items-center">
                <FaRupeeSign className="mr-1 text-sm" /> {financialSummary.averageOrderValue.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8c7b6e]">Pending Payments</span>
              <span className="text-xl font-bold text-amber-600 flex items-center">
                <FaRupeeSign className="mr-1 text-sm" /> {financialSummary.pendingPayments.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>

        {/* Order Performance */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#5c4434] mb-3">Order Performance</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timelineData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px'
                  }} 
                />
                <Line type="monotone" dataKey="total" stroke="#5c4434" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-3">
            <div className="text-center">
              <p className="text-[#8c7b6e]">Last Week</p>
              <p className="text-lg font-bold text-[#5c4434]">94</p>
            </div>
            <div className="text-center">
              <p className="text-[#8c7b6e]">This Week</p>
              <p className="text-lg font-bold text-[#5c4434]">115</p>
            </div>
            <div className="text-center">
              <p className="text-[#8c7b6e]">Growth</p>
              <p className="text-lg font-bold text-green-600">+22%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Orders by Status */}
      <div className="bg-white rounded-lg shadow-md p-5 mb-8">
        <h3 className="text-lg font-semibold text-[#5c4434] mb-3">Orders by Status</h3>
        <div className="flex flex-wrap gap-3">
          <button 
            className={`px-4 py-2 rounded-md flex items-center ${
              activeStatus === 'all' 
                ? 'bg-[#5c4434] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveStatus('all')}
          >
            <FaBoxOpen className="mr-2" /> All Orders ({orderStatusSummary.total})
          </button>
          <button 
            className={`px-4 py-2 rounded-md flex items-center ${
              activeStatus === 'delivered' 
                ? 'bg-green-600 text-white' 
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            }`}
            onClick={() => setActiveStatus('delivered')}
          >
            <FaCheck className="mr-2" /> Delivered ({orderStatusSummary.delivered})
          </button>
          <button 
            className={`px-4 py-2 rounded-md flex items-center ${
              activeStatus === 'processing' 
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
            }`}
            onClick={() => setActiveStatus('processing')}
          >
            <FaClock className="mr-2" /> Processing ({orderStatusSummary.processing})
          </button>
          <button 
            className={`px-4 py-2 rounded-md flex items-center ${
              activeStatus === 'shipped' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
            }`}
            onClick={() => setActiveStatus('shipped')}
          >
            <FaTruck className="mr-2" /> Shipped ({orderStatusSummary.shipped})
          </button>
          <button 
            className={`px-4 py-2 rounded-md flex items-center ${
              activeStatus === 'pending' 
                ? 'bg-amber-600 text-white' 
                : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
            }`}
            onClick={() => setActiveStatus('pending')}
          >
            <FaPause className="mr-2" /> Pending ({orderStatusSummary.pending})
          </button>
          <button 
            className={`px-4 py-2 rounded-md flex items-center ${
              activeStatus === 'cancelled' 
                ? 'bg-red-600 text-white' 
                : 'bg-red-100 text-red-800 hover:bg-red-200'
            }`}
            onClick={() => setActiveStatus('cancelled')}
          >
            <FaExclamationCircle className="mr-2" /> Cancelled ({orderStatusSummary.cancelled})
          </button>
        </div>
      </div>

      {/* Order Timeline */}
      <div className="bg-white rounded-lg shadow-md p-5 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-[#5c4434]">Order Timeline</h3>
          <div className="flex gap-2">
            <button 
              className={`px-3 py-1 rounded text-sm ${dateRange === 'today' ? 'bg-[#8c6d5c] text-white' : 'bg-gray-200 text-gray-600'}`}
              onClick={() => setDateRange('today')}
            >
              Today
            </button>
            <button 
              className={`px-3 py-1 rounded text-sm ${dateRange === 'this-week' ? 'bg-[#8c6d5c] text-white' : 'bg-gray-200 text-gray-600'}`}
              onClick={() => setDateRange('this-week')}
            >
              This Week
            </button>
            <button 
              className={`px-3 py-1 rounded text-sm ${dateRange === 'this-month' ? 'bg-[#8c6d5c] text-white' : 'bg-gray-200 text-gray-600'}`}
              onClick={() => setDateRange('this-month')}
            >
              This Month
            </button>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={getTimelineData()}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" orientation="left" stroke="#8c6d5c" />
              <YAxis yAxisId="right" orientation="right" stroke="#5c4434" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px'
                }}
              />
              <Legend />
              <Bar yAxisId="left" dataKey="orders" fill="#8c6d5c" name="Orders" />
              <Bar yAxisId="right" dataKey="revenue" fill="#c69f80" name="Revenue (₹)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
                </div>

      {/* Order Delivery Map */}
      <div className="bg-white rounded-lg shadow-md p-5 mb-8">
        <h3 className="text-lg font-semibold text-[#5c4434] mb-3">Order Delivery Map</h3>
        <div className="h-96">
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
            {orderLocations.map(({ name, coordinates, orders, value }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle 
                  r={Math.max(4, value / 3)} 
                  fill="#5c4434" 
                  stroke="#fff" 
                  strokeWidth={1} 
                />
                <title>{name}: {orders} orders</title>
              </Marker>
            ))}
          </ComposableMap>
          <div className="flex justify-between mt-2 px-8 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#5c4434] mr-2"></div>
              <span className="text-[#5c4434]">Order locations</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#8c7b6e]">Larger circles indicate higher order volume</span>
            </div>
          </div>
                            </div>
                        </div>
                        
      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-5 border-b border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-lg font-semibold text-[#5c4434] mb-4 md:mb-0">
              {activeStatus === 'all' ? 'All Orders' : `${activeStatus.charAt(0).toUpperCase() + activeStatus.slice(1)} Orders`}
            </h3>
            <div className="flex space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c69f80] focus:border-transparent"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <FaSearch />
                </div>
              </div>
              <button className="bg-[#8c6d5c] hover:bg-[#5c4434] text-white font-medium py-2 px-4 rounded flex items-center">
                <FaDownload className="mr-2" /> Export
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                    <div className="text-xs text-gray-500">{order.customerEmail}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-[#8c6d5c] mr-2" />
                      {new Date(order.date).toLocaleDateString('en-IN')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <FaRupeeSign className="text-[#8c6d5c] mr-1" />
                      {order.amount.toLocaleString('en-IN')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(order.status)}
                      <span className={`ml-2 px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'Shipped' ? 'bg-indigo-100 text-indigo-800' :
                          order.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                          'bg-red-100 text-red-800'}`}>
                        {order.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${order.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' :
                        order.paymentStatus === 'Pending' ? 'bg-amber-100 text-amber-800' :
                        'bg-gray-100 text-gray-800'}`}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <FaEye />
                    </button>
                    <button className="text-[#8c6d5c] hover:text-[#5c4434] mr-3">
                      <FaTruck />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <FaExclamationCircle />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 flex justify-between items-center border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredOrders.length}</span> of <span className="font-medium">{orders.length}</span> orders
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Previous</button>
            <button className="px-3 py-1 bg-[#8c6d5c] text-white rounded-md text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">3</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersManagement;