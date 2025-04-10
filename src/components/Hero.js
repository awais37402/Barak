import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import BarakAgriLogo from '../assets/logo-removebg-preview.png';
import WaterImage from '../assets/water.jpg';
import MagneticImage from '../assets/bg2.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const navigate = useNavigate();

  const slides = [
    {
      title: 'Barak AgriTech',
      subtitle: 'Magnate Innovation',
      description:
        'Transforming Industries with Technology. We provide cutting-edge solutions that drive the future of agriculture.',
      buttonText: 'Explore Our Solutions',
      logo: BarakAgriLogo,
      link: '/casestudies',
      background: '', // No background image
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
      title: 'Magnetic Yield Alliance',
      subtitle: '',
      description:
        'Harnessing the power of magnetic fields to boost crop yields and improve plant health through innovative scientific approaches.',
      buttonText: 'Learn More',
      logo: '',
      link: 'https://www.magnetic.ae/',
      background: MagneticImage,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
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
      goToNextSlide();
    } else if (diff < -50) {
      goToPrevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const { title, subtitle, description, buttonText, logo, link, background } = slides[currentSlide];

  return (
    <section
      className="hero-section"
      data-slide={currentSlide}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="hero-slider"
        style={{
          backgroundImage: background
            ? `url(${background})`
            : currentSlide === 0
            ? 'linear-gradient(135deg, #f0f0f0, #dfe9f3)'
            : 'none',
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
              {currentSlide === 2 ? (
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