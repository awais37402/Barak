// Footer.js
import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/magneticyieldalliance">Magnetic Yield Alliance</a></li>

            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-contact-info">
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              <span>Plot A-105, Minar Road, Basti Lala Rukh, POF, Wah Cantt</span>
            </li>
            <li>
              <FaPhone className="footer-icon" />
              <span>+92 307 7950777</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© {currentYear} Barak AgriTech (Pvt) Ltd.. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
