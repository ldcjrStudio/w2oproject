import React from "react";

//IMAGES
import asteroid from "../images/asteroid.svg";

const Header = () => {
  return (
    <header>
      <h1 className="rotate">
        <img src={asteroid} alt="Asteroid logo" />
      </h1>
    </header>
  );
};
export default Header;
