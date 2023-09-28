import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  function toggleClass(e) {
    e.currentTarget.parentElement.classList.toggle("change");
  }
  return (
    <nav className="container">
      <div className="hamburger" onClick={toggleClass}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="nav1" id="menu">
      <Link to="/">Home</Link>
        <Link to="/milkchocolates">Milk Chocolates</Link>
        <Link to="/darkchocolates">Dark Chocolates</Link>
        <Link to="/bestsellers/64e7b3b068d0086836a8cee9">Best Sellers</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
