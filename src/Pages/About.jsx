import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>About Us</h1>

        <p className="about-intro">
          MediaPlayer is a modern, lightweight, and powerful web-based video
          player designed to deliver smooth playback and an intuitive user experience.
        </p>

        <div className="about-features">
          <div>
            <h3>⚡ High Performance</h3>
            <p>
              Optimized for fast loading and seamless playback with minimal buffering.
            </p>
          </div>

          <div>
            <h3>🔐 Secure Streaming</h3>
            <p>
              Built with security in mind to protect content and user data.
            </p>
          </div>

          <div>
            <h3>🎨 Clean & Modern UI</h3>
            <p>
              Elegant interface with responsive design for all devices.
            </p>
          </div>

          <div>
            <h3>🔎 Smart Search</h3>
            <p>
              Quickly find and switch between videos with real-time filtering.
            </p>
          </div>
        </div>

        <p className="about-footer-text">
          Our mission is to make digital media consumption simple, interactive,
          and enjoyable for everyone.
        </p>
      </div>
    </section>
  );
}

export default About;