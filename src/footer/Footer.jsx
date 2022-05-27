import React from "react";
import "./footer.css";

const Footer = (props) => {
  const { activeState, setActiveState } = props;
  return (
    <footer>
      <ul className="footer-links">
        <li>
          <a href="#" onClick={() => setActiveState("#")}>
            Home
          </a>
        </li>
        <li>
          <a
            href="#technologies"
            onClick={() => setActiveState("#technologies")}
          >
            Technologies
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setActiveState("#project")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setActiveState("#contact")}>
            Contact
          </a>
        </li>
      </ul>
      <div className="footer_copyright">
        <small>&copy;2022 My Portfolio. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
