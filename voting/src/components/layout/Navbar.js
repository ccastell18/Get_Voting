import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar">
      <h1>
        <i className={icon}> {title}</i>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Get Voting',
  icon: 'fas fa-flag-usa',
};

export default Navbar;
