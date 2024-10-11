import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Product from './pages/Product';
import './App.css'

function App() {
  

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/collections" element={<Collections />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/login" element={<Login />} />
        
        </Routes>
    </>
  )
}

export default App
