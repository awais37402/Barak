import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/four.jpg';
import five from '../assets/five.jpg';
import six from '../assets/six.jpg';
import seven from '../assets/seven.jpg';
import eight from '../assets/eight.jpg';

const images = [one, two, three, four, five, six, seven, eight];
const IMAGES_PER_SLIDE = 3;

const Gallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getImagesPerSlide = useCallback(() => {
    if (windowWidth < 600) return 1;
    if (windowWidth < 992) return 2;
    return IMAGES_PER_SLIDE;
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setStartIndex(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setStartIndex((prev) => {
      const nextIndex = prev + getImagesPerSlide();
      return nextIndex < images.length ? nextIndex : prev;
    });
  }, [getImagesPerSlide]);

  const prevSlide = useCallback(() => {
    setStartIndex((prev) => {
      const prevIndex = prev - getImagesPerSlide();
      return prevIndex >= 0 ? prevIndex : prev;
    });
  }, [getImagesPerSlide]);

  const openModal = useCallback((index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalImageIndex(null);
    document.body.style.overflow = 'visible';
  }, []);

  const nextModal = useCallback(() => {
    setModalImageIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevModal = useCallback(() => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextModal();
      if (e.key === 'ArrowLeft') prevModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeModal, nextModal, prevModal]);

  const currentImagesPerSlide = getImagesPerSlide();
  const visibleImages = images.slice(startIndex, startIndex + currentImagesPerSlide);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery">
        <button
          className="nav-btn prev"
          onClick={prevSlide}
          disabled={startIndex === 0}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <div className="gallery-grid">
          {visibleImages.map((img, idx) => (
            <div key={startIndex + idx} className="gallery-item">
              <img
                src={img}
                alt={`Gallery item ${startIndex + idx + 1}`}
                className="gallery-grid-image"
                onClick={() => openModal(startIndex + idx)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <button
          className="nav-btn next"
          onClick={nextSlide}
          disabled={startIndex + currentImagesPerSlide >= images.length}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>

      {isModalOpen && modalImageIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="modal-content">
              <img
                src={images[modalImageIndex]}
                alt={`Modal item ${modalImageIndex + 1}`}
                className="modal-image"
              />
              <div className="modal-nav">
                <button
                  className="modal-nav-btn"
                  onClick={prevModal}
                  aria-label="Previous image"
                >
                  &#10094;
                </button>
                <span className="image-counter">
                  {modalImageIndex + 1} / {images.length}
                </span>
                <button
                  className="modal-nav-btn"
                  onClick={nextModal}
                  aria-label="Next image"
                >
                  &#10095;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
