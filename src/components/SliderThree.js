import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-removebg-preview.png';

const SliderThree = () => (
  <section className="slider-section">
    <div className="slider-container">
      {/* Logo on top for mobile */}
      <div className="slider-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="slider-content">
        <h1>Barak AgriTech</h1>
        <p>
          Transforming Industries with Technology. We provide cutting-edge
          solutions that drive the future of agriculture.
        </p>
        
        <Link to="/about">
          <button className="explore-btn">Explore Our Solutions</button>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .slider-section {
        background: linear-gradient(135deg, #6c5ce7, #a29bfe);
        min-height: 400px;
        height: 100vh;
        padding: 60px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .slider-container {
        max-width: 1200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
      }

      .slider-logo {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .slider-logo img {
        width: 100%;
        max-width: 300px;
        height: auto;
        filter: brightness(0) invert(1);
      }

      .slider-content {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 30px;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 20px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
      }

      .slider-content h1 {
        font-size: clamp(30px, 6vw, 50px);
        font-weight: 700;
        margin-bottom: 20px;
        color: #2c3e50;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      .slider-content p {
        font-size: clamp(16px, 3vw, 22px);
        line-height: 1.7;
        margin-bottom: 20px;
        color: #555;
        max-width: 650px;
      }

      .explore-btn {
        background-color: #2c3e50;
        color: #fff;
        padding: 15px 40px;
        border-radius: 50px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        font-size: clamp(14px, 2.5vw, 18px);
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }

      .explore-btn:hover {
        background-color: #f39c12;
        color: #fff;
        transform: scale(1.1);
      }

      /* Desktop layout - modified for equal margins */
      @media (min-width: 1024px) {
        .slider-container {
          flex-direction: row;
          align-items: center;
          gap: 60px;
          padding: 0 60px; /* Equal padding on both sides */
          margin: 0 auto; /* Center the container */
        }

        .slider-content {
          flex: 1;
          align-items: flex-start;
          text-align: left;
        }

        .slider-logo {
          flex: 1;
          justify-content: flex-end;
        }

        .slider-logo img {
          max-width: 350px;
        }
      }

      /* Mobile-specific adjustments - unchanged */
      @media (max-width: 767px) {
        .slider-section {
          padding: 20px;
        }

        .slider-container {
          gap: 15px;
        }

        .slider-logo {
          margin: 0;
        }

        .slider-logo img {
          max-width: 200px;
        }

        .slider-content {
          padding: 20px;
        }

        .slider-content h1 {
          margin: 10px 0;
          font-size: 28px;
        }

        .slider-content p {
          margin: 10px 0 15px;
          font-size: 16px;
          line-height: 1.5;
        }

        .explore-btn {
          padding: 12px 30px;
          font-size: 14px;
        }
      }
    `}</style>
  </section>
);

export default SliderThree;