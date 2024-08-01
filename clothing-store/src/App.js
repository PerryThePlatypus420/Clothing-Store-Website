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
import { WishlistProvider } from './wishlistContext';
import Wishlist from './pages/Wishlist';

const App = () => {

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="App">
          <BrowserRouter>
            <MyNav />
            <Routes>
              <Route index path='/' element={<Home />} />
              <Route path='/category/:cat' element={<Category />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
