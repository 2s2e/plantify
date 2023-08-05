import React from 'react';
import './style.css'; // You can create a separate CSS file for the styles

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <div className="buttons-container">
            <button> Upload an image</button>
            <button></button>
        </div>

        {/* Add more navigation items as needed */}
      </ul>
    </div>
  );
};

export default NavBar;
