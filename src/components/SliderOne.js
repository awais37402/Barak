import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SliderOne.css';
import logo from '../assets/logo-removebg-preview.png';
import brain from '../assets/Magnetic_Yield_Alliance__4.png';

const SliderOne = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/magneticyieldalliance');
  };

  return (
    <section className="slider-section">
      <div className="slider-content">
        <h1 className="slider-heading">Magnetic Yield Alliance</h1>
        <p className="slider-text">
          Harnessing the power of magnetic fields to boost crop yields
          and improve plant health through innovative scientific approaches.
        </p>
        <button className="slider-button" onClick={handleLearnMore}>
          Learn More
        </button>
      </div>
      <img src={brain} alt="brain tech" className="brain-image" />
      <img src={logo} alt="Barak AgriTech" className="logo-image" />
    </section>
  );
};

export default SliderOne;
