import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-removebg-preview.png';

const SliderThree = () => (
  <section className="slider-section">
    <div className="slider-container">
      {/* Logo for both mobile and desktop */}
      <div className="slider-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="slider-content">
        <h1>Barak AgriTech</h1>
        <p>
          Barak AgriTech (Pvt).Ltd is a key player in Pakistan’s agricultural innovation landscape, bridging global technology from Magnetic Technologies LLC with local farming needs. Through the Magnetic Yield Alliance, it offers a zero-investment, high-return solution that boosts cotton, wheat, and other crop yields by 15-30%, reduces input costs, and enables farming with brackish water—delivering both economic and environmental benefits to farmers and the nation.
        </p>

        <Link to="/about">
          <button className="explore-btn">Explore Our Solutions</button>
        </Link>
      </div>
    </div>

    <style jsx="true">{`
      .slider-section {
        background: linear-gradient(135deg, rgb(0, 146, 61));
        min-height: 100vh;
        padding: 40px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .slider-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1200px;
        width: 100%;
        gap: 30px;
      }

      .slider-logo img {
        width: 100%;
        max-width: 250px;
        height: auto;
        filter: brightness(0) invert(1);
      }

      .slider-content {
        background-color: rgba(255, 255, 255, 0.95);
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .slider-content h1 {
        font-size: clamp(28px, 6vw, 48px);
        font-weight: 700;
        margin-bottom: 20px;
        color: #2c3e50;
        text-transform: uppercase;
      }

      .slider-content p {
        font-size: clamp(16px, 3vw, 20px);
        color: #555;
        line-height: 1.7;
        max-width: 700px;
        margin-bottom: 25px;
      }

      .explore-btn {
        background-color: #2c3e50;
        color: #fff;
        padding: 14px 35px;
        border-radius: 50px;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        border: none;
        text-transform: uppercase;
        transition: all 0.3s ease-in-out;
      }

      .explore-btn:hover {
        background-color: #f39c12;
        transform: scale(1.05);
      }

      /* Desktop layout */
      @media (min-width: 1024px) {
  .slider-container {
    flex-direction: row;
    align-items: center;
    gap: 60px;
    padding: 0 60px;
    margin: 0 auto;
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
    max-width: 450px; /* 👈 Increased for laptop screens */
  }
}


      /* Mobile tweaks */
      @media (max-width: 767px) {
        .slider-logo img {
          max-width: 200px;
        }

        .slider-content {
          padding: 20px;
        }

        .explore-btn {
          padding: 12px 25px;
          font-size: 14px;
        }
      }
    `}</style>
  </section>
);

export default SliderThree;
