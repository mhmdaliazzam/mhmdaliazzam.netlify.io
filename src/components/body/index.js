import React from "react";
import "./body.css";
import About from "./about/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Work from "./work/index";
import Contact from "./contact/index";

function Body() {
  return (
    <div className="theme-body">
      <section id="theme-about">
        <About />
      </section>
      <section id="theme-projects">
        <Projects />
      </section>
      <section id="theme-skills">
        <Skills />
      </section>
      <section id="theme-work">
        <Work />
      </section>
      <section id="theme-contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;