import React from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import Title from "../Title/Title";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink to="/">
        <Title title="Form with Hooks" fontSize="3rem" />
      </NavLink>

      <div className="nav-links">
        <NavLink to="/login">
          <Button name="Login" padding=".3rem .9rem" />
        </NavLink>
        <NavLink to="/signup">
          <Button name="Sign Up" padding=".3rem .9rem" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
