import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import Watch from "./Pages/Watch"; // 👈 VERY IMPORTANT

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
       <Route path="/watch" element={<Watch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;