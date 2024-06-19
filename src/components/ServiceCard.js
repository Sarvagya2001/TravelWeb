
import React from 'react';
import './ServiceCard.css';

const ServiceCard = () => {
  return (
    <div className="service-card">
      <div className="top-section">
        <div className="connector-line-left"></div>
        <div className="centered-text">
          <p className="bold-text">OUR JOURNEY OF TRAVEL</p>
        </div>
        <div className="connector-line-right"></div>
      </div>
      <p className="normal-text center-align">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo vel risus aliquam, vel accumsan turpis fermentum.</p>
      <div className="bordered-box">
        <p className="box-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo vel risus aliquam, vel accumsan turpis fermentum.
          Fusce tincidunt, felis eget interdum hendrerit, ipsum neque auctor ipsum, vel tincidunt lectus ex vel elit.
          Sed auctor consectetur elit, eget aliquet lacus congue in. Curabitur vitae turpis ac urna consectetur commodo vel a lacus.
          Phasellus sollicitudin luctus neque, vel ultricies nunc efficitur a. In euismod elit at neque rhoncus tristique.
        </p>
        <img src={require('../images/plane.png').default} alt="Plane" className="plane-image" />
      </div>
      <button className="action-button">Read More</button>
    </div>
  );
}

export default ServiceCard;



