import React from "react";

import Email from "../imgs/email.png";
import linkedin from "../imgs/linkedin.png";
import github from "../imgs/github.png";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <section className="contact-links">
        <a href="https://www.linkedin.com/in/daniel-cope-60853213/">
          <div className="each-contact">
            <img src={Email} alt="email" className="contact-img" />
            <span className="text contact-text">daniel.ash.cope@gmail.com</span>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/daniel-cope-60853213/">
          <div className="each-contact">
            <img src={linkedin} alt="linkedin" className="contact-img" />
            <span className="text context-text">linkedin</span>
          </div>
        </a>
        <a href="https://github.com/danielcope">
          <div className="each-contact">
            <img src={github} alt="github" className="contact-img" />
            <span className="text contact-text">My GitHub</span>
          </div>
        </a>
      </section>
    </section>
  );
};

export default Contact;
