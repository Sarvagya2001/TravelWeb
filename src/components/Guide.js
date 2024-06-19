// src/components/Guide.js
import React from 'react';
import './Guide.css';

// Import the image
import guideImage from '../images/guide.jpg';

const Guide = () => {
  return (
    <div className="guide">
      <div className="text-container">
        <p className="bold-text">Your Guide to Adventure</p>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo vel risus aliquam, vel accumsan turpis fermentum.Sed auctor consectetur elit, eget aliquet la
        </p>
      </div>
      <div className="image-container">
        <img src={guideImage} alt="Guide" className="guide-image" />
        <div className="button-container">
          <button className="orange-button">Book Now</button>
          <button className="orange-button">Get More</button>
        </div>
      </div>
    </div>
  );
}

export default Guide;

