// src/components/Offers.js
import React from 'react';
import './Offers.css';

// Import the images
import offer1Image from '../images/offer1.png';
import offer2Image from '../images/offer2.png';
import offer3Image from '../images/offer3.png';
import offer4Image from '../images/offer4.png';

const Offers = () => {
  return (
    <div className="offers">
      <div className="top-section text-center">
        <div className="connector-line-left"></div>
        <div className="centered-text">
          <p className="bold-text">SPECAIL OFFERS FOR TRAVELLING</p>
        </div>
        <div className="connector-line-right"></div>
      </div>
      <p className="description center-align"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

      <div className="offer-container">
        {/* Offer 1 */}
        <div className="offer">
          <img src={offer1Image} alt="Offer 1" className="offer-image" />
          <p className="offer-text">Offer 1 Text</p>
          <p className="offer-description">Description for Offer 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="orange-button">Read More</button>
        </div>

        {/* Offer 2 */}
        <div className="offer">
          <img src={offer2Image} alt="Offer 2" className="offer-image" />
          <p className="offer-text">Offer 2 Text</p>
          <p className="offer-description">Description for Offer 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="orange-button">Read More</button>
        </div>

        {/* Offer 3 */}
        <div className="offer">
          <img src={offer3Image} alt="Offer 3" className="offer-image" />
          <p className="offer-text">Offer 3 Text</p>
          <p className="offer-description">Description for Offer 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="orange-button">Read More</button>
        </div>

        {/* Offer 4 */}
        <div className="offer">
          <img src={offer4Image} alt="Offer 4" className="offer-image" />
          <p className="offer-text">Offer 4 Text</p>
          <p className="offer-description">Description for Offer 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="orange-button">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Offers;


