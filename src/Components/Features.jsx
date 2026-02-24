import React from "react";
import "./Features.css";

function Features() {
  const featuresData = [
    {
      title: "Fast Performance",
      description: "Our app is lightning fast and optimized for efficiency.",
      color: "#f87171", // Red-400
    },
    {
      title: "Secure",
      description: "We ensure your data is safe and secure at all times.",
      color: "#60a5fa", // Blue-400
    },
    {
      title: "Customizable",
      description: "Easily adapt the app to your needs with flexibility.",
      color: "#34d399", // Green-400
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is here to help you anytime.",
      color: "#facc15", // Yellow-400
    },
    {
      title: "Cloud Sync",
      description: "Access your data from anywhere, on any device.",
      color: "#a78bfa", // Purple-400
    },
    {
      title: "User-Friendly",
      description: "Intuitive design for seamless navigation and experience.",
      color: "#fb7185", // Pink-400
    },
  ];

  return (
    <div className="features-section">
      <h1 className="features-title">Our Awesome Features</h1>
      <p className="features-subtitle">
        Explore what makes our app unique and user-friendly
      </p>

      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            style={{ borderTop: `5px solid ${feature.color}` }}
          >
            <div
              className="feature-icon"
              style={{ backgroundColor: feature.color }}
            >
              {feature.title[0]}
            </div>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
            <button
              className="feature-btn"
              style={{ backgroundColor: feature.color }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;