// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import tractorImage from '../assets/tractor4.png';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img src={tractorImage} alt="Punjab Agro Industries" className="logo-img" />
          <span className="logo-text">PUNJAB AGRO INDUSTRIES</span>
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes className="fa-times" /> : <FaBars className="fa-bars" />}
        </div>

        <div className="nav-right">
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-btn desktop-btn" onClick={closeMobileMenu}>
                    Get Quote
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
