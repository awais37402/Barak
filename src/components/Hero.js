import React, { useState, useEffect } from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';
import WaterTreatment from '../pages/WaterTreatment';

// Import your images
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.png';
import slider11 from '../assets/slider11.png';
import slider22 from '../assets/slider22.png';
import slider33 from '../assets/slider33.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [showWaterTreatment, setShowWaterTreatment] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = isMobile
    ? [
        { bgImage: slider11, action: () => navigate('/CaseStudies') },
        { bgImage: slider22, action: () => setShowWaterTreatment(true) },
        { bgImage: slider33, action: () => window.open('https://www.magnetic.ae/', '_blank') }
      ]
    : [
        { bgImage: slider1, action: () => navigate('/CaseStudies') },
        { bgImage: slider2, action: () => setShowWaterTreatment(true) },
        { bgImage: slider3, action: () => window.open('https://www.magnetic.ae/', '_blank') }
      ];

  const nextSlide = () => {
    setIsInteracting(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsInteracting(false), 100);
  };

  const prevSlide = () => {
    setIsInteracting(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsInteracting(false), 100);
  };

  const goToSlide = (index) => {
    setIsInteracting(true);
    setCurrentSlide(index);
    setTimeout(() => setIsInteracting(false), 100);
  };

  const handleSlideClick = () => {
    if (!isInteracting) {
      slides[currentSlide].action();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
            onClick={handleSlideClick}
          />
        ))}

        <button 
          className="slider-nav prev" 
          onClick={prevSlide}
          onMouseDown={() => setIsInteracting(true)}
          aria-label="Previous slide"
        />
        <button 
          className="slider-nav next" 
          onClick={nextSlide}
          onMouseDown={() => setIsInteracting(true)}
          aria-label="Next slide"
        />

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              onMouseDown={() => setIsInteracting(true)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {showWaterTreatment && (
        <WaterTreatment onClose={() => setShowWaterTreatment(false)} />
      )}
    </>
  );
};

export default Hero;