// src/components/Footer.js
import React from 'react';
import './Footer.css';
import FacebookIcon from '../images/facebook.png';
import TwitterIcon from '../images/Twitter.png';
import LinkedInIcon from '../images/linkedin.png';
import InstagramIcon from '../images/instagram.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <img src={FacebookIcon} alt="Facebook" style={{ marginRight: '10px' }} />
        <img src={TwitterIcon} alt="Twitter" style={{ marginRight: '10px' }} />
        <img src={LinkedInIcon} alt="LinkedIn" style={{ marginRight: '10px' }} />
        <img src={InstagramIcon} alt="Insta" />

        {/* Add the fourth icon here */}
      </div>
      <div className="footer-links">
        <div className="contact">
          <span>CONTACT US</span>
          <p>123 Second Street Fifth</p>
          <p>Avenue,</p>
          <p>Manhattan, New York</p>
          <p>+987 654 321</p>
        </div>
        <div className="additional-links">
          <span>ADDITIONAL LINKS</span>
          <p>About Us</p>
          <p>Term and Conditions</p>
          <p>Privacy Policy</p>
          <p>News</p>
          <p>Contact Us</p>
        </div>
        <div className="contact-form">
          <span>CONTACT</span>
          <div className="inline-inputs">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <input type="text" placeholder="Comment" />
        </div>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}

export default Footer;

