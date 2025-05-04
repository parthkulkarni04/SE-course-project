import './App.css'
import OrdersManagement from './Components/OrdersManagement'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import ProductsManagement from './Components/ProductsManagement'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import { useState } from 'react'
import FinanceManagement from './Components/FinanceManagement'
import Inventory from './Components/Inventory'
import Customers from './Components/Customers'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className='w-[100%] bg-[#f9f5f0]'>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <>
                <Navbar />
                <Dashboard />
                <Footer />
              </>
            } />
            <Route path="/products" element={
              <>
                <Navbar />
                <ProductsManagement />
                <Footer />
              </>
            } />
            <Route path="/orders" element={
              <>
                <Navbar />
                <OrdersManagement />
                <Footer />
              </>
            } />
            <Route path="/finance" element={
              <>
                <Navbar />
                <FinanceManagement />
                <Footer />
              </>
            } />
            <Route path="/inventory" element={
              <>
                <Navbar />
                <Inventory />
                <Footer />
              </>
            } />
            <Route path="/customers" element={
              <>
                <Navbar />
                <Customers />
                <Footer />
              </>
            } />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
