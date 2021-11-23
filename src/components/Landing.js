import React from "react";

import Background from "./Background";

const Landing = () => {
  return (
    <section className="landing" id="landing">
      <div className="particle-background">
        <Background />
      </div>
      <section>
        <h1>Hi! My name is Daniel Cope.</h1>

        <h3>Full-stack Web Developer.</h3>
      </section>
    </section>
  );
};

export default Landing;
