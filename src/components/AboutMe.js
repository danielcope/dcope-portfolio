import React from "react";
import "../App.css";

const AboutMe = () => {
  return (
    <section className="about-me" id="me" data-aos="fade-up">
      <section>
        <h2>Who am I?</h2>
        <section data-aos="fade-up" className="about-me-p-container">
          <p>
            I am a Fullstack Web Developer.<br></br>
            <br></br> I have a passion for understanding the little details. I
            enjoy investigating problems and coming up with a good solution.
          </p>
          <p>
            I am an adventurer.<br></br>
            <br></br>I'm big fan of rock climbing. It's what I do when I have
            free time. I enjoy riding motorcycles and spending time with my
            family.
          </p>
        </section>
      </section>
    </section>
  );
};

export default AboutMe;
