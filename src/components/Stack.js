import React from "react";

/* #region Imported Logos */
import ReactLogo from "../imgs/Daco_5903330.png";
import JavaScriptLogo from "../imgs/JavaScriptLogo.png";
import HTMLLogo from "../imgs/HTMLLogo.png";
import CSSLogo from "../imgs/CSSLogo.png";
import PostgreSQLLogo from "../imgs/PostgreSQL.png";
import NodejsLogo from "../imgs/Nodejs.png";
import MongoDB from "../imgs/MongoDB.png";
/* #endregion */

const Stack = () => {
  return (
    <section className="stack" id="stack">
      <section className="stacks">
        <section className="technologies">
          <h2>My Stack</h2>
          <section className="main-stack">
            <div>
              <img className="react-logo" alt="React.js Logo" src={ReactLogo} />
            </div>
            <div>
              <img
                className="javascript-logo"
                alt="JavaScipt Logo"
                src={JavaScriptLogo}
              />
              <span>JavaScript</span>
            </div>
            <div>
              <img className="javascript-logo" alt="HTML Logo" src={HTMLLogo} />
              <span>HTML</span>
            </div>
            <div>
              <img className="javascript-logo" alt="CSS Logo" src={CSSLogo} />
              <span>CSS</span>
            </div>
            <div>
              <img
                className="javascript-logo"
                alt="Nodejs Logo"
                src={NodejsLogo}
              />
              <span>Node.js</span>
            </div>
            <div>
              <img
                className="javascript-logo"
                alt="PostgreSQL Logo"
                src={PostgreSQLLogo}
              />
              <span>PostgreSQL</span>
            </div>
            <div>
              <img
                className="javascript-logo"
                alt="MongoDB Logo"
                src={MongoDB}
              />
              <span>MongoDB</span>
            </div>
          </section>
        </section>
        <section className="technologies">
          <h2>Additional Technologies</h2>
          <ul>
            <li>GitHub</li>
            <li>React Native</li>
            <li>Expo CLI</li>
            <li>React Redux</li>
            <li>React Router</li>
            <li>Express</li>
            <li>Bcrypt</li>
            <li>Dotenv</li>
            <li>Massive</li>
            <li>Socket.io</li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Stack;
