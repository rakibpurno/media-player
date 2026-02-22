// src/Pages/Features.jsx
import React from "react";
import "./Features.css";

function Features() {
  return (
    <div className="features-container">
      <h1 className="features-title">Our Features</h1>
      
      <div className="features-grid">
        <div className="feature-card">
          <h2> Fast Performance</h2>
          <p>Our app is lightning fast and optimized for efficiency.</p>
          <button className="feature-btn">Learn More</button>
        </div>

        <div className="feature-card">
          <h2> Secure</h2>
          <p>We ensure your data is safe and secure at all times.</p>
          <button className="feature-btn">Learn More</button>
        </div>

        <div className="feature-card">
          <h2> Customizable</h2>
          <p>Easily adapt the app to your needs with flexibility.</p>
          <button className="feature-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Features;