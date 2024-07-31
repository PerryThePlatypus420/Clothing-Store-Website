import React from 'react';
import './App.css';
import MyNav from './components/MyNav';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from './pages/Category';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav/>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/category/:cat' element={<Category />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
