import React from 'react';
import { FaRupeeSign, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const FinanceManagement = () => {
  // Financial summary data
  const financialSummary = {
    revenue: 12450000,
    expenses: 7890000,
    profit: 4560000,
    profitMargin: 36.6,
    cashflow: 3200000,
    outstanding: 850000
  };

  // Finance categories
  const categories = [
    { name: 'Raw Materials', amount: 3200000, percent: 40.5 },
    { name: 'Packaging', amount: 1500000, percent: 19.0 },
    { name: 'Operations', amount: 1200000, percent: 15.2 },
    { name: 'Marketing', amount: 980000, percent: 12.4 },
    { name: 'Salaries', amount: 750000, percent: 9.5 },
    { name: 'Logistics', amount: 260000, percent: 3.4 }
  ];

  // Recent transactions
  const transactions = [
    { id: 1, date: '12 May 2023', description: 'Arabica Beans Purchase', amount: -250000, type: 'expense' },
    { id: 2, date: '10 May 2023', description: 'Online Store Sales', amount: 380000, type: 'income' },
    { id: 3, date: '08 May 2023', description: 'Retail Partnership Payment', amount: 420000, type: 'income' },
    { id: 4, date: '05 May 2023', description: 'Packaging Materials', amount: -120000, type: 'expense' },
    { id: 5, date: '02 May 2023', description: 'Marketing Campaign', amount: -85000, type: 'expense' },
  ];

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="container mx-auto pt-24 px-4 pb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#5c4434]">Financial Management</h1>
        <p className="text-[#8c7b6e]">Comprehensive financial overview of Sleepy Owl Coffee operations</p>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-[#8c6d5c]">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h3 className="text-2xl font-bold flex items-center text-[#5c4434]">
                <FaRupeeSign className="text-xl mr-1" />{(financialSummary.revenue / 100000).toFixed(2)} L
              </h3>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#f8f0e7] flex items-center justify-center text-[#8c6d5c]">
              <FaRupeeSign className="text-xl" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <FaArrowUp className="mr-1" />
            <span className="text-sm">12.5% vs last month</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-[#c69f80]">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Expenses</p>
              <h3 className="text-2xl font-bold flex items-center text-[#5c4434]">
                <FaRupeeSign className="text-xl mr-1" />{(financialSummary.expenses / 100000).toFixed(2)} L
              </h3>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#f8f0e7] flex items-center justify-center text-[#c69f80]">
              <FaRupeeSign className="text-xl" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-red-600">
            <FaArrowUp className="mr-1" />
            <span className="text-sm">8.3% vs last month</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-[#5c4434]">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">Net Profit</p>
              <h3 className="text-2xl font-bold flex items-center text-[#5c4434]">
                <FaRupeeSign className="text-xl mr-1" />{(financialSummary.profit / 100000).toFixed(2)} L
              </h3>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#f8f0e7] flex items-center justify-center text-[#5c4434]">
              <FaRupeeSign className="text-xl" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <FaArrowUp className="mr-1" />
            <span className="text-sm">15.2% vs last month</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Expense Categories */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <h2 className="text-xl font-bold text-[#5c4434] mb-4">Expense Breakdown</h2>
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">{category.name}</span>
                  <span className="text-sm font-medium text-gray-700">{formatCurrency(category.amount)} ({category.percent}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#8c6d5c] h-2 rounded-full" 
                    style={{ width: `${category.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <h2 className="text-xl font-bold text-[#5c4434] mb-4">Recent Transactions</h2>
          <div className="overflow-y-auto max-h-80">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between border-b border-gray-100 py-3">
                <div>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                  <p className="font-medium">{transaction.description}</p>
                </div>
                <div className={`font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'income' ? '+' : '-'} {formatCurrency(Math.abs(transaction.amount))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceManagement; 