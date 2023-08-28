import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import { ImageUploader } from './components/ImageUploader'
import plantifyLogo from './assets/plantify-logo.png' // this is the navbar icon with dark backgorund
import navBarLogo from './assets/navbar-logo1.svg' // this is the navbar icon with light background
import plantifyHeader from './assets/plantify-header.png'
import HomePage from './components/HomePage'

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setNavbarVisible(prevState => !prevState);
  };

  return (
    <div className="app-container">
      <button className="navbar-button" onClick={toggleNavbar}>
        <img src={navBarLogo} alt="NavBarLogo" width="50" />
      </button>
      {navbarVisible && <NavBar onNavbarButtonClick={toggleNavbar} />}
      {/* Main content wrapper, checks the state of the navbar */}
      <div className={`main-content ${navbarVisible ? 'opened' : 'closed'}`}>
        {/* header wrapper */}
        <HomePage />
      </div>
    </div>
  );
}

export default App;


