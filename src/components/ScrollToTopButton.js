import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';  // Import CSS for the button

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Show button after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const reverseScroll = () => {
    // Use a scroll effect that creates the illusion of reverse scroll
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect for the reverse scroll
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={reverseScroll}  // Trigger reverse scroll
        className="scroll-to-top-button"
      >
        <span>↑</span>
      </button>
    )
  );
};

export default ScrollToTopButton;
