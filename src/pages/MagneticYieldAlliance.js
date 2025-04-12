import React, { useEffect, useState } from 'react';
import './MagneticYieldAlliance.css';

// Logo imports
import BarakLogo from '../assets/logo-removebg-preview.png';
import MagneticLogo from '../assets/Magnetic_Yield_Alliance__4.png';

// Image imports
import HeroBackground from '../assets/farm-field-banner.jpg';
import GlobalLocalCollage from '../assets/global-local-collage.jpg';
import BeforeCrop from '../assets/before-crop.jpeg';
import AfterCrop from '../assets/after-crop.jpg';
import TechnologyIcon from '../assets/tech-icon.png';
import ResultsIcon from '../assets/results-icon.png';
import PartnershipIcon from '../assets/partnership-icon.png';
import MagneticDevice from '../assets/product.jpg';
import SeedTreatment from '../assets/seven.jpg';
import FarmResults from '../assets/after-crop.jpg';

const MagneticYieldAlliance = () => {
  const [activeTab, setActiveTab] = useState('Productivity');

  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      elements.forEach(element => observer.observe(element));
    };

    animateElements();
    
    // Add Poppins font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="magnetic-yield-alliance">
      {/* Hero Section */}
      <section 
        className="hero-banner animate-on-scroll" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroBackground})` }}
      >
        <div className="hero-content">
          <div className="partner-logos">
            <img src={BarakLogo} alt="Barak AgriTech" className="logo pulse" />
            <span className="partnership-symbol glow">✧</span>
            <img src={MagneticLogo} alt="Magnetic Technologies LLC" className="logo pulse" />
          </div>
          <h1 className="hero-title">Magnetic Yield Alliance</h1>
          <p className="tagline shimmer">Global Magnetic Technology Expertise Meets Local Agricultural Innovation</p>
          <button className="cta-button sparkle">Contact Us for a Demo</button>
        </div>
      </section>

      {/* Alliance Overview */}
      <section className="alliance-overview">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Strategic Alliance</span>
            <h2>Transforming Pakistan's Farming Landscape</h2>
            <div className="divider"></div>
          </div>

          <div className="overview-content">
            <div className="overview-text animate-on-scroll">
              <p className="highlight">
                The Magnetic Yield Alliance brings together global magnetic technology expertise with local agricultural 
                knowledge to transform Pakistan's farming landscape.
              </p>
              <p>
                This nationwide agri-ecosystem between Magnetic Technologies LLC (UAE) and Barak AgriTech (Pakistan) 
                delivers an unprecedented opportunity to enhance and scale large-scale farms.
              </p>
              
              <div className="milestones-grid">
                <div className="milestone-item animate-on-scroll">
                  <div className="milestone-icon">🌱</div>
                  <h3>30+ Years</h3>
                  <p>Of magnetic research and development</p>
                </div>
                <div className="milestone-item animate-on-scroll">
                  <div className="milestone-icon">🌍</div>
                  <h3>50+ Countries</h3>
                  <p>Where our technology has been implemented</p>
                </div>
                <div className="milestone-item animate-on-scroll">
                  <div className="milestone-icon">🔄</div>
                  <h3>500K+ Hectares</h3>
                  <p>Of farmland treated with our solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Our Partners</span>
            <h2>Global Expertise Meets Local Knowledge</h2>
            <div className="divider"></div>
          </div>

          <div className="partners-grid">
            <div className="partner-card animate-on-scroll">
              <div className="partner-header">
                <img src={MagneticLogo} alt="Magnetic Technologies LLC" className="partner-logo" />
                <h3>Magnetic Technologies LLC</h3>
                <p className="partner-subtitle">Since 1993 | Dubai, UAE</p>
              </div>
              <p className="partner-description">
                Global leader in magnetic water, air, and oil treatment solutions with over 30 years of R&D in 
                magnetic applications.
              </p>
              <ul className="partner-features">
                <li>Pioneers in water treatment technologies</li>
                <li>Sustainable yield enhancement solutions</li>
                <li>12,000+ gauss magnetic field technology</li>
                <li>Proven across diverse climates worldwide</li>
              </ul>
            </div>
            
            <div className="partner-card animate-on-scroll">
              <div className="partner-header">
                <img src={BarakLogo} alt="Barak AgriTech" className="partner-logo" />
                <h3>Barak AgriTech</h3>
                <p className="partner-subtitle">Pakistan's Agricultural Specialists</p>
              </div>
              <p className="partner-description">
                Pakistan-based agriculture company that has worked with 1,000+ farmers, enabling them to improve 
                crop yield, water savings, and sustainability.
              </p>
              <ul className="partner-features">
                <li>Local agronomists with regional expertise</li>
                <li>Installation & maintenance services</li>
                <li>Agricultural consultancy</li>
                <li>Performance-based partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Deep Dive */}
      <section className="technology-deepdive">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Our Technology</span>
            <h2>How Magnetic Treatment Transforms Agriculture</h2>
            <div className="divider"></div>
          </div>

          <div className="tech-features">
            <div className="tech-feature animate-on-scroll">
              <div className="feature-image">
                <img src={MagneticDevice} alt="Magnetic Water Treatment" />
              </div>
              <h3>Magnetic Water Treatment</h3>
              <ul>
                <li>Uses 12,000+ gauss magnetic field</li>
                <li>Reduces irrigation water by 30%</li>
                <li>Enables absorption of nutrients by 40%</li>
                <li>Increases crop quality</li>
                <li>Boosts yields by 10–30%</li>
              </ul>
            </div>
            
            <div className="tech-feature animate-on-scroll">
              <div className="feature-image">
                <img src={SeedTreatment} alt="Seed Treatment" />
              </div>
              <h3>Seed Treatment</h3>
              <ul>
                <li>Magnetic exposure enhances seed germination by 15–40%</li>
                <li>Strengthens early root development</li>
                <li>Reduces crop loss by 20%</li>
                <li>Improves stress resistance</li>
                <li>Accelerates growth cycles</li>
              </ul>
            </div>
            
            <div className="tech-feature animate-on-scroll">
              <div className="feature-image">
                <img src={FarmResults} alt="Proven Results" />
              </div>
              <h3>Proven Results</h3>
              <ul>
                <li>15–30% yield increase per crop</li>
                <li>30–50% water usage reduction</li>
                <li>10–15 day shorter growth cycles</li>
                <li>Improved crop quality metrics</li>
                <li>Reduced fertilizer requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="offer-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Our Offer</span>
            <h2>You Invest Nothing. We Deliver Everything!</h2>
            <div className="divider"></div>
          </div>

          <div className="offer-cards">
            <div className="offer-card animate-on-scroll">
              <div className="offer-icon">💰</div>
              <h3>Zero Upfront Costs</h3>
              <p>
                We provide devices and services without any upfront charges. You only pay on performance basis 
                from the additional income generated.
              </p>
            </div>
            
            <div className="offer-card animate-on-scroll">
              <div className="offer-icon">🤝</div>
              <h3>Profit Sharing</h3>
              <p>
                We take a share from additional farm income - typically 50% of net profits post-yield. 
                No results = No payment.
              </p>
            </div>
            
            <div className="offer-card animate-on-scroll">
              <div className="offer-icon">🛠️</div>
              <h3>Comprehensive Support</h3>
              <p>
                Includes installation, maintenance, and professional consultancy. Our team handles everything 
                from setup to optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Our Impact</span>
            <h2>Measurable Results Across All Metrics</h2>
            <div className="divider"></div>
          </div>

          <div className="impact-tabs">
            <div className="tab-header">
              <button 
                className={`tab-button ${activeTab === 'Productivity' ? 'active' : ''}`}
                onClick={() => setActiveTab('Productivity')}
              >
                Productivity
              </button>
              <button 
                className={`tab-button ${activeTab === 'Sustainability' ? 'active' : ''}`}
                onClick={() => setActiveTab('Sustainability')}
              >
                Sustainability
              </button>
              <button 
                className={`tab-button ${activeTab === 'Economics' ? 'active' : ''}`}
                onClick={() => setActiveTab('Economics')}
              >
                Economics
              </button>
            </div>
            
            <div className={`tab-content ${activeTab === 'Productivity' ? 'active' : ''}`}>
              <div className="impact-stats">
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">95%</div>
                  <div className="stat-label">Success Rate</div>
                  <div className="stat-desc">Of activated fields show measurable improvement</div>
                </div>
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">20-30%</div>
                  <div className="stat-label">Water Savings</div>
                  <div className="stat-desc">Reduction in irrigation needs</div>
                </div>
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">10-15</div>
                  <div className="stat-label">Days Faster</div>
                  <div className="stat-desc">Shorter crop cycles</div>
                </div>
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">30%</div>
                  <div className="stat-label">Higher Profit</div>
                  <div className="stat-desc">Average increase in net farm income</div>
                </div>
              </div>
            </div>
            
            <div className={`tab-content ${activeTab === 'Sustainability' ? 'active' : ''}`}>
              <div className="impact-stats">
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">30-50%</div>
                  <div className="stat-label">Water Reduction</div>
                  <div className="stat-desc">Less water required for same yields</div>
                </div>
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">20%</div>
                  <div className="stat-label">Less Fertilizer</div>
                  <div className="stat-desc">Reduced chemical inputs needed</div>
                </div>
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">40%</div>
                  <div className="stat-label">Nutrient Absorption</div>
                  <div className="stat-desc">Improved plant nutrient uptake</div>
                </div>
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Chemical-Free</div>
                  <div className="stat-desc">No additives or chemicals used</div>
                </div>
              </div>
            </div>
            
            <div className={`tab-content ${activeTab === 'Economics' ? 'active' : ''}`}>
              <div className="impact-stats">
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">$0</div>
                  <div className="stat-label">Upfront Cost</div>
                  <div className="stat-desc">No initial investment required</div>
                </div>
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">30-50%</div>
                  <div className="stat-label">ROI Increase</div>
                  <div className="stat-desc">Higher returns on existing crops</div>
                </div>
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">2X</div>
                  <div className="stat-label">Payback Period</div>
                  <div className="stat-desc">Faster than conventional methods</div>
                </div>
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">1:5</div>
                  <div className="stat-label">Cost Ratio</div>
                  <div className="stat-desc">$1 investment returns $5 in value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-proposition">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Why Choose Us</span>
            <h2>The Magnetic Advantage</h2>
            <div className="divider"></div>
          </div>

          <div className="value-cards">
            <div className="value-card animate-on-scroll">
              <div className="card-icon">
                <img src={TechnologyIcon} alt="Technology" />
              </div>
              <h3>Cutting-Edge Technology</h3>
              <p>
                Harnessing the power of 12,000+ gauss magnetic fields to optimize water structure 
                and enhance nutrient absorption for healthier, more productive crops.
              </p>
            </div>
            
            <div className="value-card animate-on-scroll">
              <div className="card-icon">
                <img src={ResultsIcon} alt="Results" />
              </div>
              <h3>Proven Results</h3>
              <p>
                Demonstrated success across 50+ countries with consistent yield increases of 15-30%, 
                water savings of 20-30%, and faster crop cycles.
              </p>
            </div>
            
            <div className="value-card animate-on-scroll">
              <div className="card-icon">
                <img src={PartnershipIcon} alt="Partnership" />
              </div>
              <h3>Unmatched Partnership</h3>
              <p>
                Global expertise meets local knowledge - our alliance combines international R&D with 
                on-the-ground agricultural understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="transformation-showcase">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Visible Impact</span>
            <h2>Transformative Results You Can See</h2>
            <div className="divider"></div>
          </div>

          <div className="comparison-container">
            <div className="comparison-item before animate-on-scroll">
              <div className="comparison-image" style={{ backgroundImage: `url(${BeforeCrop})` }}></div>
              <div className="comparison-content">
                <h3>Conventional Farming</h3>
                <ul>
                  <li>Struggling with brackish water</li>
                  <li>Lower yields despite high inputs</li>
                  <li>Longer growth cycles</li>
                  <li>Vulnerable to weather stress</li>
                </ul>
              </div>
            </div>
            
            <div className="vs-badge animate-on-scroll">
              <span>VS</span>
            </div>
            
            <div className="comparison-item after animate-on-scroll">
              <div className="comparison-image" style={{ backgroundImage: `url(${AfterCrop})` }}></div>
              <div className="comparison-content">
                <h3>Magnetic-Treated Farming</h3>
                <ul>
                  <li>Optimized water utilization</li>
                  <li>Higher yields with same inputs</li>
                  <li>Faster growth cycles</li>
                  <li>Enhanced stress resistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-card animate-on-scroll">
            <div className="quote-mark">"</div>
            <blockquote>
              Our alliance with Barak AgriTech represents a quantum leap in agricultural technology 
              deployment. Their local expertise perfectly complements our global research, creating 
              solutions that are both scientifically advanced and practically effective for Pakistani 
              farmers.
            </blockquote>
            <div className="testimonial-author">
              <div className="author-info">
                <strong>Dr. Ahmed Khalifa</strong>
                <span>Chief Scientist, Magnetic Technologies LLC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Ready to Transform Your Farm's Potential?</h2>
            <p>
              Join hundreds of farmers who are already experiencing the Magnetic Yield difference. 
              Zero upfront costs - we succeed when you succeed.
            </p>
            <button className="cta-button sparkle">Schedule Your Free Consultation</button>
            
            <div className="partner-badges">
              <img src={BarakLogo} alt="Barak AgriTech" className="badge-logo" />
              <img src={MagneticLogo} alt="Magnetic Technologies LLC" className="badge-logo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MagneticYieldAlliance;