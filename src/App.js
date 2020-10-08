//REACT
import React from "react";

//STYLES
import "./styles/styles.css";

//COMPONENTS
import Header from "./components/header.js";
import About from "./components/about";
import BirthdayFacts from "./components/birthdayfacts";
import Hero from "./components/hero";
import Footer from "./components/footer";

function App() {
  return (
    <div id="App">
      <Header />
      <Hero />
      <About />
      <BirthdayFacts />
      <Footer />
    </div>
  );
}

export default App;
