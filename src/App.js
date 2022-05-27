import React, { useState } from "react";
import Header from "../src/header/Header";
import NavBar from "../src/navbar/NavBar";
import Technologies from "../src/technologies/Technologies";
import Projects from "../src/projects/Projects";
import Contact from "../src/contact/Contact";
import Footer from "../src/footer/Footer";

function App() {
  const [activeState, setActiveState] = useState("#");
  return (
    <>
      <Header />
      <NavBar activeState={activeState} setActiveState={setActiveState} />
      <Technologies />
      <Projects />
      <Contact />
      <Footer activeState={activeState} setActiveState={setActiveState} />
    </>
  );
}

export default App;
