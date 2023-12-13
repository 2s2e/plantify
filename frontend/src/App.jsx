import { useContext, useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import { ImageUploader } from './components/ImageUploader'
import plantifyLogo from './assets/plantify-logo.png' // this is the navbar icon with dark backgorund
import navBarLogo from './assets/navbar-logo1.svg' // this is the navbar icon with light background
import plantifyHeader from './assets/plantify-header.png'
import HomePage from './components/HomePage'
import ResultPage from './components/ResultPage'; 
import { MyContext } from './MyContext.jsx';

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [plantImage, setPlantImage] = useState(null);
  const [plantName, setPlantName] = useState(null);

  const toggleNavbar = () => {
    setNavbarVisible(prevState => !prevState);
  };

  const handleUploadSubmit = () => {
    setShowResults(true); // Set the state to show ResultPage
  };

  const goToHomePage = () => {
    setShowResults(false); // Set the state to show HomePage
  };

  return (
    <MyContext.Provider value={{plantImage, setPlantImage, plantName, setPlantName}}>
    <div className="app-container">
    <button className="navbar-button" onClick={toggleNavbar}>
      <img src={navBarLogo} alt="NavBarLogo" width="50" />
    </button>
    
    {/* Make the Plantify header act as a home button */}
    <button className="home-button" onClick={goToHomePage} style={{ border: 'none', background: 'transparent', padding: 0 }}>
      <img src={plantifyHeader} alt="plantifyHeader" width="300" />
    </button>
    
    {navbarVisible && <NavBar onNavbarButtonClick={toggleNavbar} />}
    {/* Main content wrapper, checks the state of the navbar */}
    <div className={`main-content ${navbarVisible ? 'opened' : 'closed'}`}>
      {/* Conditionally render HomePage or ResultPage */}
      {!showResults ? (
        <HomePage onUploadSubmit={handleUploadSubmit} />
      ) : (
        <ResultPage navbarVisible={navbarVisible}  />
      )}
    </div>
  </div>
  </MyContext.Provider>
  );
}

export default App;


