import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; 2024 Code Your Way to Fitness. All rights reserved.</p>
        <p>
          <a href="https://example.com">Terms of Service</a> |{" "}
          <a href="https://example.com">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
