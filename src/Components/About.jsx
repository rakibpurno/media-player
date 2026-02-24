import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-section">
      <div className="about-card">
        <h1>About Us</h1>
        <p>
          We are a passionate team dedicated to delivering high-quality
          software solutions for our clients. Our focus is on performance,
          security, and innovation. We believe in making technology simple,
          intuitive, and beautiful.
        </p>
        <button className="about-btn">Contact Us</button>
      </div>
    </div>
  );
}

export default About;