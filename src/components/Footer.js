// Footer.js
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Solutions Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Solutions</h3>
          <ul className="footer-links">
            <li><a href="/solutions/smart-planting">Smart Planting</a></li>
            <li><a href="/solutions/precision-irrigation">Precision Irrigation</a></li>
            <li><a href="/solutions/crop-monitoring">Crop Monitoring</a></li>
            <li><a href="/solutions/automated-harvesting">Automated Harvesting</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-contact-info">
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              <span>123 Farm Tech Ave, Agro Valley</span>
            </li>
            <li>
              <FaPhone className="footer-icon" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              <span>info@agrovision.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} AgroVision. All rights reserved.</p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
