import React from "react";

import FullStackProjects from "./projects/FullStackProjects";
import MiniProjects from "./projects/MiniProjects";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <FullStackProjects />
      <h2>Mini-projects</h2>
      <MiniProjects />
    </section>
  );
};

export default Projects;
