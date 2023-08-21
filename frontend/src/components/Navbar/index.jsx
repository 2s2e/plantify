import React from 'react';
import './style.css';
import navbarLogo from '../../assets/navbar-logo.svg'; // the dark green version

// the component only expands when navBarVisible state is set to true 
const NavBar = ({ onNavbarButtonClick, navbarVisible }) => {

  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <div className="buttons-container">
          {navbarVisible ? ( // if the navbar is visible, then show everything inside 
                              // upload button chi made 
                              // the same button to contract the navbar 
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

// note: I have 2 divs for teh same thing but different names,
// because i am making the navbar disappear using css lol 

export default NavBar;
