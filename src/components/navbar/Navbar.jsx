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
          About Us
        </Link>
        <a href="/write-review" className="nav-link">
          Reviews
        </a>
      {/* <button className="login-button">Log In</button> */}
      <button className="joinwithus-button">
        <Link to="/Join-With" className="join-link">
          Join with Us
        </Link>
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
