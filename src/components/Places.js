// src/components/Places.js
import React from 'react';
import './Places.css';

// Import the images
import place1Image from '../images/place1.jpg';
import place2Image from '../images/place2.jpg';
import place3Image from '../images/place3.jpg';

const Places = () => {
  return (
    <div className="places">
      <div className="top-section text-center">
        <div className="connector-line-left"></div>
        <div className="centered-text">
          <p className="bold-text">Discover Amazing Places</p>
        </div>
        <div className="connector-line-right"></div>
      </div>
      <p className="description center-align">Explore these incredible destinations:</p>

      <div className="images-container">
        {/* Place 1 */}
        <div className="place">
          <img src={place1Image} alt="Place 1" className="place-image" />
          <p className="place-text">Place 1 Text</p>
          <p className="place-description">
            Description for Place 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo vel risus aliquam.
          </p>
        </div>

        {/* Place 2 */}
        <div className="place">
          <img src={place2Image} alt="Place 2" className="place-image" />
          <p className="place-text">Place 2 Text</p>
          <p className="place-description">
            Description for Place 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo vel risus aliquam.
          </p>
        </div>

        {/* Place 3 */}
        <div className="place">
          <img src={place3Image} alt="Place 3" className="place-image" />
          <p className="place-text">Place 3 Text</p>
          <p className="place-description">
            Description for Place 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo vel risus aliquam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Places;
