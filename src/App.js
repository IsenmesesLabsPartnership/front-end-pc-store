import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Header from  './components/Header';
import Footer from  './components/Footer';
import ShoppingCart from './pages/ShoppingCart';
import ProductCard from './pages/ProductCard';
import Catalog from './pages/Catalog';
import React  from 'react';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/" element={<Navigate replace to="/catalog" />} />
          {/* <Route path="/catalog/:id" element={<ProductCard />} />   */}
          <Route path="/shoppingCart" element={<ShoppingCart />} /> 
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
