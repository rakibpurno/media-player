import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import Watch from "./Pages/Watch"; // 👈 VERY IMPORTANT

function App() {
  const isEmbed = window.self !== window.top;
  return (
    <Router>
      {!isEmbed && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      <Route path="/watch/:id" element={<Watch />} />
      </Routes>
      {!isEmbed && <Footer />}
    </Router>
  );
}

export default App;