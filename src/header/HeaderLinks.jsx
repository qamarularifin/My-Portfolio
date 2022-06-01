import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BiFile } from "react-icons/bi";
import { BsPaperclip } from "react-icons/bs";
import CV from "../assets/QAMARUL-ARIFIN_RESUME.docx";

const HeaderLinks = () => {
  return (
    <div className="header_links">
      <a
        href="http://www.linkedin.com/in/qamarularifin"
        target="_blank"
        className="resume-hover"
        data-hover="LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/qamarularifin"
        target="_blank"
        className="resume-hover"
        data-hover="GitHub"
      >
        <FaGithub />
      </a>
      <a href={CV} download className="resume-hover" data-hover="Resume">
        <BsPaperclip />
      </a>
    </div>
  );
};

export default HeaderLinks;
