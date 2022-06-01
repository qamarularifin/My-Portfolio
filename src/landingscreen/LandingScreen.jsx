import React from "react";
import "./landingscreen.css";
import { Link } from "react-router-dom";

const LandingScreen = (props) => {
  const { buttonState, setButtonState } = props;

  return (
    <div className="landing_container">
      <div className="col-md-12">
        <h2>My Portfolio</h2>
        <h1>Welcome</h1>

        <button onClick={() => setButtonState()}> Let's go</button>
      </div>
    </div>
  );
};

export default LandingScreen;
