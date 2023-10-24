import React from 'react';
import plantifyHeader from '../../assets/plantify-header.png';
import './style.css';
import { useContext } from 'react';
import { MyContext } from '../../MyContext.jsx';

function ResultPage({ navbarVisible}) {
  const {plantImage, setPlantImage, plantName, setPlantName} = React.useContext(MyContext);
  return (
    <div className='root'>
      <div className={`results-container ${navbarVisible ? 'navbar-open' : 'navbar-closed'}`}>
        <div className='input-image'>
          <img src={plantImage} alt='plant' width='150' />
        </div>
        <div className='results-heading'>
          <h1>{plantName}</h1>
        </div>
        
      </div>
    </div>
  );
}

export default ResultPage;
