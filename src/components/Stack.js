import React from "react";
import ReactLogo from "../imgs/Daco_5903330.png";
import JavaScriptLogo from "../imgs/JavaScriptLogo.png";
import HTMLLogo from "../imgs/HTMLLogo.png";
import CSSLogo from "../imgs/CSSLogo.png";
import PostgreSQLLogo from "../imgs/PostgreSQL.png";
import NodejsLogo from "../imgs/Nodejs.png";
import MongoDB from "../imgs/MongoDB.png";

const Stack = () => {
  return (
    <section className="stack" id="stack">
      <section className="stack-titles">
        <h2 className="text">My Stack</h2>
        <h2 className="text">Additional Technologies</h2>
      </section>
      <section className="stacks">
        <section className="technologies">
          <div className="logo-line">
            <img className="react-logo" alt="React.js Logo" src={ReactLogo} />
          </div>
          <div className="logo-line">
            <img
              className="javascript-logo"
              alt="JavaScipt Logo"
              src={JavaScriptLogo}
            />
            <span className="text logo-text">JavaScript</span>
          </div>
          <div className="logo-line">
            <img className="javascript-logo" alt="HTML Logo" src={HTMLLogo} />
            <span className="text logo-text">HTML</span>
          </div>
          <div className="logo-line">
            <img className="javascript-logo" alt="CSS Logo" src={CSSLogo} />
            <span className="text logo-text">CSS</span>
          </div>
          <div className="logo-line">
            <img
              className="javascript-logo"
              alt="Nodejs Logo"
              src={NodejsLogo}
            />
            <span className="text logo-text">Node.js</span>
          </div>
          <div className="logo-line">
            <img
              className="javascript-logo"
              alt="PostgreSQL Logo"
              src={PostgreSQLLogo}
            />
            <span className="text logo-text">PostgreSQL</span>
          </div>
          <div className="logo-line">
            <img className="javascript-logo" alt="MongoDB Logo" src={MongoDB} />
            <span className="text logo-text">MongoDB</span>
          </div>
        </section>
        <section className="additions">
          <ul>
            <li className="text tech-list">GitHub</li>
            <li className="text tech-list">React Native</li>
            <li className="text tech-list">Expo CLI</li>
            <li className="text tech-list">React Redux</li>
            <li className="text tech-list">Express</li>
            <li className="text tech-list">Bcrypt</li>
            <li className="text tech-list">Dotenv</li>
            <li className="text tech-list">React Router</li>
            <li className="text tech-list">Socket.io</li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Stack;
