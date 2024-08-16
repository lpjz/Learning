import React from "react";
import "./SuccessStories.css";
import Story1Image from "./asset/team-3.jpg";
import Story2Image from "./asset/team-4.jpg";
import Story3Image from "./asset/team-1.jpg";
import Story4Image from "./asset/team-2.jpg";

const SuccessStories = () => {
  return (
    <section className="success-stories">
      <h2>Success Stories</h2>
      <div className="stories-container">
        <div className="story-card">
          <img src={Story1Image} alt="Participant 1" />
          <div className="overlay">
            <div className="story-content">
              <p>
                "This program changed my life! I lost 20 pounds and learned how
                to code."
              </p>
              <p>- Alex, Previous Participant</p>
            </div>
          </div>
        </div>
        <div className="story-card">
          <img src={Story2Image} alt="Participant 2" />
          <div className="overlay">
            <div className="story-content">
              <p>"I achieved my goals and gained a new skill along the way!"</p>
              <p>- Chris, Previous Participant</p>
            </div>
          </div>
        </div>
        <div className="story-card">
          <img src={Story3Image} alt="Participant 3" />
          <div className="overlay">
            <div className="story-content">
              <p>
                "This program gave me the confidence to achieve my fitness
                goals!"
              </p>
              <p>- Jordan, Previous Participant</p>
            </div>
          </div>
        </div>
        <div className="story-card">
          <img src={Story4Image} alt="Participant 4" />
          <div className="overlay">
            <div className="story-content">
              <p>"I not only lost weight, but also learned valuable skills!"</p>
              <p>- Taylor, Previous Participant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
