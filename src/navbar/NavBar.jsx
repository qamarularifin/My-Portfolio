import React, { useState } from "react";
import "./navbar.css";
import { BiHomeSmile } from "react-icons/bi";
import { FaHammer } from "react-icons/fa";
import { BsFolderFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";

const NavBar = (props) => {
  const { activeState, setActiveState } = props;
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveState("#")}
        className={activeState === "#" ? "active" : ""}
      >
        <BiHomeSmile />
      </a>
      <a
        href="#technologies"
        onClick={() => setActiveState("#technologies")}
        className={activeState === "#technologies" ? "active" : ""}
      >
        <FaHammer />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveState("#project")}
        className={activeState === "#project" ? "active" : ""}
      >
        <BsFolderFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveState("#contact")}
        className={activeState === "#contact" ? "active" : ""}
      >
        <IoMdContacts />
      </a>
    </nav>
  );
};

export default NavBar;
