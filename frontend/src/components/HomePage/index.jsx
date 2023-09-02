import React from "react";
import './style.css';
import { ImageUploader } from '../ImageUploader'
import plantifyLogo from '../../assets/plantify-logo.png' 
import plantifyHeader from '../../assets/plantify-header.png'

function HomePage({ onUploadSubmit }) {
  const handleUploadClick = () => {
    onUploadSubmit(); // Trigger the function to show ResultPage
  };
  return (
    <div>
      {/* header wrapper */}
      <div className="header">
        <img src={plantifyHeader} alt="Plantify Header" width="300" />
      </div>

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
          <button onClick={handleUploadClick} >Submit</button>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
