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
    // do not use "zoom-out" as it will create extra margin on right side
    <section id="home" data-aos="zoom-in">
      <div className="header_container">
        <div className="header_container-details">
          <h1>
            <b>Hello!</b>
          </h1>
          <h3 className="header_content">
            I'm Qamarul Arifin, an aspiring friendly neighbourhood Full-Stack
            Developer with a good combination of soft skills and hard skills
            acquired through years of experience in equipment engineering
            looking towards building a smart nation with positive impact.
          </h3>
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
