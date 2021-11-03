import React from "react";

const Nav = () => {
  return (
    <section className="nav">
      <section className="nav-opened">
        <ul>
          <a href="#me">
            <li>Me</li>
          </a>

          <a href="#stack">
            <li>My Stack</li>
          </a>

          <a href="#projects">
            <li>My Projects</li>
          </a>

          <a href="#contact">
            <li>Contact Me</li>
          </a>
        </ul>
      </section>
    </section>
  );
};

export default Nav;
