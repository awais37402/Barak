import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/magneticyieldalliance', label: 'Magnetic Yield Alliance' },
    { to: '/about', label: 'About Us' },
    { to: 'https://www.magnetic.ae/', label: 'Magnetic.ae', external: true },
    { to: '/casestudies', label: 'Case Studies' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo and Name */}
          <div className="logo-container">
            <Link to="/" className="logo-link" aria-label="Barak AgriTech Home">
              <img src={logo} alt="Barak AgriTech Logo" className="logo-img" />
              <span className="logo-text">Barak AgriTech</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.to} className={`nav-item ${location.pathname === link.to ? 'active' : ''}`}>
                  {link.external ? (
                    <a
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                    >
                      <span className="link-text">{link.label}</span>
                      <span className="link-underline"></span>
                    </a>
                  ) : (
                    <Link to={link.to} className="nav-link">
                      <span className="link-text">{link.label}</span>
                      <span className="link-underline"></span>
                    </Link>
                  )}
                </li>
              ))}
              <li className="nav-item">
                <Link to="/contact" className="contact-button">
                  <span>Contact</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Unique Hamburger for Mobile */}
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.to} className="mobile-nav-item">
                {link.external ? (
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-nav-link"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.to} className="mobile-nav-link">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="mobile-nav-item">
              <Link to="/contact" className="mobile-contact-button">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
