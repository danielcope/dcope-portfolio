import React from "react";

const Nav = () => {
  return (
    <section className="nav">
      <section className="nav-opened">
        <ul className="nav-ul">
          <a href="#me">
            <li className="text nav-li">Me</li>
          </a>

          <a href="#stack">
            <li className="text nav-li">My Stack</li>
          </a>

          <a href="#projects">
            <li className="text nav-li">My Projects</li>
          </a>

          <a href="#contact">
            <li className="text nav-li">Contact Me</li>
          </a>
        </ul>
      </section>
    </section>
  );
};

export default Nav;
