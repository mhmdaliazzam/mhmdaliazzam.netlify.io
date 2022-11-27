import React from "react";
import './mobile.css'
import { GrClose } from 'react-icons/gr'

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <GrClose />
      </div>
      <div className="mobile-option">
        <a href="#projects" >
          Projects
        </a>
      </div>
      <div className="mobile-option">
        <a href="#skills">
          Skills
        </a>
      </div>
      <div className="mobile-option">
        <a href="#work">
          Work
        </a>
      </div>
      <div className="mobile-option">
        <a href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Mobile;