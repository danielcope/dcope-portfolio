import React from "react";

import Separator from "../icons/Separator";

import Simplop from "../../imgs/simplop.png";
import AP from "../../imgs/adventurepack.png";

const FullStackProjects = () => {
  return (
    <section className="project-container fullstack-project-block">
      <section>
        <h2 className="text big-project-title">Simplop</h2>
        <p className="text project-description">
          A simple full-stack web application for parents with potty training
          children. Made with React.js, Node.js, and PostgreSQL.
        </p>
        <div className="project-link">
          <img className="website-screen" alt="Simplop Website" src={Simplop} />
          <a
            href="https://simplop.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>Click to view hosted project &#8594;</span>
          </a>
        </div>
      </section>
      <Separator />
      <section>
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
  );
};

export default FullStackProjects;
