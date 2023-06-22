import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  function toggleClass(e) {
    e.currentTarget.classList.toggle("change");
  }
  return (
    <nav className="nav">
      <div className="Header">
        <h1>Cocoa Haven</h1>
        <h2>Login</h2>
      </div>
      <div className="hamburger" onClick={toggleClass}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      
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
      </div>
    </nav>
  );
}
