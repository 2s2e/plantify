import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import { ImageUploader } from './components/ImageUploader'
import plantifyLogo from './assets/plantify-logo.png'

function App() {

  return (
    <>
      <NavBar />
      <div className="main-content">
        <div className="content">
          <img src={plantifyLogo} alt="Plantify Logo" width="300" />
          <h1>Welcome to Plantify!</h1>
          <p>Blurb about Plantify.</p>
        </div>
        <div className="image-uploader">
          <ImageUploader />
        </div>
      </div>
    </>
  )
}

export default App
