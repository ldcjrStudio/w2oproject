import React from "react";
import "./styles/styles.css";

//COMPONENTS
// import Button from "./components/button.js";
import Header from "./components/header.js";
import About from "./components/about";
import BirthdayFacts from "./components/birthdayfacts";

function App() {
  return (
    <div id="App">
      <Header />
      <section id="hero">
        <div>
          <h2>
            There are so many things to be grateful for today... I couldntbe
            anymore excited about the fact that we havent gotten
          </h2>

          <h2>But really, it's amazing what.</h2>
          {/* <Button label="Let us show you the facts!" /> */}
        </div>
      </section>
      <About />
      <BirthdayFacts />
    </div>
  );
}

export default App;
