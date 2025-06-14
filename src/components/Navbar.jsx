import React, { useState } from "react";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Show dropdown when hovering either Doctors or Login/Signup
  const handleDropdownEnter = () => setDropdownOpen(true);
  const handleDropdownLeave = () => setDropdownOpen(false);

  return (
    <nav className="navbar">
      <img src="/images/logo.png" alt="Logo" />
      <span className="navbar-title">ProVital</span>
      <ul className="navbar-links">
        <li>List your practice</li>
        <li>For Employers</li>
        <li>Courses</li>
        <li>Books</li>
        <li>Speakers</li>
        <li
          className="dropdown-parent"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
          style={{ position: "relative" }}
        >
          Doctors <span className="navbar-caret">&#9662;</span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-row">
                <span className="dropdown-label">Doctor</span>
                <a href="/" className="dropdown-link">Login</a>
                <a href="/" className="dropdown-link">Sign up</a>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-row">
                <span className="dropdown-label">Patients</span>
                <a href="/" className="dropdown-link">Login</a>
                <a href="/" className="dropdown-link">Sign up</a>
              </div>
            </div>
          )}
        </li>
        <li
          className="dropdown-parent navbar-login"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
          style={{ position: "relative" }}
        >
          Login / Signup <span className="navbar-caret">&#9662;</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;