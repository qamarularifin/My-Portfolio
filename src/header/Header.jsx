import React from "react";
import HeaderLinks from "./HeaderLinks";
import "./header.css";

const Header = () => {
  return (
    <section id="home">
      <div className="header_container">
        <div className="header_container-details">
          <h1>Hello!</h1>
          <h3>I am Qamarul Arifin, an aspiring Full-Stack Developer.</h3>
          <HeaderLinks />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </section>
  );
};

export default Header;
