import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic you need here (e.g., clearing tokens, etc.)

    // Redirect to home page
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <i className="fas fa-shipping-fast"></i> Logistics Management System
      </div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact Us</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
