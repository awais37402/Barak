import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import farmer1 from '../assets/img1.jpg';
import farmer2 from '../assets/img2.jpg';
import farmer3 from '../assets/img3.jpg';

const testimonials = [
  {
    name: 'Saniya Mirza',
    role: 'Vegetable Farmer, KPK',
    image: farmer1,
    quote: 'The platform\'s insights have revolutionized my farming techniques.',
  },
  {
    name: 'Haris Khan',
    role: 'Wheat Farmer, Punjab',
    image: farmer2,
    quote: 'Timely updates have significantly boosted my crop yields.',
  },
  {
    name: 'Ayeza Batool',
    role: 'Rice Farmer, Sindh',
    image: farmer3,
    quote: 'Learning about better pesticide practices saved me money.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const { name, role, image, quote } = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="section-header">
          <h2 className="testimonial-title">
            What Our <span className="highlight">Farmers</span> Say
          </h2>
          <p className="testimonial-subtitle">Success stories from Pakistani agriculture</p>
        </div>

        <div className={`testimonial-box ${isAnimating ? 'fade' : ''}`}>
          <div className="quote-container">
            <div className="quote-icon">"</div>
            <p className="quote">"{quote}"</p>
          </div>
          
          <div className="client-info">
            <div className="client-image-container">
              <img 
                src={image} 
                alt={name} 
                className="client-img"
                loading="lazy"
              />
              <div className="image-border"></div>
            </div>
            <div className="client-details">
              <h4 className="client-name">{name}</h4>
              <p className="client-role">{role}</p>
            </div>
          </div>

          <div className="nav-controls">
            <button 
              className="nav-button prev"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="nav-button next"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;