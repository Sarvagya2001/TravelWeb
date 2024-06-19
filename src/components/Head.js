import React from 'react';
import './Head.css'; // Import the CSS file for styling

import addressIcon from '../images/address-icon.png';
import phoneIcon from '../images/phone-icon.png';
import emailIcon from '../images/email-icon.png';

const Head = () => {
  return (
    <div className="top-bar">
      <div className="contact-info">
        <div className="contact-item">
          <img src={addressIcon} alt="Address Icon" className="icon" />
          <span className="info">Your Address</span>
        </div>
        <div className="contact-item">
          <img src={phoneIcon} alt="Phone Icon" className="icon" />
          <span className="info">Your Phone Number</span>
        </div>
        <div className="contact-item">
          <img src={emailIcon} alt="Email Icon" className="icon" />
          <span className="info">Your Email</span>
        </div>
      </div>
    </div>
  );
}

export default Head;
