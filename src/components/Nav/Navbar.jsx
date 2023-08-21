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
        <Link to="/milkchocolates">Milk Chocolates</Link>
        <Link to="/darkchocolates">Dark Chocolates</Link>
        <Link to="/bestsellers">Best Sellers</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
