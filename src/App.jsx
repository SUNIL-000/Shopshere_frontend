// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Cart from './pages/Cart'
import Header from './components/Header'
import NotFound from './pages/NotFound'
import Dashboard from './components/dashboard/Dashboard'
import Product from './components/dashboard/Product'
import Customer from './components/dashboard/Customer'
import Transaction from './components/dashboard/Transaction'
import Checkout from './pages/Checkout'
const App = () => {
  return (
    
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/cart/checkout' element={<Checkout />} />


          {/* admin dashboard  */}
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/product' element={<Product />} />
          <Route path='/admin/transaction' element={<Transaction />} />
          <Route path='/admin/customer' element={<Customer />} />



          {/* error  */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App