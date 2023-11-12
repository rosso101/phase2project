// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="naBar">
      <ul className="HomeTopBar">
        <li><button><Link to="/">HOME</Link></button></li>
        <li><button><Link to="/listings">LISTINGS</Link></button></li>
        <li><button><Link to="/about">ABOUT</Link></button></li>
        <li><button><Link to="/contacts">CONTACTS</Link></button></li>
        <li><button><Link to="/sell">SELL</Link></button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
