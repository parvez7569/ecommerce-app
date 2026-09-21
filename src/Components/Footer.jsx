import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>ShopEase</h2>
          <p>
            Your one-stop online store for quality products
            at great prices.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/p">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* <div className="footer-links">
          <h3>Customer Service</h3>

          <Link to="/contact">Help Center</Link>
          <Link to="/contact">Shipping</Link>
          <Link to="/contact">Returns</Link>
          <Link to="/contact">Privacy Policy</Link>
        </div> */}

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>📧 support@shopease.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 ShopEase. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;