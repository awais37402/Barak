// Footer.js
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="footer-heading">Solutions</h3>
          <ul className="footer-links">
            <li><a href="/solutions/smart-planting">Smart Planting</a></li>
            <li><a href="/solutions/precision-irrigation">Precision Irrigation</a></li>
            <li><a href="/solutions/crop-monitoring">Crop Monitoring</a></li>
            <li><a href="/solutions/automated-harvesting">Automated Harvesting</a></li>
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
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
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <p>&copy; {currentYear} AgroVision. All rights reserved.</p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
