import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>MediaPlayer</h3>
          <p>Modern Web-Based Video Experience</p>
        </div>

        <div className="footer-center">
          <p>© 2026 MediaPlayer. All rights reserved.</p>
        </div>

        <div className="footer-right">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Support</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;