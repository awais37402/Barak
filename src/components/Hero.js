import React, { useState, useEffect } from 'react';
import SliderOne from './SliderOne';
import SliderTwo from './SliderTwo';
import SliderThree from './SliderThree';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startTouch, setStartTouch] = useState(0);

  const sliders = [
    <SliderOne key="1" />,
    <SliderTwo key="2" />,
    <SliderThree key="3" />
  ];

  // Move to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliders.length);
  };

  // Move to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliders.length) % sliders.length);
  };

  // Auto slide after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5000ms = 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Handle touch start event
  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    setStartTouch(touchStart);
  };

  // Handle touch end event for swipe detection
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (startTouch - touchEnd > 50) {
      nextSlide(); // Swipe left -> next slide
    } else if (touchEnd - startTouch > 50) {
      prevSlide(); // Swipe right -> previous slide
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {sliders[currentSlide]}
      <div style={navStyles.nav}>
        <button style={navStyles.btn} onClick={prevSlide}>
          <span style={navStyles.icon}>❮</span>
        </button>
        <button style={navStyles.btn} onClick={nextSlide}>
          <span style={navStyles.icon}>❯</span>
        </button>
      </div>
    </div>
  );
};

const navStyles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  btn: {
    background: 'transparent',
    border: 'none',
    borderRadius: '50%',
    padding: '15px',
    fontSize: '24px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  icon: {
    fontSize: '30px',
    color: '#333',
  },
};

export default Hero;
