import React, { useState, useEffect } from 'react';
import './Hero.css';

// Import your desktop slider images
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.png';
// Import your mobile slider images
import slider11 from '../assets/slider11.png';
import slider22 from '../assets/slider22.png';
import slider33 from '../assets/slider33.png';  // Import slider33 for mobile screens

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set threshold for mobile screens
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Run on initial load

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Choose the appropriate slides based on the screen size
  const slides = isMobile
    ? [
        { bgImage: slider11 },  // Mobile image 1
        { bgImage: slider22 },  // Mobile image 2
        { bgImage: slider33 },  // Mobile image 3
      ]
    : [
        { bgImage: slider1 },
        { bgImage: slider2 },
        { bgImage: slider3 },
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

