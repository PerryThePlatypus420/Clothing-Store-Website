import React from 'react';
import './App.css';
import MyNav from './components/MyNav';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from './pages/Category';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { useState } from 'react';
import { CartProvider } from './cartContext';


const App = () => {

  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <MyNav />
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/category/:cat' element={<Category />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/notfound' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
};

export default App;
