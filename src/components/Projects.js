import React from "react";

import Simplop from "../imgs/simplop.png";
import AP from "../imgs/adventurepack.png";
import Docs from "../imgs/docs.png";
import NoDB from "../imgs/nodb.png";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <section className="big-projects">
        <section className="project-container">
          <h2 className="text big-project-title">Simplop</h2>
          <p className="text project-description">
            A simple full-stack web application for parents with potty training
            children. Made with React.js, Node.js, and PostgreSQL.
          </p>
          <div className="project-link">
            <img
              className="website-screen"
              alt="Simplop Website"
              src={Simplop}
            />
            <a
              href="https://simplop.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>Click to view hosted project &#8594;</span>
            </a>
          </div>
        </section>
        <section className="project-container">
          <h2 className="text">Adventure Quest Log</h2>
          <p className="text project-description">
            A full-stack React application. Technologies used: Node.js, Express,
            PostgreSQL, React Redux, React Router, Bcrypt, Axios.
          </p>
          <div className="project-link">
            <img
              className="website-screen"
              alt="Adventure Pack Website"
              src={AP}
            />
            <a
              href="https://adventurequestlog.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>Click to view hosted project &#8594;</span>
            </a>
          </div>
        </section>
      </section>

      <section className="mini-projects">
        <h1 className="text mini-title">Mini-projects</h1>
        <section className="mini-project-section">
          <section className="mini-container">
            <h3 className="text">Google Documents Clone</h3>
            <img src={Docs} alt="google docs clone" className="docs-img" />
            <a
              href="https://github.com/danielcope/docs-clone"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>Click to view GitHub repo &#8594;</span>
            </a>
          </section>
          <section className="mini-container">
            <h3 className="text">DnD Characters</h3>
            <img src={NoDB} alt="DnD character viewer" className="docs-img" />
            <a
              href="https://github.com/danielcope/nodb-dnd-characters"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>Click to view GitHub repo &#8594;</span>
            </a>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Projects;
