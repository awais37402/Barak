import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faChevronRight, faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

// Import actual image files (adjust paths to match your project structure)
import logo from '../assets/logo-removebg-preview.png';
import brain from '../assets/Magnetic_Yield_Alliance__4.png';
import water from '../assets/water.jpg';
import product from '../assets/seven.jpg';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/four.jpg';
import five from '../assets/five.jpg';
import six from '../assets/six.jpg';
import seven from '../assets/seven.jpg';
import eight from '../assets/eight.jpg';

// Create an images object with the imported files
const images = {
  logo,
  brain,
  water,
  product,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight
};

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <WaterBenefits />
      <WaterTreatment />
      <SurveyDownload />
      <StatsSection />
      <Gallery />
    </div>
  );
};

// Hero Component with Sliders
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startTouch, setStartTouch] = useState(0);
  const sliderRef = useRef(null);

  const sliders = [
    <SliderThree key="3" />,
    <SliderOne key="1" />,
    <SliderTwo key="2" />
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliders.length);
  }, [sliders.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + sliders.length) % sliders.length);
  }, [sliders.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleTouchStart = (e) => setStartTouch(e.touches[0].clientX);
  
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (startTouch - touchEnd > 50) nextSlide();
    else if (touchEnd - startTouch > 50) prevSlide();
  };

  return (
    <div 
      className="hero-container" 
      onTouchStart={handleTouchStart} 
      onTouchEnd={handleTouchEnd}
      ref={sliderRef}
    >
      {sliders[currentSlide]}
      <div className="hero-nav">
        <button onClick={prevSlide} aria-label="Previous slide">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={nextSlide} aria-label="Next slide">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="slide-indicators">
        {sliders.map((_, index) => (
          <div 
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

const SliderOne = () => {
  return (
    <div className="slider-one">
      <div className="slider-content">
        <h1>Magnetic Yield Alliance</h1>
        <p>
          Harnessing the power of magnetic fields to boost crop yields
          and improve plant health through innovative scientific approaches.
        </p>
        <button className="slider-button">Learn More</button>
      </div>
      <img src={images.brain} alt="brain tech" className="brain-image" />
      <img src={images.logo} alt="Barak AgriTech" className="logo-image" />
    </div>
  );
};

const SliderTwo = () => {
  return (
    <div className="slider-two">
      <div className="slider-container">
        <div className="image-container">
          <img src={images.water} alt="Water Treatment Devices" />
        </div>
        <div className="text-content">
          <h1>Water Treatment Devices</h1>
          <p>
            Revolutionary magnetic field technology for enhanced seed performance 
            and optimized water treatment for sustainable agriculture.
          </p>
          <button className="discover-button">Discover Technology</button>
        </div>
      </div>
    </div>
  );
};

const SliderThree = () => {
  return (
    <div className="slider-three">
      <div className="slider-container">
        <div className="slider-logo">
          <img src={images.logo} alt="Barak AgriTech Logo" />
        </div>
        <div className="slider-content">
          <h1>Barak AgriTech</h1>
          <p>
          Barak AgriTech (Pvt).Ltd is a key player in Pakistan’s agricultural innovation landscape, bridging global technology from Magnetic Technologies LLC with local farming needs. Through the Magnetic Yield Alliance, it offers a zero-investment, high-return solution that boosts cotton, wheat, and other crop yields by 15-30%, reduces input costs, and enables farming with brackish water—delivering both economic and environmental benefits to farmers and the nation.
          </p>
          <button className="explore-btn">Explore Our Solutions</button>
        </div>
      </div>
    </div>
  );
};

// Water Treatment Component
const WaterTreatment = () => {
  const [expanded, setExpanded] = useState(false);
  const benefitsRef = useRef(null);
  
  const benefits = [
    "Seed germination rates achieve 80-100%",
    "Accelerates fertility",
    "Expedite protein formation",
    "Provides internal energy that boosts metabolism",
    "Boosts ion mobility and uptake by seeds",
    "Enhances resistance to diseases",
    "Improves resilience against challenging environmental conditions",
    "Accelerates the protein formation process in plants",
    "Reduces seed sowing costs by 30-50%",
    "Facilitates earlier crop ripening",
    "Increases yield per acre"
  ];

  const toggleExpand = () => {
    setExpanded(!expanded);
    if (!expanded && benefitsRef.current) {
      benefitsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="water-treatment">
      <div className="treatment-container">
        <div className="treatment-header">
          <h2>Seed Treatment Technology</h2>
          <p>Revolutionary magnetic field technology for enhanced seed performance</p>
        </div>

        <div className="treatment-content">
          <div className="treatment-image">
            <img src={images.product} alt="Seed Treatment Technology" />
          </div>

          <div className="treatment-details">
            <p className="treatment-description">
              Our cutting-edge seed treatment technology not only reduces the expenditure 
              on sowing materials by 30-50%, but it also facilitates earlier harvests. 
              Extensive research across various regions has yielded consistently 
              promising results.
              <span className="highlighted-benefits">
                Improved seed quality • Faster development • Enhanced vitality
              </span>
            </p>

            <div className={`treatment-benefits ${expanded ? 'expanded' : ''}`} ref={benefitsRef}>
              <h3>Key Benefits:</h3>
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <div key={index} className="treatment-benefit-item">
                    <div className="treatment-benefit-icon">
                      <FontAwesomeIcon icon={faSeedling} />
                    </div>
                    <span className="treatment-benefit-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="toggle-benefits" onClick={toggleExpand}>
              {expanded ? 'Show Less' : 'Show All Benefits'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Water Benefits Component
const WaterBenefits = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: "🌱",
      title: "Planting Stage",
      description: "Our seed treatment technology ensures optimal germination rates (90–100%) and stronger initial growth, reducing seed costs by 30–50%.",
    },
    {
      icon: "💧",
      title: "Irrigation",
      description: "Water treatment enables use of brackish water (up to 8000ppm) while preventing salt buildup in irrigation systems.",
    },
    {
      icon: "📈",
      title: "Growth Period",
      description: "Enhances nutrient uptake (P, K, N, Fe) leading to 15–50% increased yields and stronger disease resistance.",
    },
    {
      icon: "🌿",
      title: "Soil Health",
      description: "Improves soil aeration and structure over time, reducing fertilizer requirements by up to 50% while maintaining productivity.",
    },
  ];

  return (
    <section className="water-benefits" ref={sectionRef}>
      <div className={`how-it-works ${inView ? 'animate' : ''}`}>
        <div className="water-drop-animation">
          <div className="drop"></div>
          <div className="ripple"></div>
          <div className="ripple delay-1"></div>
          <div className="ripple delay-2"></div>
        </div>
        <div className="text-content">
          <h3>The Science Behind Our Solution</h3>
          <p>
            Magnetic devices use powerful magnets to improve water and seeds. They break water 
            into smaller clusters for better soil absorption and activate seeds for faster 
            growth—saving water, boosting yields, and enabling farming with saline water, 
            all naturally.
          </p>
        </div>
      </div>

      <div className="water-background"></div>

      <div
  className="section-header"
  style={{
    textAlign: 'center',
    marginBottom: '40px',
    padding: '20px',
    color: 'white',
  }}
>
  <header
    className={inView ? 'animate' : ''}
    style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s ease-in-out',
    }}
  >
    <h3 style={{ fontSize: '2.2rem', fontWeight: '700', lineHeight: '1.4', color: 'white' }}>
      How our <mark style={{ background: 'none', color: '#00ffd5', fontWeight: 'bold' }}>Water Treatment</mark>{' '}
      Transforms Agriculture
    </h3>
  </header>

  <article
    className={`section-description ${inView ? 'animate' : ''}`}
    style={{
      maxWidth: '800px',
      margin: '0 auto',
      color: 'white',
      fontSize: '1.1rem',
      lineHeight: '1.7',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s ease-in-out',
    }}
  >
    <p>
      Revolutionary technology that supports every stage of modern agriculture – from planting to harvest.
    </p>
  </article>
</div>


      <div className="benefit-cards-container">
        <div className="benefit-cards">
          {benefits.map((item, index) => (
            <div key={index} className={`card ${inView ? 'animate' : ''}`} 
                 style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-circle">
                    <span className="icon">{item.icon}</span>
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <div className="card-back">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const statsData = [
      { number: 12500, isPercentage: false },
      { number: 35, isPercentage: true },
      { number: 200, isPercentage: false },
      { number: 24, isPercentage: false, suffix: '/7' }
    ];

    statsData.forEach((stat, idx) => {
      let start = 0;
      const end = stat.number;
      const duration = 1000;
      const increment = Math.ceil(end / 100);
      const stepTime = Math.floor(duration / (end / increment));

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }

        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[idx] = start;
          return newCounts;
        });
      }, stepTime);
    });
  }, [inView]);

  const statsLabels = ['Acres Managed', 'Average Yield Increase', 'Happy Farmers', 'Support Available'];

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        {counts.map((count, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-number">
              {idx === 1 ? `${count}%` : `${count.toLocaleString()}${idx === 3 ? '/7' : ''}`}
            </div>
            <div className="stat-label">{statsLabels[idx]}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Survey Download Component
const SurveyDownload = () => {
  return (
    <motion.div 
      className="survey-download-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="survey-download-title">
        Magnetic Yield Alliance <br /> Survey Form
      </h2>
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSc7NOvWuB_NC3E9bYriVLQopmFNHJDAOI0vnqKIT5u9qvXwyg/viewform" 
        target="_blank" 
        rel="noopener noreferrer"
        className="download-button"
      >
        Fill Out Survey Form
      </a>
    </motion.div>
  );
};

// Gallery Component
const Gallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const galleryRef = useRef(null);

  const getImagesPerSlide = useCallback(() => {
    if (windowWidth < 600) return 1;
    if (windowWidth < 992) return 2;
    return 3;
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
    setStartIndex(prev => {
      const nextIndex = prev + getImagesPerSlide();
      return nextIndex < Object.values(images).length ? nextIndex : prev;
    });
  }, [getImagesPerSlide]);

  const prevSlide = useCallback(() => {
    setStartIndex(prev => {
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
    setModalImageIndex(prev => (prev + 1) % Object.values(images).length);
  }, []);

  const prevModal = useCallback(() => {
    setModalImageIndex(prev => (prev - 1 + Object.values(images).length) % Object.values(images).length);
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
  const galleryImages = Object.values(images).slice(5); // Skip the first few images used elsewhere
  const visibleImages = galleryImages.slice(startIndex, startIndex + currentImagesPerSlide);

  return (
    <div className="gallery-container" ref={galleryRef}>
      <h1 className="gallery-title">Our Work Gallery</h1>
      <div className="gallery">
        <button
          className="nav-btn prev"
          onClick={prevSlide}
          disabled={startIndex === 0}
          aria-label="Previous slide"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
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
          disabled={startIndex + currentImagesPerSlide >= galleryImages.length}
          aria-label="Next slide"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {isModalOpen && modalImageIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal} aria-label="Close modal">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="modal-content">
              <img
                src={galleryImages[modalImageIndex]}
                alt={`Modal item ${modalImageIndex + 1}`}
                className="modal-image"
              />
              <div className="modal-nav">
                <button className="modal-nav-btn" onClick={prevModal} aria-label="Previous image">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span className="image-counter">
                  {modalImageIndex + 1} / {galleryImages.length}
                </span>
                <button className="modal-nav-btn" onClick={nextModal} aria-label="Next image">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// CSS Styles
const styles = `
.home-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow-x: hidden;
}

/* Hero Styles */
.hero-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.hero-nav {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  z-index: 10;
}

.hero-nav button {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  color: #fff;
  font-size: 1.2rem;
}

.hero-nav button:hover {
  background: rgba(255, 255, 255, 0.5);
}

.slide-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #fff;
  transform: scale(1.2);
}

/* Slider One Styles */
.slider-one {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #006341, #003d27);
  color: white;
  padding: 80px 5% 60px;
  box-sizing: border-box;
  text-align: center;
}

.slider-one .slider-content {
  max-width: 600px;
  z-index: 2;
  position: relative;
}

.slider-one h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: white;
}

.slider-one p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.slider-one .slider-button {
  background: white;
  color: #006341;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
}

.slider-one .slider-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.slider-one .brain-image {
  position: absolute;
  right: 5%;
  height: 70%;
  max-width: 40%;
  object-fit: contain;
  z-index: 1;
  animation: float 6s ease-in-out infinite;
  display: none; /* Hide on mobile */
}

.slider-one .logo-image {
  position: absolute;
  top: 30px;
  left: 30px;
  height: 50px;
  object-fit: contain;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

/* Slider Two Styles */
.slider-two {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #00416A, #E4E5E6);
  padding: 80px 20px;
  box-sizing: border-box;
}

.slider-two .slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 40px;
}

.slider-two .image-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.slider-two .image-container img {
  width: 100%;
  max-width: 500px;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.slider-two .image-container img:hover {
  transform: scale(1.03);
}

.slider-two .text-content {
  width: 100%;
  text-align: center;
  color: #333;
}

.slider-two h1 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.slider-two p {
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.slider-two .discover-button {
  background: #00416A;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.slider-two .discover-button:hover {
  background: #E4E5E6;
  color: #00416A;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Slider Three Styles */
.slider-three {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #00923d, #006341);
  padding: 80px 20px;
  box-sizing: border-box;
}

.slider-three .slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 40px;
}

.slider-three .slider-logo {
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
}

.slider-three .slider-logo img {
  width: 100%;
  height: auto;
  filter: brightness(0) invert(1);
}

.slider-three .slider-content {
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.slider-three h1 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.slider-three p {
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 25px;
}

.slider-three .explore-btn {
  background: #2c3e50;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.slider-three .explore-btn:hover {
  background: #f39c12;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Tablet and Desktop Styles */
@media (min-width: 768px) {
  .slider-one {
    text-align: left;
    padding-left: 10%;
  }
  
  .slider-one .brain-image {
    display: block;
  }
  
  .slider-two .slider-container {
    flex-direction: row;
    gap: 60px;
  }
  
  .slider-two .text-content {
    text-align: left;
  }
  
  .slider-two h1 {
    font-size: 2.5rem;
  }
  
  .slider-two p {
    font-size: 1.1rem;
  }
  
  .slider-three .slider-container {
    flex-direction: row;
    gap: 60px;
  }
  
  .slider-three .slider-logo {
    max-width: 450px;
  }
  
  .slider-three .slider-content {
    text-align: left;
    padding: 40px;
  }
  
  .slider-three h1 {
    font-size: 2.5rem;
  }
  
  .slider-three p {
    font-size: 1.1rem;
  }
}

/* Water Treatment Styles */
.water-treatment {
  padding: 80px 20px;
  background: #f9f9f9;
}

.water-treatment .treatment-container {
  max-width: 1200px;
  margin: 0 auto;
}

.water-treatment .treatment-header {
  text-align: center;
  margin-bottom: 50px;
}

.water-treatment .treatment-header h2 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.water-treatment .treatment-header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
}

.water-treatment .treatment-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}

.water-treatment .treatment-image {
  width: 100%;
  max-width: 500px;
}

.water-treatment .treatment-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.water-treatment .treatment-image img:hover {
  transform: scale(1.02);
}

.water-treatment .treatment-details {
  width: 100%;
}

.water-treatment .treatment-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 30px;
  text-align: center;
}

.water-treatment .highlighted-benefits {
  display: block;
  font-weight: 600;
  color: #2c3e50;
  margin: 20px 0;
  text-align: center;
  font-size: 1.1rem;
}

.water-treatment .treatment-benefits {
  max-height: 300px;
  overflow: hidden;
  transition: max-height 0.5s ease;
  margin-bottom: 20px;
}

.water-treatment .treatment-benefits.expanded {
  max-height: 2000px;
}

.water-treatment .treatment-benefits h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.water-treatment .benefits-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.water-treatment .treatment-benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.water-treatment .treatment-benefit-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.water-treatment .treatment-benefit-icon {
  color: #00923d;
  font-size: 1rem;
  margin-top: 3px;
  flex-shrink: 0;
}

.water-treatment .treatment-benefit-text {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #555;
}

.water-treatment .toggle-benefits {
  background: transparent;
  border: none;
  color: #00416A;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: block;
  margin: 20px auto 0;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.water-treatment .toggle-benefits:hover {
  color: #00923d;
}

@media (min-width: 768px) {
  .water-treatment .treatment-content {
    flex-direction: row;
    align-items: flex-start;
  }
  
  .water-treatment .treatment-description {
    text-align: left;
  }
  
  .water-treatment .highlighted-benefits {
    text-align: left;
  }
  
  .water-treatment .treatment-benefits h3 {
    text-align: left;
  }
  
  .water-treatment .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .water-treatment .benefits-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Water Benefits Styles */
.water-benefits {
  position: relative;
  padding: 100px 20px;
  overflow: hidden;
}

.water-benefits .water-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #00416A, #00923d);
  z-index: -2;
}

.water-benefits .how-it-works {
  max-width: 1200px;
  margin: 0 auto 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.water-benefits .how-it-works.animate {
  opacity: 1;
  transform: translateY(0);
}

.water-benefits .water-drop-animation {
  position: relative;
  width: 150px;
  height: 150px;
  flex-shrink: 0;
}

.water-benefits .drop {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: drop 3s infinite;
}

.water-benefits .ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: ripple 3s infinite;
  opacity: 0;
}

.water-benefits .delay-1 {
  animation-delay: 1s;
}

.water-benefits .delay-2 {
  animation-delay: 2s;
}

.water-benefits .text-content {
  flex: 1;
  color: white;
  text-align: center;
}

.water-benefits .text-content h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: white;
}

.water-benefits .text-content p {
  font-size: 1rem;
  line-height: 1.7;
  max-width: 700px;
}

@keyframes drop {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

@keyframes ripple {
  0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
}

.water-benefits .section-header {
  text-align: center;
  margin-bottom: 60px;
}

.water-benefits .section-title {
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.water-benefits .section-title.animate {
  opacity: 1;
  transform: translateY(0);
}

.water-benefits .section-title span {
  color: #f39c12;
}

.water-benefits .section-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease 0.2s;
}

.water-benefits .section-description.animate {
  opacity: 1;
  transform: translateY(0);
}

.water-benefits .benefit-cards-container {
  max-width: 1200px;
  margin: 0 auto;
}

.water-benefits .benefit-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.water-benefits .card {
  perspective: 1000px;
  height: 200px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.water-benefits .card.animate {
  opacity: 1;
  transform: translateY(0);
}

.water-benefits .card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.water-benefits .card:hover .card-inner {
  transform: rotateY(180deg);
}

.water-benefits .card-front,
.water-benefits .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.water-benefits .card-front {
  background: white;
}

.water-benefits .card-back {
  background: #f39c12;
  color: white;
  transform: rotateY(180deg);
}

.water-benefits .icon-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 146, 61, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.water-benefits .icon {
  font-size: 1.8rem;
}

.water-benefits .card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-align: center;
}

.water-benefits .card p {
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (min-width: 768px) {
  .water-benefits .how-it-works {
    flex-direction: row;
    text-align: left;
  }
  
  .water-benefits .text-content {
    text-align: left;
  }
  
  .water-benefits .benefit-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .water-benefits .benefit-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Stats Section Styles */
.stats-section {
  padding: 80px 20px;
  background: #f5f7fa;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.stat-card {
  background: white;
  border-radius: 10px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #00416A;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1rem;
  color: #666;
}

@media (min-width: 600px) {
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .stats-container {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .stat-number {
    font-size: 3rem;
  }
}

/* Survey Download Styles */
.survey-download-container {
  padding: 80px 20px;
  background: linear-gradient(135deg, #00416A, #00923d);
  color: white;
  text-align: center;
}

.survey-download-title {
  font-size: 2rem;
  margin-bottom: 30px;
  line-height: 1.3;
}

.download-button {
  display: inline-block;
  background: white;
  color: #00416A;
  padding: 15px 35px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.download-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}

@media (min-width: 768px) {
  .survey-download-title {
    font-size: 2.5rem;
  }
  
  .download-button {
    padding: 18px 45px;
    font-size: 1.2rem;
  }
}

/* Gallery Styles */
.gallery-container {
  padding: 80px 20px;
  background: #f9f9f9;
}

.gallery-title {
  text-align: center;
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 40px;
}

.gallery {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.gallery-grid {
  display: flex;
  gap: 15px;
  overflow: hidden;
  scroll-behavior: smooth;
  padding: 10px 0;
}

.gallery-item {
  flex: 0 0 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.02);
}

.gallery-grid-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.5s ease;
}

.gallery-grid-image:hover {
  transform: scale(1.05);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: none;
  font-size: 1rem;
  color: #00416A;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: #00416A;
  color: white;
}

.nav-btn.prev {
  left: -20px;
}

.nav-btn.next {
  right: -20px;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-wrapper {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  width: 100%;
  padding: 20px;
}

.close-btn {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px;
}

.modal-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  display: block;
  border-radius: 10px;
  object-fit: contain;
}

.modal-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
}

.modal-nav-btn {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-nav-btn:hover {
  background: rgba(255, 255, 255, 0.7);
  color: #333;
}

.image-counter {
  color: white;
  font-size: 1rem;
  min-width: 80px;
  text-align: center;
}

@media (min-width: 600px) {
  .gallery-item {
    flex: 0 0 calc(50% - 15px);
  }
  
  .gallery-title {
    font-size: 2.2rem;
  }
}

@media (min-width: 768px) {
  .gallery-item {
    flex: 0 0 calc(33.333% - 15px);
  }
  
  .gallery-title {
    font-size: 2.5rem;
  }
  
  .modal-wrapper {
    max-width: 80%;
  }
  
  .close-btn {
    top: -40px;
    font-size: 2rem;
  }
}

@media (min-width: 992px) {
  .modal-wrapper {
    max-width: 70%;
  }
}
`;

// Inject styles
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default Home;