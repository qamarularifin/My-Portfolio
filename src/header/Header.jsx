import React from "react";
import HeaderLinks from "./HeaderLinks";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});

const Header = (props) => {
  const { activeState, setActiveState } = props;

  return (
    <section id="home">
      <div className="header_container" data-aos="zoom-out">
        <div className="header_container-details">
          <h1>
            <b>Hello!</b>
          </h1>
          <h3>I am Qamarul Arifin, an aspiring Full-Stack Developer.</h3>
          <HeaderLinks />
        </div>
        <a
          href="#contact"
          onClick={() => setActiveState("#contact")}
          className="scroll_down"
        >
          Scroll To Bottom
        </a>
      </div>
    </section>
  );
};

export default Header;
