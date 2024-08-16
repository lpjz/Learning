import React, { useEffect, useState } from "react";
import "./About.css";
import PlanImage from "./asset/PlanPersonal.jpeg";
import AdviceImage from "./asset/Expert.jpeg";
import SupportImage from "./asset/Community";

const About = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const featureData = {
    plan: {
      title: "Personalized Plans",
      content:
        "Our personalized plans are tailored to your fitness goals, ensuring that you get the best results based on your unique needs.",
      image: PlanImage
    },
    advice: {
      title: "Expert Advice",
      content:
        "Receive expert advice from certified professionals who guide you through every step of your fitness journey.",
      image: AdviceImage
    },
    support: {
      title: "Community Support",
      content:
        "Join a community of like-minded individuals who support and motivate each other to achieve their fitness goals.",
      image: SupportImage
    }
  };

  useEffect(() => {
    const featureItems = document.querySelectorAll(".feature-item");

    const handleScroll = () => {
      featureItems.forEach((item) => {
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

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("about")) {
      setSelectedFeature(null);
    }
  };

  return (
    <section className="about" onClick={handleClickOutside}>
      <h2>About The Program</h2>
      <p>
        Our program integrates coding principles with fitness goals, tailored
        specifically for you.
      </p>
      <div className="features">
        <div
          className={`feature-item ${
            selectedFeature === "plan" ? "active" : ""
          }`}
          onClick={() =>
            setSelectedFeature(selectedFeature === "plan" ? null : "plan")
          }
        >
          <div className="feature-image">
            <img src={PlanImage} alt="Personalized Plans" />
          </div>
          <div className="feature-caption">Personalized Plans</div>
          <div
            className={`feature-details ${
              selectedFeature === "plan" ? "show" : ""
            }`}
          >
            <h3>{featureData.plan.title}</h3>
            <p>{featureData.plan.content}</p>
          </div>
        </div>
        <div
          className={`feature-item ${
            selectedFeature === "advice" ? "active" : ""
          }`}
          onClick={() =>
            setSelectedFeature(selectedFeature === "advice" ? null : "advice")
          }
        >
          <div className="feature-image">
            <img src={AdviceImage} alt="Expert Advice" />
          </div>
          <div className="feature-caption">Expert Advice</div>
          <div
            className={`feature-details ${
              selectedFeature === "advice" ? "show" : ""
            }`}
          >
            <h3>{featureData.advice.title}</h3>
            <p>{featureData.advice.content}</p>
          </div>
        </div>
        <div
          className={`feature-item ${
            selectedFeature === "support" ? "active" : ""
          }`}
          onClick={() =>
            setSelectedFeature(selectedFeature === "support" ? null : "support")
          }
        >
          <div className="feature-image">
            <img src={SupportImage} alt="Community Support" />
          </div>
          <div className="feature-caption">Community Support</div>
          <div
            className={`feature-details ${
              selectedFeature === "support" ? "show" : ""
            }`}
          >
            <h3>{featureData.support.title}</h3>
            <p>{featureData.support.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;