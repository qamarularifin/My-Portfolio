import React from "react";
import "./projects.css";
// import { Tag } from "antd";
import IMG1 from "../assets/pic1.jpg";
import IMG2 from "../assets/pic2.jpg";
import IMG3 from "../assets/pic3.jpg";
import IMG4 from "../assets/pic4.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});

const data = [
  {
    id: 1,
    image: IMG1,
    title: "A Colour-Changing Mastermind Game",
    summary:
      "A deduction game where player makes a limited number of guesses, using logic to deduce what pegs were hidden. With each restart, users will get different set of color pegs which makes the game a whole lot more colorful.",
    github: "https://github.com/qamarularifin/Project-1",
    demo: "https://qamarularifin.github.io/Project-1/",
    tech: ["JavaScript", "/", "HTML", "/", "CSS", "/", "jQuery"],
  },
  {
    id: 2,
    image: IMG2,
    title: "A Book Finder App",
    summary:
      "This app uses Google Books and New York Best Sellers API to search for any kinds of book users are interested in. They can also search by their favourite author as well as make favourite any books that they love which stores their favourites in local storage.",
    // "A book finder application where users can search for their favourite books based on the book title. The application also allows the user to favouritise their chosen book and allows the option for user to purchase it via a button that routes them to the actual book website.",
    github: "https://github.com/qamarularifin/Project-2",
    demo: "https://qamarularifin.github.io/Project-2",
    tech: "ReactJS",
  },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title: "RoundUp (A Budget Expense App)",
  //   summary:
  //     "The RoundUp App allows user to track their networth, income, expenses and investments all in one app, which solves the painpoint of the conventional budgeting app where tracking of investments is usually not supported. Hence, users of the RoundUp App are able to know their financial health, empowering them towards achieving or improving financial literacy.",
  //   github: "https://github.com/qamarularifin/RoundUp",
  //   demo: "",
  //   tech: ["MongoDB", "/", "ExpressJS", "/", "ReactNative", "/", "NodeJS"],
  // },
  {
    id: 4,
    image: IMG4,
    title: "Ummi Bobbins (A Babysitter Booking App)",
    summary:
      "A booking app using MERN stack for linking up parents with babysitters. This app also allows users to sign up as babysitter to get jobs from parent-users. We also incorporated Stripe payment in the booking process and is finally deployed with Heroku.",

    github: "https://github.com/qamarularifin/Project-4_UmmiBobbins_FE",
    demo: "https://project-4-ummibobbins-fe.herokuapp.com/",
    tech: ["MongoDB", "/", "ExpressJS", "/", "ReactJS", "/", "NodeJS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" data-aos="zoom-in">
      <div>
        <h1>Projects</h1>
      </div>
      <div className="projects_container">
        {data.map((ele, i) => {
          return (
            <article key={i} className="project_item">
              <div className="project_item-image">
                <a href={ele.demo} target="_blank">
                  <img src={ele.image} alt={ele.title} />
                </a>
              </div>
              <div>
                <h3>{ele.title}</h3>
                <p>{ele.summary}</p>

                <div className="tech">{ele.tech}</div>

                <div className="project_item-link">
                  <a href={ele.github} className="btn proj" target="_blank">
                    Github Link
                  </a>

                  <a href={ele.demo} className="btn proj" target="_blank">
                    {ele.demo === "" ? "Unavailable" : "Demo"}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
