import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>React Router</h1>
      <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/form">Form</Link>
      </nav>
    </div>
  );
}

export default Header;
