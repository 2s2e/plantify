import React from 'react';
import './style.css';
import navbarLogo from '../../assets/navbar-logo.svg';

const NavBar = ({ onNavbarButtonClick, navbarVisible }) => {

  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <div className="buttons-container">
          {navbarVisible ? (
            <>
              <button className='upload-button open-navbar'> Upload an image</button>
              <button className="navbar-button" onClick={onNavbarButtonClick}>
                <img src={navbarLogo} alt="sidebar logo" width="50" />
              </button>
            </>
          ) : (
            <>
              <button className='upload-button closed-navbar'> Upload an image</button>
              <button className="navbar-button closed-button" onClick={onNavbarButtonClick}>
                <img src={navbarLogo} alt="sidebar logo" width="50" />
              </button>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
