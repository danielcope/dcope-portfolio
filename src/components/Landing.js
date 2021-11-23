import React from "react";

import Typewriter from "typewriter-effect";
import Background from "./Background";

const Landing = () => {
  return (
    <section className="landing" id="landing">
      <div className="particle-background">
        <Background />
      </div>
      <section>
        <h1>I am Daniel Cope!</h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("<span>I am a backend developer</span>")
              .pauseFor(300)
              .deleteChars(17)
              .typeString("<span>frontend developer</span>")
              .pauseFor(300)
              .deleteChars(18)
              .typeString("<span>fullstack developer</span>")
              .start();
          }}
        />
      </section>
      <div className="photo"></div>
    </section>
  );
};

export default Landing;
