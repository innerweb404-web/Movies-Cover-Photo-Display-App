import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      
      <div className="header-logo">
        <img
          src={`${import.meta.env.BASE_URL}assets/list-icon.png`}
          alt="Movie List logo"
          className="logo"
        />
        <h1 className="head">Movie List</h1>
      </div>

      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-slide ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourite"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
