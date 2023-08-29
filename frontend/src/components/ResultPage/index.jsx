import React from 'react';
import plantifyHeader from '../../assets/plantify-header.png';
import './style.css';

function ResultPage({ navbarVisible }) {
  return (
    <div className='root'>
      <div className="header">
        <img src={plantifyHeader} alt="Plantify Header" width="300" />
      </div>
      <div className={`results-container ${navbarVisible ? 'navbar-open' : 'navbar-closed'}`}>
        <div className='input-image'></div>
        <div className='results-heading'>
          <h1> Possible Plants</h1>
        </div>
        <div className={`result-images ${navbarVisible ? 'navbar-open' : 'navbar-closed'}`}>
          <div className={`item ${navbarVisible ? 'navbar-open' : 'navbar-closed'}`}>
            <p className='plant-label'> Potential Plant 1</p>
          </div>
          <div className={`item ${navbarVisible ? 'navbar-open' : 'navbar-closed'}`}>
            <p className='plant-label'> Potential Plant 2</p>
          </div>
          <div className={`item ${navbarVisible ? 'navbar-open' : 'navbar-closed'}`}>
            <p className='plant-label'> Potential Plant 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
