import React from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to= "/">
            <img
              src="public/img/madhu_idiyappa_kadai_logo.png"
              alt="Logo"
              className="logo-image"
            />
          </Link>
        </div>
        <input type="text" className="food-input" placeholder="Search foods" />
        <button className="search-button">Q</button>
      </div>
      <div className="navbar-right">
        <Link to="/our-business" className="nav-link">
          Our Business
        </Link>
        <a href="#write-review" className="nav-link">
          Write a Review
        </a>
        <button className="login-button">Log In</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
