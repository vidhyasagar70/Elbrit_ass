import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="Firstfooterrow">
        <div className="insiderow">
          <div >
            <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
          </div>
          <div>
            <p>Phone Number</p>
            <p>+974 3118 1843</p>
          </div>
        </div>

        <div className="insiderow">
          <div >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>
          <div>
            <p>Email Address</p>
            <p>Elbrithcqhr@gmail.com</p>
          </div>
        </div>

        <div className="insiderow">
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
          </div>
          <div>
            <p>Office Location</p>
            <p>Ambassador Street, Zone 61,</p>
          </div>
        </div>
      </div>

      <div className="lastfooterrow">
        <div>
          <img src="/images/logo.png" alt="Elbrit Logo" className="logo" />
          <p>Elbrit Life Sciences Private Limited, C20, BKC, G Block, Mumbai 400051</p>
        </div>
        <div>
          <p>Your health, physical and emotional well-being is important<br /> to us. We are always by your side and have made it even<br /> easier for you to find the necessary vitamins.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
