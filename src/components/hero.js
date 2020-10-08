import React from "react";

import Button from "./Button/button";

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h2>Here on Earth, we have so much to be grateful for.</h2>
        <h3>
          Today, we thrive in the abundance of social connection, technology,
          innovation, but lets also not forget the fact that our beloved Earth
          has dodged over 24,000 asteroids and commets!
        </h3>

        <Button href="#about" label="Let us show you the facts!" />
      </div>
    </section>
  );
};

export default Hero;
