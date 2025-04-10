import React, { useState, useEffect } from 'react';
import './Hero.css';
import BarakAgriLogo from '../assets/logo.png'; // Update the path as necessary

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Barak AgriTech',
      subtitle: 'Magnate Innovation',
      description: 'Transforming Industries with Technology. We provide cutting-edge solutions that drive the future of agriculture.',
      buttonText: 'Explore Our Solutions',
      logo: BarakAgriLogo,
    },
    {
      title: 'GreenTech Solutions',
      subtitle: 'Innovative Farming Technology',
      description: 'Harnessing sustainable practices to promote a greener future. Join us in revolutionizing agriculture.',
      buttonText: 'Learn More',
      logo: 'path_to_logo.png', // Add the logo for the second slider here
    },
    {
      title: 'Farmers\' Revolution',
      subtitle: 'Smart Farming for the Future',
      description: 'Empowering farmers with digital solutions that increase productivity and sustainability.',
      buttonText: 'Get Started',
      logo: 'path_to_logo.png', // Add the logo for the third slider here
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Clean up interval on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const touchEnd = e.touches[0].clientX;
    if (touchStart - touchEnd > 50) {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTouchStart(null);
    } else if (touchStart - touchEnd < -50) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTouchStart(null);
    }
  };

  const { title, subtitle, description, buttonText, logo } = slides[currentSlide];
  const [touchStart, setTouchStart] = useState(null);

  return (
    <section className="hero-section" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div className="hero-slider">
        <div className="slide">
          <div className="slide-content">
            <div className="slide-logo">
              <img src={logo} alt="Company Logo" className="hero-logo" />
            </div>
            <div className="slide-text">
              <h1 className="hero-title">{title}</h1>
              <h2 className="hero-subtitle">{subtitle}</h2>
              <p className="hero-description">{description}</p>
              <button className="explore-button">{buttonText}</button>
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
