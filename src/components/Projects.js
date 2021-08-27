import React from "react";

import Simplop from "../imgs/simplop.png";
import AP from "../imgs/adventurepack.png";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <section className="big-projects">
        <section className="project-container">
          <h2 className="text big-project-title">Simplop</h2>
          <p className="text project-description">
            A simple full-stack web application for parents with potty training
            children.
          </p>
          <div className="project-link">
            <img
              className="website-screen"
              alt="Simplop Website"
              src={Simplop}
            />
            <a href="https://simplop.com/">
              <span>Click to view hosted project &#8594;</span>
            </a>
          </div>
        </section>
        <section className="project-container">
          <a href="https://adventurequestlog.com/">
            <h2 className="text">Adventure Pack</h2>
          </a>
          <p className="text project-description">
            A simple full-stack web application for parents with potty training
            children.
          </p>
          <div className="project-link">
            <img
              className="website-screen"
              alt="Adventure Pack Website"
              src={AP}
            />
            <a href="https://adventurepack.com/">
              <span>Click to view hosted project &#8594;</span>
            </a>
          </div>
        </section>
      </section>

      <section className="mini-projects">
        <h1 className="text mini-title">Mini-projects</h1>
      </section>
    </section>
  );
};

export default Projects;
