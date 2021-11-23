import React from "react";

import ReactLogo from "../imgs/react.png";
import JavaScriptLogo from "../imgs/JavaScriptLogo.png";
import HTMLLogo from "../imgs/html.png";
import CSSLogo from "../imgs/CSSLogo.png";
import PostgreSQLLogo from "../imgs/PostgreSQL.png";
import NodejsLogo from "../imgs/Nodejs.png";
import MongoDB from "../imgs/MongoDB.png";

const Stack = () => {
  return (
    <section className="stack" id="stack">
      <section className="stacks">
        <h2>My Stack</h2>
        <section className="technologies">
          <div>
            <img alt="React.js Logo" src={ReactLogo} data-aos="fade-right" />
            <h4 data-aos="fade-left">React</h4>
          </div>
          <div>
            <img
              alt="JavaScipt Logo"
              src={JavaScriptLogo}
              data-aos="fade-right"
            />
            <h4 data-aos="fade-left">JavaScript</h4>
          </div>
          <div>
            <img alt="HTML Logo" src={HTMLLogo} data-aos="fade-right" />
            <h4 data-aos="fade-left">HTML</h4>
          </div>
          <div>
            <img alt="CSS Logo" src={CSSLogo} data-aos="fade-right" />
            <h4 data-aos="fade-left">CSS</h4>
          </div>
          <div>
            <img alt="Nodejs Logo" src={NodejsLogo} data-aos="fade-right" />
            <h4 data-aos="fade-left">Node.js</h4>
          </div>
          <div>
            <img
              alt="PostgreSQL Logo"
              src={PostgreSQLLogo}
              data-aos="fade-right"
            />
            <h4 data-aos="fade-left">PostgreSQL</h4>
          </div>
          <div>
            <img alt="MongoDB Logo" src={MongoDB} data-aos="fade-right" />
            <h4 data-aos="fade-left">MongoDB</h4>
          </div>
        </section>
        <section
          className="technologies extras"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h3>Extras</h3>
          <ul>
            <li data-aos="fade-right">GitHub</li>
            <li data-aos="fade-right">Git</li>
            <li data-aos="fade-right">React Native</li>
            <li data-aos="fade-right">Expo CLI</li>
            <li data-aos="fade-right">React Hooks</li>
            <li data-aos="fade-right">React Redux</li>
            <li data-aos="fade-right">React Router</li>
            <li data-aos="fade-right">Express</li>
            <li data-aos="fade-right">Bcrypt</li>
            <li data-aos="fade-right">Dotenv</li>
            <li data-aos="fade-right">Massive</li>
            <li data-aos="fade-right">Socket.io</li>
            <li data-aos="fade-right">Quill</li>
            <li data-aos="fade-right">Axios</li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Stack;
