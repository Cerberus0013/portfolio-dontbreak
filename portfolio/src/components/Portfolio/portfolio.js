import Project from "../Project/project";
import React from "react";

const portfolio = [
  {
    id: 1,
    title: "testABC",
    link: "deployed",
    github: "linktogithub",
    image: "./assets/coverimg/download.jpg",
    description: "jksdsjhsdhjsdjh",
  },
  {
    id: 2,
    title: "njbej",
    link: "deplo",
    github: "linktogithub",
    image: "./assets/planner/Screen Shot 2021-07-02 at 11.33.40 AM.png",
    description: "vdvwwevewbwebwbwrb",
  },
  {
    id: 3,
    title: "Trade Secret",
    link: "https://shawnlittrel-trade-secret.herokuapp.com/",
    github: "https://github.com/shawnlittrel/CRM-Tools",
    image:"./assets/crm/Screen Shot 2021-07-07 at 5.21.42 PM.png",
    description:
      "This a CRM designed to help business manage their operations from 1 app",
  },
];

function Portfolio() {
  return (
    <div>
      {portfolio.map((project) => (
        <Project
          id={project.id}
          title={project.title}
          link={project.link}
          github={project.github}
          image={project.image}
          description={project.description}
          key={project.id}
        />
      ))}
    </div>
  );
}

export default Portfolio;
