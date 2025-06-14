import React, { useState } from "react";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownEnter = () => setDropdownOpen(true);
  const handleDropdownLeave = () => setDropdownOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <nav className="navbar">
      <img src="/images/logo.png" alt="Logo" />
      <span className="navbar-title">ProVital</span>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-auth-section">
            <div className="mobile-auth-group">
              <span>Doctor</span>
              <div className="mobile-auth-links">
                <a href="/">Login</a>
                <a href="/">Sign up</a>
              </div>
            </div>
            <div className="mobile-auth-group">
              <span>Patients</span>
              <div className="mobile-auth-links">
                <a href="/">Login</a>
                <a href="/">Sign up</a>
              </div>
            </div>
          </div>
          <div className="mobile-nav-links">
            <a href="/">List your practice</a>
            <a href="/">For Employers</a>
            <a href="/">Courses</a>
            <a href="/">Books</a>
            <a href="/">Speakers</a>
            <a href="/">Doctors</a>
          </div>
        </div>
      )}

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