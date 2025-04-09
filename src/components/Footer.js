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
import { motion } from 'framer-motion';
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
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
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
          className="footer-section social-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>&copy; {currentYear} AgroVision. All rights reserved.</p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/cookies">Cookie Policy</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
