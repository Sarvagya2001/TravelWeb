// src/components/Navbar.js
import React from 'react';
import './Navbar.css';


const CustomNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Global Travels</div>
      <div className="navbar-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/travel" className="nav-link">Travel</a>
        <a href="/blog" className="nav-link">Blog</a>
        <a href="/contact" className="nav-link">Contact Us</a>
      </div>
    </nav>
  );
}

export default CustomNavbar;
