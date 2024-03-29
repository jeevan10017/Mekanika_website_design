import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from './Mekanika_logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Mekanika Logo" />
        <h1>Mekanika</h1>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-close-icon" onClick={closeMenu}></div>
        <ul>
          <li><Link to="/Mekanika_website_design" onClick={closeMenu}>Home</Link></li>
          <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <span onClick={toggleDropdown}>Blogs</span>
            <div className="dropdown-content">
              <Link to="/core-expedition" onClick={closeMenu}>Core Expedition</Link>
              <Link to="/intern-chronicles" onClick={closeMenu}>Intern Chronicles</Link>
            </div>
          </li>

          <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
          <li><Link to="/course-material" onClick={closeMenu}>Course Material</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
