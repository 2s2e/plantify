import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'

function App() {

  return (
    <>
      <NavBar />
      <img src={reactLogo} alt="Plantify Logo" width="120" />

      <h1>Welcome to Plantify!</h1>
      <div className="card">
        <p >
        Blurb about Plantify.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
