import React, { useState, useEffect } from 'react';
import './Hero.css';

// Import your desktop slider images
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.png';
// Import your mobile slider images
import slider11 from '../assets/slider11.png';
import slider22 from '../assets/slider22.png';
import slider33 from '../assets/slider33.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Choose the appropriate slides based on the screen size
  const slides = isMobile
    ? [
        { bgImage: slider11, onClick: () => scrollToSection('casestudies') },
        { bgImage: slider22, onClick: () => scrollToSection('watertreatment') },
        { bgImage: slider33, onClick: () => window.open('https://www.magnetic.ae/', '_blank') },
      ]
    : [
        { bgImage: slider1, onClick: () => scrollToSection('casestudies') },
        { bgImage: slider2, onClick: () => scrollToSection('watertreatment') },
        { bgImage: slider3, onClick: () => window.open('https://www.magnetic.ae/', '_blank') },
      ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
          onClick={slide.onClick}
        ></div>
      ))}

      <button className="slider-nav prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="slider-nav next" onClick={nextSlide}>
        &gt;
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
