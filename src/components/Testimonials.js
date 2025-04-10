import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    quote: "Yeh platform mujhe apne kisan dosto ke liye bohot madadgar laga. Mera kaam asaan ho gaya hai.",
    name: "Shahid Malik",
    role: "Farmer",
    image: "https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg",  // Placeholder for real image of a Pakistani male farmer
  },
  {
    quote: "Is website ki madad se hum apne kisan dosto tak zaroori maloomat asani se pohanchate hain.",
    name: "Zahid Hussain",
    role: "Agriculture Expert",
    image: "https://images.pexels.com/photos/4120637/pexels-photo-4120637.jpeg",  // Placeholder for real image of a Pakistani male in agricultural setting
  },
  {
    quote: "Yeh platform humare kisan community ke liye ek bohot bara faida hai, ab hum apni zameen ki behtari ke liye asani se plan kar sakte hain.",
    name: "Fahad Iqbal",
    role: "Agronomist",
    image: "https://i.pinimg.com/736x/2e/b1/bd/2eb1bd9aff9d3d30c7f140a9073ae8fa.jpg",  // Placeholder for real image of a Pakistani male agronomist
  },
  {
    quote: "Agriculture ki dunia mein itni development hui hai, is platform se hume har cheez ka update milta hai.",
    name: "Imran Shah",
    role: "Agricultural Entrepreneur",
    image: "https://media.istockphoto.com/id/174760305/photo/young-cheerful-asian-indian-businessman-sitting-in-cafeteria.jpg?s=612x612&w=0&k=20&c=UiR_EGw73ij6xvYk0IZ3Yy-eWLo34DvuICIWrrTsFus=",  // Placeholder for real image of a Pakistani male in a farm field
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  const { quote, name, role, image } = testimonialsData[currentIndex];

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div className="section-header">
          <h2 className="testimonial-title">
            Client <span className="highlight">Testimonials</span>
          </h2>
          <p className="testimonial-subtitle">Listen to our happy clients share their experiences.</p>
        </div>

        <div className="testimonial-box">
          <div className="quote-container">"{quote}"</div>
          <div className="client-info">
            <div className="client-image-container">
              <img src={image} alt={name} className="client-img" />
            </div>
            <div className="client-details">
              <div className="client-name">{name}</div>
              <div className="client-role">{role}</div>
            </div>
          </div>
        </div>

        <div className="nav-controls">
          <button className="nav-button" onClick={handlePrev}>❮</button>
          <div className="indicators">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`indicator-tag ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                ●
              </button>
            ))}
          </div>
          <button className="nav-button" onClick={handleNext}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
