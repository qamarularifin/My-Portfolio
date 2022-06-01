import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../src/header/Header";
import NavBar from "../src/navbar/NavBar";
import Technologies from "../src/technologies/Technologies";
import Projects from "../src/projects/Projects";
import Contact from "../src/contact/Contact";
import Footer from "../src/footer/Footer";
import LandingScreen from "../src/landingscreen/LandingScreen";
import { Link } from "react-router-dom";

function App() {
  const [activeState, setActiveState] = useState("#");
  const [buttonState, setButtonState] = useState("");
  return (
    <>
      {buttonState === "" ? (
        <LandingScreen
          buttonState={buttonState}
          setButtonState={setButtonState}
        />
      ) : (
        <>
          <Header activeState={activeState} setActiveState={setActiveState} />
          <NavBar activeState={activeState} setActiveState={setActiveState} />
          <Technologies />
          <Projects />
          <Contact />
          <Footer activeState={activeState} setActiveState={setActiveState} />
        </>
      )}
    </>
  );
}

export default App;
