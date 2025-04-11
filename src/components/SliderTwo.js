import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import waterImage from '../assets/water.jpg'; // Import your image

const SliderTwo = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click and navigate
  const handleButtonClick = () => {
    navigate('/Magneticwater'); // Navigate to WaterTreatment.js
  };

  return (
    <section style={{
      color: '#fff',
      padding: '80px 20px',
      position: 'relative',
      textAlign: 'center',
      background: 'linear-gradient(120deg, rgba(0, 65, 106, 1), rgba(228, 229, 230, 1))',
      minHeight: '400px',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      boxSizing: 'border-box',
      marginTop: '50px', // Added margin-top for spacing
    }}>

      <div className="slider-content" style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
      }}>
        {/* Image First for Mobile */}
        <div className="image-container" style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
        }}>
          <img
            src={waterImage}
            alt="Water Treatment Devices"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '15px',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>

        {/* Text Content */}
        <div className="text-content" style={{ flex: 1, textAlign: 'left', paddingLeft: '30px' }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '600',
            marginBottom: '15px',
            lineHeight: '1.4',
            letterSpacing: '1px',
            color: '#000', // Change text color to black
          }}>
            Water Treatment Devices
          </h1>
          <p style={{
            fontSize: '18px',
            maxWidth: '650px',
            margin: '0 auto 30px',
            lineHeight: '1.7',
            color: '#000', // Change text color to black
          }}>
            Revolutionary magnetic field technology for enhanced seed performance and optimized water treatment for sustainable agriculture.
          </p>
          <button style={{
            backgroundColor: '#00416A',
            color: '#fff',
            padding: '15px 35px',
            borderRadius: '30px',
            fontWeight: '600',
            cursor: 'pointer',
            border: 'none',
            fontSize: '18px',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
          }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#E4E5E6';
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#00416A';
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
            onClick={handleButtonClick} // Add click event to handle button click
          >
            Discover Technology
          </button>
        </div>
      </div>

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .slider-content {
              flex-direction: column !important;
            }

            .text-content {
              padding-left: 0 !important;
              text-align: center !important;
            }

            .text-content h1 {
              font-size: 28px !important;
            }

            .text-content p {
              font-size: 16px !important;
              margin: 0 auto 20px !important;
              max-width: 90% !important;
            }

            .image-container {
              margin-bottom: 20px !important;
              order: -1;
            }

            .image-container img {
              max-width: 100%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default SliderTwo;
