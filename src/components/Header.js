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

  const leftNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/casestudies', label: 'Case Studies' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        
        {/* Left: Logo + Name */}
        <div className="left-logo">
          <Link to="/" className="logo-link" aria-label="Burak AgriTech Home">
            <img src={logo} alt="Burak AgriTech Logo" className="logo-img" />
            <span className="logo-text">Barak AgriTech</span>
          </Link>
        </div>

        {/* Right: Nav + Contact + Hamburger */}
        <div className="right-side">
          <nav className="desktop-nav">
            <ul className="nav-list">
              {leftNavLinks.map((link) => (
                <li key={link.to} className={`nav-item ${location.pathname === link.to ? 'active' : ''}`}>
                  <Link to={link.to} className="nav-link">
                    <span className="link-text">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link to="/contact" className="contact-button">
            Contact
          </Link>

          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          {leftNavLinks.map((link) => (
            <li key={link.to} className="mobile-nav-item">
              <Link to={link.to} className="mobile-nav-link">
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mobile-nav-item">
            <Link to="/contact" className="mobile-nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
