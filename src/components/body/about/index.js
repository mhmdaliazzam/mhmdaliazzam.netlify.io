import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";

function About() {
  return (
    <div className="theme-about">
      <div className="theme-about-top">
        <div className="theme-about-info">
          Howdy,
          <br /> <span className="info-name">I'm MohamadAli</span>.
          <br /> Full-stack Developer
        </div>
        <div className="theme-about-photo">
          <img
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;