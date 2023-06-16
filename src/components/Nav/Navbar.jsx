import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <div className="Header">
        <h1>Cocoa Haven</h1>
        <h2>Login</h2>
      </div>
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="nav1">
        <Link to="/chocolates">
          <p>Chocolates</p>
        </Link>
        <Link to="/bestsellers">
          <p>Best Sellers</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
      </div>
    </nav>
  );
}
