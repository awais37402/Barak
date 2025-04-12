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
    { to: '/about', label: 'About Us' },
    { to: '/magneticyieldalliance', label: 'Magnetic Yield Alliance' },
    { to: 'https://www.magnetic.ae/', label: 'Magnetic.ae', external: true },
    { to: '/casestudies', label: 'Case Studies' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo and Name */}
          <Link
  to="/"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  style={{ textDecoration: 'none' }} // 👈 remove underline
>
  <div
    className="logo-container"
    style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
  >
    <img
      src={logo}
      alt="Barak AgriTech Logo"
      className="logo-img"
      style={{ height: '70px', width: '70px' }}
    />
    <span
      className="logo-text"
      style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: '1.25rem',
        color: '#1e3f20',
        letterSpacing: '-0.5px',
        textDecoration: 'none' // 👈 also make sure the span has no underline
      }}
    >
      Barak AgriTech
    </span>
  </div>
</Link>


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

          {/* Hamburger Menu */}
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line hamburger-line-1"></span>
            <span className="hamburger-line hamburger-line-2"></span>
            <span className="hamburger-line hamburger-line-3"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-list">
            {navLinks.map((link, index) => (
              <li 
                key={link.to} 
                className="mobile-nav-item"
                style={{ transitionDelay: `${isMenuOpen ? index * 0.1 : 0}s` }}
              >
                {link.external ? (
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-nav-link"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    to={link.to} 
                    className={`mobile-nav-link ${location.pathname === link.to ? 'active' : ''}`}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="mobile-nav-item">
              <Link 
                to="/contact" 
                className="mobile-contact-button"
                onClick={toggleMenu}
              >
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