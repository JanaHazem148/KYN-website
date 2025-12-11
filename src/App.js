// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import About from './pages/About';



function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Navbar ثابت في الأعلى */}
        <Navbar />

        {/* كل المحتوى بتاع الصفحات */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            {/* أي رابط غلط يرجع للـ Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* الفوتر هنا هيظهر في كل الصفحات */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;