import React from "react";

const Button = ({ name, handleClick, fontSize, padding, margin, type }) => {
  return (
    <button type={type} style={{ fontSize, padding, margin }} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
