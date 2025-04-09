import React, { useState, useEffect } from 'react';
import '../assets/loogo.jpeg';

// Import your images (replace with your actual image paths)
import slide1Bg from '../assets/Barak.jpeg';
import slide2Bg from '../assets/product.jpg';
import slide3Bg from '../assets/magnetic.jpg';
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Barak AgriTech',
      subtitle: 'Magnate Innovation',
      description: 'Transforming Industries with Technology. We provide cutting-edge solutions that drive the future of agriculture.',
      buttonText: 'Explore Our Solutions',
      bgImage: slide1Bg
    },
    {
      title: 'Water Treatment Devices',
      subtitle: 'Advanced Hydroponic Solutions',
      description: 'Revolutionary magnetic field technology for enhanced seed performance and optimized water treatment for sustainable agriculture.',
      buttonText: 'Discover Technology',
      bgImage: slide2Bg
    },
    {
      title: 'Magnetic Yield Alliance',
      subtitle: 'Next-Gen Agricultural Partnership',
      description: 'Harnessing the power of magnetic fields to boost crop yields and improve plant health through innovative scientific approaches.',
      buttonText: 'Learn More',
      bgImage: slide3Bg,
      buttonLink: 'https://www.magnetic.ae/'
    }
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
        >
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <h3>{slide.subtitle}</h3>
            <p>{slide.description}</p>
            {slide.buttonLink ? (
              <button className="slide-button" onClick={() => window.location.href = slide.buttonLink}>
                {slide.buttonText}
              </button>
            ) : (
              <button className="slide-button">{slide.buttonText}</button>
            )}
          </div>
        </div>
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
