import React from 'react';
import './App.css';
import MyNav from './components/MyNav';
import Cover from './components/Cover';
import Categories from './components/Categories';
import SummerCollection from './components/SummerCollection';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <div className="App">
        <MyNav/>
        <Cover/>
        <Categories/>
        <SummerCollection/>
        <Footer/>

      </div>
    </>
  );
};

export default App;
