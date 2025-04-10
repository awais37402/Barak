import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import BarakAgriLogo from '../assets/logo1.png';
import ProductImage from '../assets/product.jpg';
import MagneticImage from '../assets/magnetic.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const navigate = useNavigate();

  const slides = [
    {
      title: 'Barak AgriTech',
      subtitle: 'Magnate Innovation',
      description:
        'Transforming Industries with Technology. We provide cutting-edge solutions that drive the future of agriculture.',
      buttonText: 'Explore Our Solutions',
      logo: BarakAgriLogo,
      link: '/casestudies'
    },
    {
      title: 'Water Treatment Devices',
      subtitle: '',
      description:
        'Revolutionary magnetic field technology for enhanced seed performance and optimized water treatment for sustainable agriculture.',
      buttonText: 'Discover Technology',
      logo: ProductImage,
      link: '/watertreatment'
    },
    {
      title: 'Magnetic Yield Alliance',
      subtitle: '',
      description:
        'Harnessing the power of magnetic fields to boost crop yields and improve plant health through innovative scientific approaches.',
      buttonText: 'Learn More',
      logo: MagneticImage,
      link: 'https://www.magnetic.ae/'
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      // Swiped left
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (diff < -50) {
      // Swiped right
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const { title, subtitle, description, buttonText, logo, link } = slides[currentSlide];

  return (
    <section
      className="hero-section"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-slider">
        <div className="slide">
          <div className="slide-content">
            <div className="slide-logo">
              <img src={logo} alt="Slide Visual" className="hero-logo" />
            </div>
            <div className="slide-text">
              <h1 className="hero-title">{title}</h1>
              <h2 className="hero-subtitle">{subtitle}</h2>
              <p className="hero-description">{description}</p>
              {currentSlide === 2 ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="explore-button"
                  style={{ textDecoration: 'none' }}
                >
                  {buttonText}
                </a>
              ) : (
                <button className="explore-button" onClick={() => navigate(link)}>
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
