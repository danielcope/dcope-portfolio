import React from "react";

import Simplop from "../../imgs/simplop.png";
import AP from "../../imgs/adventurepack.png";

const FullStackProjects = () => {
  return (
    <section>
      <section>
        <h3>Simplop</h3>
        <p>
          A simple full-stack web application for parents with potty training
          children. Made with React.js, Node.js, and PostgreSQL.
        </p>
        <img className="website-screen" alt="Simplop Website" src={Simplop} />
        <div>
          <a
            href="https://simplop.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>Click to view hosted project &#8594;</span>
          </a>
        </div>
      </section>
      <section>
        <h3>Adventure Quest Log</h3>
        <p>
          A full-stack React application. Technologies used: Node.js, Express,
          PostgreSQL, React Redux, React Router, Bcrypt, Axios.
        </p>
        <img className="website-screen" alt="Adventure Pack Website" src={AP} />
        <div>
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
