import React, { useState } from "react";
import "./navbar.css";
import { BiHomeSmile } from "react-icons/bi";
import { FaHammer } from "react-icons/fa";
import { BsFolderFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { ImBooks } from "react-icons/im";

const NavBar = (props) => {
  const { activeState, setActiveState } = props;
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveState("#")}
        //className={activeState === "#" ? "active home" : ""}
        className="home"
        data-hover="Home"
      >
        <BiHomeSmile />
      </a>
      <a
        href="#technologies"
        onClick={() => setActiveState("#technologies")}
        // className={activeState === "#technologies" ? "active tech-stack" : ""}
        className="tech-stack"
        data-hover="Tech Stack"
      >
        <BsStack />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveState("#project")}
        //className={activeState === "#project" ? "active" : ""}
        className="projects"
        data-hover="Projects"
      >
        <ImBooks />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveState("#contact")}
        //className={activeState === "#contact" ? "active" : ""}
        className="contact"
        data-hover="Contacts"
      >
        <AiFillPhone />
      </a>
    </nav>
  );
};

export default NavBar;
