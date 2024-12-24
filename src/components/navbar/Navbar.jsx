// import React from "react";
// import "../navbar/Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <div className="logo">
//         <img src="public\img\madhu_idiyappa_kadai_logo.png" alt="Logo" className="logo-image" />
//         </div>
        
//         <input
//           type="text"
//           className="food-input"
//           placeholder="Idiyappam"
//         />
//         <button className="search-button">Q</button>
//       </div>
//       <div className="navbar-right">
//         <a href="#our-business" className="nav-link">Our Business</a>
//         <a href="#write-review" className="nav-link">Write a Review</a>
//         {/* <a href="#start-project" className="nav-link">Start a Project</a> */}
//         <button className="login-button">Log In</button>
//         <button className="signup-button">Sign Up</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "../navbar/Navbar.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img
            src="public/img/madhu_idiyappa_kadai_logo.png"
            alt="Logo"
            className="logo-image"
          />
        </div>

        <input
          type="text"
          className="food-input"
          placeholder="Idiyappam"
        />
        <button className="search-button">Q</button>
      </div>
      <div className="navbar-right">
        <a href="#our-business" className="nav-link">
          Our Business
        </a>
        <a href="#write-review" className="nav-link">
          Write a Review
        </a>
        <button className="login-button">Log In</button>
        <button className="signup-button">Sign Up</button>
      </div>

      {/* Dropdown Section */}
      <div className="navbar-dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
          Restaurants ▼
        </button>
        {dropdown && (
          <div className="dropdown-menu">
            <div className="dropdown-item">Takeout</div>
            <div className="dropdown-item">Reservations</div>
            <div className="dropdown-item">Delivery</div>
            <div className="dropdown-item">Burgers</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
