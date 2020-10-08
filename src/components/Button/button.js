import React from "react";

//STYLES
import styles from "./button.module.css";

const Button = ({ label, href }) => {
  return (
    <div>
      <button className={`${styles.btn}`}>
        <a href={href}>{label}</a>
      </button>
    </div>
  );
};

export default Button;
