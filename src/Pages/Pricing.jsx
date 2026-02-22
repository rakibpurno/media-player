// src/Pages/Pricing.jsx
import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricing-container">
      <h1>Pricing Plans</h1>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h2>Basic</h2>
          <p>$10 / month</p>
          <ul>
            <li>Access to basic features</li>
            <li>Email support</li>
          </ul>
          <button>Subscribe</button>
        </div>
        <div className="pricing-card featured">
          <h2>Pro</h2>
          <p>$30 / month</p>
          <ul>
            <li>All basic features</li>
            <li>Priority support</li>
            <li>Customizations</li>
          </ul>
          <button>Subscribe</button>
        </div>
        <div className="pricing-card">
          <h2>Enterprise</h2>
          <p>$100 / month</p>
          <ul>
            <li>All Pro features</li>
            <li>Dedicated manager</li>
            <li>Custom integrations</li>
          </ul>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;