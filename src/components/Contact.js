import React from "react";

import Envelope from "./icons/Envelope";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div>
        <Envelope />
        <span>daniel.ash.cope@gmail.com</span>
      </div>
      <div>
        <LinkedInIcon />
        <a
          href="https://www.linkedin.com/in/daniel-cope-60853213/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="text context-text">linkedin</span>
        </a>
      </div>
      <div>
        <GitHubIcon />
        <a
          href="https://github.com/danielcope"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="text contact-text">My GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
