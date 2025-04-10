import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import BarakAgriLogo from '../assets/logo-removebg-preview.png';
import WaterImage from '../assets/water.jpg';
import MagneticImage from '../assets/qwerty.png';
import MobileBackground from '../assets/responsive.png'; // Add mobile background image for Slider 1
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024); // Check for desktop screen size
  const navigate = useNavigate();

  const slides = [
    {
      title: 'Magnetic Yield Alliance',
      subtitle: '',
      description:
        'Harnessing the power of magnetic fields to boost crop yields and improve plant health through innovative scientific approaches.',
      buttonText: 'Learn More',
      logo: '',
      link: '/about',
      background: MagneticImage,
      mobileBackground: MobileBackground, // Add mobile background specifically for slider 1
    },
    {
      title: 'Water Treatment Devices',
      subtitle: '',
      description:
        'Revolutionary magnetic field technology for enhanced seed performance and optimized water treatment for sustainable agriculture.',
      buttonText: 'Discover Technology',
      logo: '',
      link: '/watertreatment',
      background: WaterImage,
    },
    {
      title: 'Barak AgriTech',
      subtitle: 'Magnate Innovation',
      description:
        'Transforming Industries with Technology. We provide cutting-edge solutions that drive the future of agriculture.',
      buttonText: 'Explore Our Solutions',
      logo: BarakAgriLogo,
      link: '/casestudies',
      background: '',
      className: 'barak-slide'
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024); // Update the state based on screen size
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const { title, subtitle, description, buttonText, logo, link, background, mobileBackground, className } = slides[currentSlide];

  return (
    <section
      className={`hero-section ${className || ''}`}
      data-slide={currentSlide}
    >
      <div
        className="hero-slider"
        style={{
          backgroundImage: currentSlide === 0 && !isDesktop
            ? `url(${mobileBackground})` // For Slider 1 and mobile, use mobile background
            : `url(${background})`, // For all other cases, use the original slide background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {isDesktop && (
          <>
            <button className="slider-arrow left-arrow" onClick={goToPrevSlide}>
              <FaChevronLeft />
            </button>
            <button className="slider-arrow right-arrow" onClick={goToNextSlide}>
              <FaChevronRight />
            </button>
          </>
        )}
        <div className="slide">
          <div className="slide-content">
            {logo && (
              <div className="slide-logo">
                <img src={logo} alt="Slide Visual" className="hero-logo" />
              </div>
            )}
            <div className="slide-text">
              <h1 className="hero-title">{title}</h1>
              {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
              <p className="hero-description">{description}</p>
              {currentSlide === 0 ? (
                <a
                  className="explore-button"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
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
          <div
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
