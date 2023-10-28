import React from "react";
import './style.css';
import { ImageUploader } from '../ImageUploader'
import plantifyLogo from '../../assets/plantify-logo.png' 
import plantifyHeader from '../../assets/plantify-header.png'

function HomePage({ onUploadSubmit }) {
  const handleUploadClick = () => {
    fetch('http://127.0.0.1:5000')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })


    
    onUploadSubmit(); // Trigger the function to show ResultPage
  };
  return (
    <div>
 
      {/* uploader + logo container */}
      <div className="content-uploader">
        <div className="content">
          <img src={plantifyLogo} alt="Plantify Logo" width="300" />
          <p className="subtitle1"> Snap photo. Upload Image </p>
          <p className="subtitle2"> Identify Plant.</p>
        </div>

        {/* wrapper for the image uploader component */}
        <div className="image-uploader">
          <ImageUploader />
          <br></br>
          <button onClick={handleUploadClick} >Submit</button>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
