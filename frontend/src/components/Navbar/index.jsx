import React from 'react';
import './style.css';
import navbarLogo from '../../assets/navbar-logo.svg';

const NavBar = () => {

  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <div className="buttons-container">
            <button > Upload an image</button>
            <img src={navbarLogo} alt="sidebar logo" width="50" />
        </div>

        {/* Add more navigation items as needed */}
      </ul>
    </div>
  );
};

export default NavBar;
