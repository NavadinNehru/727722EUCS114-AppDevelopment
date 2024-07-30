import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">LASSO</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
