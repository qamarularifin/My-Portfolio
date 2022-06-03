import React from "react";
import "./technologies.css";
import { BsCheckCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});

const Technologies = () => {
  return (
    <section id="technologies">
      <div data-aos="zoom-out">
        <h1>Technologies</h1>
      </div>
      <div className="technologies_container" data-aos="zoom-out">
        <div className="frontend_container">
          <h3>Frontend Development</h3>

          <div className="tech_content">
            <article className="tech_details">
              <BsCheckCircleFill className="tech_details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="tech_details">
              <BsCheckCircleFill className="tech_details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="tech_details">
              <BsCheckCircleFill className="tech_details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="tech_details">
              <BsCheckCircleFill className="tech_details-icon" />
              <h4>React JS</h4>
            </article>
            <article className="tech_details">
              <BsCheckCircleFill className="tech_details-icon" />
              <h4>React BootStrap</h4>
            </article>
            <article className="tech_details">
              <BsCheckCircleFill className="tech_details-icon" />
              <h4>JSON</h4>
            </article>
          </div>
        </div>
        {/* Start of Backend */}

        <div className="backend_container">
          <h3>Backend Development</h3>
          <div className="tech_content">
            <article className="tech_details">
              <BsCheckCircleFill className="tech_details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="tech_details">
              <BsCheckCircleFill className="tech_details-icon" />
              <h4>Express JS</h4>
            </article>
            <article className="tech_details">
              <BsCheckCircleFill className="tech_details-icon" />
              <h4>Node JS</h4>
            </article>
            <article className="tech_details">
              <BsCheckCircleFill className="tech_details-icon" />
              <h4>Heroku</h4>
            </article>
            <article className="tech_details">
              <BsCheckCircleFill className="tech_details-icon" />
              <h4>API</h4>
            </article>
            <article className="tech_details">
              <BsCheckCircleFill className="tech_details-icon" />
              <h4>Python</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
