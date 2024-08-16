import React from "react";
import "./Header.css";
import WalkingIcon from "./asset/walking64.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={WalkingIcon} alt="Walking Icon" className="logo-icon" />
          Training for free
        </div>
        <div className="contact-info">Tel: 012 345 6789</div>
      </div>
    </header>
  );
};

export default Header;
