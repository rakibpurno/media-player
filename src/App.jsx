import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Pricing from "./Pages/About";
import About from "./Pages/Pricing";
import "./App.css"; // global CSS

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;