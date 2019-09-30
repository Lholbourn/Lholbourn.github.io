import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectCard from "./ProjectCard";
import SkillsCard from "./SkillsCard";
import Banner from "./Banner";
import Footer from "./Footer";

const projects = [
  {
    heading: "Onetwosix",
    description:
      "An app designed to make your evenings at home more enjoyable by recommending movie and takeawayrestaurant combinations based on user location, genre choice, and food preferences",
    github: "https://github.com/Lholbourn/ONETWOSIX",
    webpage: "https://www.onetwosix.co.uk/",
    screenshot: "/126.jpg"
  },
  {
    heading: "Squawker",
    description:
      "This was a simple clone of twitter, designed using bootstrap. It includes a simple log in/log out feature, using the Devise ruby gem. It allows the user to tweet, upload an avatar and view the tweets of other users.",
    github: "https://github.com/Lholbourn/twitter-clone",
    webpage: "https://lh-squawker.herokuapp.com/",
    screenshot: "/squawker.jpg"
  },
  {
    heading: "Limelite",
    description:
      "My team for the final project and I made a practise project in 4 days. This website allows users to book tickets to unique movie screenings, or to create events themselves. It was designed to practise our skills and is based roughly on AirBnB.",
    github: "https://github.com/Lholbourn/cinema",
    webpage: "https://cinema-airbnb-clone.herokuapp.com/",
    screenshot: "/limelite.jpg"
  }
];

const skills = [
  {
    heading: "Front End",
    content: "HTML • CSS • Sass Javascript (ES6+) • Bootstrap"
  },
  {
    heading: "Back End",
    content:
      "Ruby • Ruby on Rails • SQL ORM (ActiveRecord) • MVC Database Migrations"
  },
  {
    heading: "Skills",
    content:
      "Schema design • Code review OOP • Command line tools • REST API integration • Web scraping (Nokogiri)"
  },
  {
    heading: "Tools",
    content: "Yarn • npm • RubyGems • git • Github • Figma • Whimsical • Trello"
  }
];

function App() {
  return (
    <div className="container">
      <Banner />
      <div className="skills row">
        {skills.map(skill => (
          <div className="skills__item col-md-3">
            <SkillsCard heading={skill.heading} content={skill.content} />
          </div>
        ))}
      </div>

      <div className="projects row">
        {projects.map(project => (
          <div className="projects__item col-md-4">
            <ProjectCard
              heading={project.heading}
              description={project.description}
              github={project.github}
              webpage={project.webpage}
              screenshot={project.screenshot}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
