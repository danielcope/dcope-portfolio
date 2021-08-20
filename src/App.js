import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Project from "./components/Projects";
import Stack from "./components/Stack";
import Landing from "./components/Landing";

import "./App.css";
import Background from "./components/Background";

const App = () => {
  return (
    <section className="app">
      <Background />
      <Nav />
      <Landing />
      <AboutMe />
      <Stack />
      <Project />
      <Contact />
    </section>
  );
};

export default App;
