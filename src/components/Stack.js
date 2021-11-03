import React from "react";

/* #region Imported Logos */
import ReactLogo from "../imgs/react.png";
import JavaScriptLogo from "../imgs/JavaScriptLogo.png";
import HTMLLogo from "../imgs/html.png";
import CSSLogo from "../imgs/CSSLogo.png";
import PostgreSQLLogo from "../imgs/PostgreSQL.png";
import NodejsLogo from "../imgs/Nodejs.png";
import MongoDB from "../imgs/MongoDB.png";
/* #endregion */

const Stack = () => {
  return (
    <section className="stack" id="stack">
      <section className="stacks">
        <h2>My Stack</h2>
        <section className="technologies">
          <div>
            <img alt="React.js Logo" src={ReactLogo} />
            <h4>React</h4>
          </div>
          <div>
            <img alt="JavaScipt Logo" src={JavaScriptLogo} />
            <h4>JavaScript</h4>
          </div>
          <div>
            <img alt="HTML Logo" src={HTMLLogo} />
            <h4>HTML</h4>
          </div>
          <div>
            <img alt="CSS Logo" src={CSSLogo} />
            <h4>CSS</h4>
          </div>
          <div>
            <img alt="Nodejs Logo" src={NodejsLogo} />
            <h4>Node.js</h4>
          </div>
          <div>
            <img alt="PostgreSQL Logo" src={PostgreSQLLogo} />
            <h4>PostgreSQL</h4>
          </div>
          <div>
            <img alt="MongoDB Logo" src={MongoDB} />
            <h4>MongoDB</h4>
          </div>
        </section>
        <section className="technologies">
          <h3>Extras</h3>
          <ul>
            <li>GitHub</li>
            <li>Git</li>
            <li>React Native</li>
            <li>Expo CLI</li>
            <li>React Hooks</li>
            <li>React Redux</li>
            <li>React Router</li>
            <li>Express</li>
            <li>Bcrypt</li>
            <li>Dotenv</li>
            <li>Massive</li>
            <li>Socket.io</li>
            <li>Quill</li>
            <li>Axios</li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Stack;
