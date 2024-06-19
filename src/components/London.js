// src/components/London.js
import React from 'react';
import './London.css';

// Import the London image
import londonImage from '../images/london.jpg';

const London = () => {
  return (
    <div className="london">
      <div className="top-section text-center">
        <div className="connector-line-left"></div>
        <div className="centered-text">
          <p className="bold-text">BEST THING TO DO, LONDON</p>
        </div>
        <div className="connector-line-right"></div>
      </div>
      <p className="description center-align"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div className="image-container">
        <img src={londonImage} alt="London" className="london-image" />
      </div>
    </div>
  );
}

export default London;
