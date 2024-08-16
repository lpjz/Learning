import React, { useEffect } from "react";
import "./Benefits.css";
import PlanImage from "./asset/fitness-plan.jpg";
import AdviceImage from "./asset/guidance.jpg";
import SupportImage from "./asset/community2.jpg";

const Benefits = () => {
  useEffect(() => {
    const benefitItems = document.querySelectorAll(".benefit-item");

    const handleScroll = () => {
      benefitItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          item.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll position on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="benefits">
      <h2>Benefits</h2>
      <div className="benefit-features">
        <div className="benefit-item">
          <div className="benefit-image">
            <img src={PlanImage} alt="Personalized Fitness Plan" />
            <div className="benefit-caption">Personalized Fitness Plan</div>
          </div>
        </div>
        <div className="benefit-item">
          <div className="benefit-image">
            <img src={AdviceImage} alt="Professional Guidance" />
            <div className="benefit-caption">Professional Guidance</div>
          </div>
        </div>
        <div className="benefit-item">
          <div className="benefit-image">
            <img src={SupportImage} alt="Community and Support" />
            <div className="benefit-caption">Community and Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;