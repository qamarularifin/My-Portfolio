import React from "react";
import "./landingscreen.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});

const LandingScreen = (props) => {
  const { buttonState, setButtonState } = props;

  return (
    <div className="landing_container">
      <div className="col-md-12">
        <h1 data-aos="zoom-in">Welcome</h1>
        <h3 data-aos="zoom-out">to</h3>
        <h2 data-aos="zoom-in">My Portfolio</h2>

        <button className="btn" onClick={() => setButtonState()}>
          Let's go
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
