import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import { ImageUploader } from './components/ImageUploader'
import plantifyLogo from './assets/plantify-logo.png' // this is the navbar icon with dark backgorund
import navBarLogo from './assets/navbar-logo1.svg' // this is the navbar icon with light background
function App() { 
  const [navbarVisible, setNavbarVisible] = useState(true); // set visibility to true initially

  const toggleNavbar = () => {
    setNavbarVisible(prevState => !prevState);
  }; // we want to flip the states on clicking stuff 

  return (
    <>
      <button className="navbar-button" onClick={toggleNavbar}>
        <img src={navBarLogo} alt="NavBarLogo" width="50" />
      </button>
      {navbarVisible && <NavBar onNavbarButtonClick={toggleNavbar} />}
      <div className="main-content">
      <h1 className='title'>Welcome to Plantify!</h1>
        <div className="content">
        <img src={plantifyLogo} alt="Plantify Logo" width="300" />
        <p> Snap photo. Upload Image </p>
        </div>
        <div className="image-uploader">
          <ImageUploader />
        </div>
      </div>
    </>
  )
}

export default App;
