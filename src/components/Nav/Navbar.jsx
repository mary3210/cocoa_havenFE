import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='nav'>
    <div className='Header'>
        <h1>Cocoa Haven</h1>
        <h2>Login</h2>
        </div>
        <div className='nav1'>
        <Link to="/chocolates">
        <h2>Chocolates</h2>
        </Link>
        <Link to="/bestsellers"> 
        <h2>Best Sellers</h2>
        </Link>
        <Link to="/about">
        <h2>About</h2>
        </Link>

    </div>
    </nav>
  )
}
