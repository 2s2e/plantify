import React from 'react';
import './style.css';
import navbarLogo from '../../assets/navbar-logo.svg';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <div className="buttons-container">
            <button > Upload an image</button>
            <img src={navbarLogo} alt="Plantify Logo" width="50" onClick={() => console.log('hi')}/>
        </div>

        {/* Add more navigation items as needed */}
      </ul>
    </div>
  );
};

export default NavBar;
