import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>React Router</h1>
      <nav>
        <ul>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <Link to="/users">Users</Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
