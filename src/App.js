import React from "react";
import "./styles/styles.css";

//COMPONENTS
// import Button from "./components/button.js";
import Header from "./components/header.js";
import About from "./components/about";
import BirthdayFacts from "./components/birthdayfacts";

import Testing from "./components/testing";

function App() {
  return (
    <div id="App">
      <Header />
      <section id="hero">
        <div>
          <h2>Here on Earth, we have so much to be grateful for.</h2>
          <h3>
            Today, we thrive in the abundance of social connection, technology,
            innovation, but lets also not forget the fact that our beloved Earth
            has dodged over 24,000 asteroids and commets!
          </h3>

          {/* <Button label="Let us show you the facts!" /> */}
        </div>
      </section>
      <About />
      <BirthdayFacts />
      {/* <Testing /> */}
    </div>
  );
}

export default App;
