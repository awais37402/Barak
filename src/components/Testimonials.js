import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Ahmed Ali',
    role: 'Wheat Farmer, Punjab',
    image: 'https://images.pexels.com/photos/29898773/pexels-photo-29898773.jpeg',
    quote: 'Iss platform ne meri farming techniques ko bilkul change kar diya hai. Bahut faida hua hai!',
  },
  {
    name: 'Bilal Khan',
    role: 'Rice Farmer, Sindh',
    image: 'https://images.pexels.com/photos/29898836/pexels-photo-29898836.jpeg',
    quote: 'Timely updates ki wajah se meri crops ki yield double ho gayi hai. Bohat shukriya!',
  },
  {
    name: 'Kashif Mehmood',
    role: 'Cotton Farmer, Balochistan',
    image: 'https://images.pexels.com/photos/29898846/pexels-photo-29898846.jpeg',
    quote: 'Pesticide ke behtareen tareeqe jaan kar kaafi paisay bachaye. Yeh platform kamaal ka hai!',
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
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToTestimonial = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const { name, role, image, quote } = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="section-header">
          <h2 className="testimonial-title">
            What Our <span className="highlight">Farmers</span> Say
          </h2>
          <p className="testimonial-subtitle">Pakistan ke kisano ki kahaniyan</p>
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="indicators">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  className={`indicator-tag ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Testimonial from ${testimonial.name}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              className="nav-button next"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
