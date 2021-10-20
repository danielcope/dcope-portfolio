import React from "react";

import FullStackProjects from "./projects/FullStackProjects";
import MiniProjects from "./projects/MiniProjects";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <FullStackProjects />
      <MiniProjects />
    </section>
  );
};

export default Projects;
