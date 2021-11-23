import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Project from "./components/Projects";
import Stack from "./components/Stack";
import Landing from "./components/Landing";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }

  render() {
    return (
      <section className="app">
        <Nav />
        <Landing />
        <AboutMe />
        <Stack />
        <Project />
        <Contact />
      </section>
    );
  }
}

export default App;
