import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web/index";
import { BiMenu } from "react-icons/bi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="theme-header">
      <div className="logo">MohamadAli</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <BiMenu className="menu-temp" />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;