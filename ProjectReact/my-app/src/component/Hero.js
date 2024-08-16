import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import HeroImage from "./asset/123.png"; // หรือชื่อไฟล์ภาพจริงของคุณ

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>
            Code Your Way to Fitness:
            <br />A Free Weight Loss Journey
          </h1>
          <p>
            Join our free weight loss journey designed by professionals using
            cutting-edge technology.
          </p>
          <Link
            to="join-now"
            smooth={true}
            duration={500}
            className="cta-button"
          >
            Join now !
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
