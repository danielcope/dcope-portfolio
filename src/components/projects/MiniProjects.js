import React from "react";

import Docs from "../../imgs/docs.png";
import NoDB from "../../imgs/nodb.png";

const MiniProjects = () => {
  return (
    <section className="project-container">
      <h2 className="text mini-title">Mini-projects</h2>
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
  );
};

export default MiniProjects;
