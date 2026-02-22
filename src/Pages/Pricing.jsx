import React, { useState } from "react";
import "./Pricing.css";

function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Basic",
      monthly: 10,
      annual: 100,
      color: "blue",
      features: ["Basic features", "Email support"],
    },
    {
      name: "Pro",
      monthly: 30,
      annual: 300,
      color: "purple",
      popular: true,
      features: ["Everything in Basic", "Priority support", "Customizations"],
    },
  ];

  return (
    <section className="pricing-container" id="pricing">
      <h1 className="pricing-title">Choose the Perfect Plan for You</h1>

      {/* Toggle */}
      <div className="billing-toggle">
        <div className="toggle-switch">
          <span
            className={`toggle-btn ${billing === "monthly" ? "active" : ""}`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </span>
          <span
            className={`toggle-btn ${billing === "annual" ? "active" : ""}`}
            onClick={() => setBilling("annual")}
          >
            Annual
          </span>
          <div
            className={`slider ${billing === "annual" ? "right" : ""}`}
          ></div>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card ${plan.color} 
              ${selectedPlan === plan.name ? "selected" : ""}`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            {plan.popular && <div className="badge">Most Popular</div>}

            <h2>{plan.name}</h2>

            <div className="price">
              <span className="amount">
                ${billing === "monthly" ? plan.monthly : plan.annual}
              </span>
              <span className="period">
                / {billing === "monthly" ? "month" : "year"}
              </span>
            </div>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <button className="subscribe-btn">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;