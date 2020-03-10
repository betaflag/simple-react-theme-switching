import React from "react";
import "./Button.css";

function Button({ onClick, type, children }) {
  let buttonClass = "Button";

  if (type === "secondary") {
    buttonClass += " Button--secondary";
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
