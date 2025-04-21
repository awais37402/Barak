import React, { useEffect, useState } from 'react';
import './MagneticYieldAlliance.css';

// Logo imports
import BarakLogo from '../assets/logo-removebg-preview.png';
import MagneticLogo from '../assets/Magnetic_Yield_Alliance__4.png';

// Image imports
import HeroBackground from '../assets/farm-field-banner.jpg';
import GlobalLocalCollage from '../assets/global-local-collage.jpg';
import BeforeCrop from '../assets/before-crop.png';
import AfterCrop from '../assets/after-crop.png';
import TechnologyIcon from '../assets/tech-icon.png';
import ResultsIcon from '../assets/results-icon.png';
import PartnershipIcon from '../assets/partnership-icon.png';
import MagneticDevice from '../assets/green1.png';
import SeedTreatment from '../assets/green2.png';
import FarmResults from '../assets/before-crop.png';

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
          {/* Hero Section */}
      <section 
  className="hero-banner animate-on-scroll" 
  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroBackground})` }}
>
  <div className="hero-content">
    <div className="partner-logos">
      <img src={BarakLogo} alt="Barak AgriTech (Pvt) Ltd." className="logo pulse" />
      <span className="partnership-symbol glow">✧</span>
      <img src={MagneticLogo} alt="Magnetic Technologies LLC" className="logo pulse" />
    </div>
    <h1 className="hero-title">Magnetic Yield Alliance</h1>
    <p className="tagline shimmer">Global Magnetic Technology Expertise Meets Local Agricultural Innovation</p>
    <p className="grow-more">Grow More with Zero Cost</p>
    <button
      className="cta-button sparkle"
      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc7NOvWuB_NC3E9bYriVLQopmFNHJDAOI0vnqKIT5u9qvXwyg/viewform', '_blank')}
    >
      Fill Out the Survey Form
    </button>
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
                This nationwide agri-ecosystem between Magnetic Technologies LLC (UAE) and Barak AgriTech (Pvt) Ltd. (Pakistan) 
                delivers an unprecedented opportunity to enhance and scale large-scale farms.
              </p>
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
              A global leader in magnetic water treatment solutions, helping boost sustainable yields across agriculture and industry in 50+ countries.
              </p>
              <ul className="partner-features">
  <li>30+ years of R&D in magnetic applications</li>
  <li>500,000+ hectares irrigated globally</li>
  <li>Proven water treatment technology</li>
  <li>Supports agriculture, poultry, fish farming, and manufacturing</li>
  <li>Deployed in 50+ countries worldwide</li>
</ul>

            </div>
            
            <div className="partner-card animate-on-scroll">
              <div className="partner-header">
                <img src={BarakLogo} alt="Barak AgriTech (Pvt) Ltd." className="partner-logo" />
                <h3>Barak AgriTech (Pvt) Ltd.</h3>
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
              Harnessing the power magnetic fields to optimize water structure and enhance nutrient absorption for healthier, more productive crops even in saline conditions up to 7000ppm
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
                on-the-ground agricultural understanding through Barak AgriTech (Pvt) Ltd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Deep Dive */}
      <section className="agri-tech-section">
        <div className="agri-container">
          <div className="agri-header animate-on-scroll">
            <span className="agri-label">Our Technology</span>
            <h2 className="agri-title">How Magnetic Treatment Transforms Agriculture</h2>
            <div className="agri-divider"></div>
          </div>

          <div className="agri-features">
            <div className="agri-card animate-on-scroll">
              <div className="agri-image-wrapper">
                <img src={MagneticDevice} alt="Magnetic Water Treatment" />
              </div>
              <h3 className="agri-card-title">Magnetic Water Treatment</h3>
              <ul className="agri-list">
                <li>Boosts crop yields by <strong>15–30%</strong> with magnetized water.</li>
                <li>Enhances nutrient absorption in plant roots.</li>
                <li>Increases vegetable output by <strong>20–50%</strong> through better photosynthesis.</li>
                <li>Cuts water usage by <strong>30–50%</strong> with improved water delivery.</li>
                <li>Improves yields by <strong>15–25%</strong> in saline soil by reducing salt effects.</li>
              </ul>
            </div>

            <div className="agri-card animate-on-scroll">
              <div className="agri-image-wrapper">
                <img src={SeedTreatment} alt="Seed Treatment" />
              </div>
              <h3 className="agri-card-title">Seed Treatment</h3>
              <ul className="agri-list">
                <li><strong>Magnetic exposure</strong> enhances seed germination by <strong>15–40%</strong></li>
                <li><strong>Strengthens</strong> early root development</li>
                <li><strong>Reduces</strong> crop loss by <strong>20%</strong></li>
                <li><strong>Improves</strong> stress resistance</li>
                <li><strong>Accelerates</strong> growth cycles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="offer-section">
        <div className="container">
          <div className="offer-header animate-on-scroll">
            <span className="section-label offer-heading">Our Offer</span>
            <h2>You Invest Nothing. We Deliver Everything!</h2>
            <div className="divider"></div>
          </div>

          <div className="offer-cards">
            <article className="offer-card animate-on-scroll">
              <div className="offer-icon">💰</div>
              <h3>Zero Upfront Costs</h3>
              <p>
  Through our partnership with Magnetic Technologies LLC, Dubai—a global leader with 30+ years of success—we provide the water treatment and seed treatment devices <strong>completely free</strong>. These magnetic devices enhance water absorption and energize seeds, increasing your yields by <strong>15–30%</strong> with <strong>no upfront cost</strong>.
</p>

            </article>

            <article className="offer-card animate-on-scroll">
              <div className="offer-icon">🤝</div>
              <h3>Profit Sharing</h3>
              <section>
                <h4>Brackish Water Farms</h4>
                <p>For crops grown on saline land, we split the net profit 50/50.</p>
              </section>
              <section>
                <h4>Freshwater Farms</h4>
                <p>We take 60% of the extra yield our tech helps you grow; you keep 40%—plus all your usual harvest.</p>
              </section>
            </article>

            <article className="offer-card animate-on-scroll">
              <div className="offer-icon">🛠️</div>
              <h3>Comprehensive Support</h3>
              <p>
                Includes installation, maintenance, and professional consultancy from Barak AgriTech (Pvt) Ltd. Our team handles everything from setup to optimization.
              </p>
            </article>
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
                className={`tab-button ${activeTab === 'Economics' ? 'active' : ''}`}
                onClick={() => setActiveTab('Economics')}
              >
                Economics
              </button>
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
             
            </div>
            
            <div className={`tab-content ${activeTab === 'Productivity' ? 'active' : ''}`}>
              <div className="impact-stats">
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">95%</div>
                  <div className="stat-label">Success Rate</div>
                  <div className="stat-desc">Of activated fields show measurable improvement</div>
                </div>
                <div className="stat-item animate-on-scroll">
                  <div className="stat-value">Up to 7000 ppm</div>
                  <div className="stat-label">Enable brackish water up to 7000 ppm for irrigation</div>
                  <div className="stat-desc"></div>
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
                  <div className="stat-value">Free yield</div>
                  <div className="stat-label">at 0 cost</div>
                  <div className="stat-desc">On 100 acres of cotton, gain 262 extra maunds with our technology</div>
                </div>
                
              </div>
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
              <div
                className="comparison-image"
                style={{ backgroundImage: `url(${BeforeCrop})` }}
              ></div>
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

            {/* Mobile VS badge */}
            <div className="vs-badge mobile-only">VS</div>

            {/* Desktop VS badge */}
            <div className="vs-wrapper">
              <div className="vs-badge animate-on-scroll">VS</div>
            </div>

            <div className="comparison-item after animate-on-scroll">
              <div
                className="comparison-image"
                style={{ backgroundImage: `url(${AfterCrop})` }}
              ></div>
              <div className="comparison-content">
                <h3>Magnetic-Treated Farming</h3>
                <ul>
                  <li>Optimized water utilization</li>
                  <li>Higher yields with same inputs</li>
                  <li>Faster growth cycles</li>
                  <li>Enhanced stress resistance</li>
                  <li>Grows in Brackish Conditions</li>
                </ul>
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
              Join hundreds of farmers who are already experiencing the Magnetic Yield difference through Barak AgriTech (Pvt) Ltd. 
              Zero upfront costs - we succeed when you succeed.
            </p>
            <button
              className="cta-button sparkle"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc7NOvWuB_NC3E9bYriVLQopmFNHJDAOI0vnqKIT5u9qvXwyg/viewform', '_blank')}
            >
              Fill Out the Survey Form
            </button>
            
            <div className="partner-badges">
              <img src={BarakLogo} alt="Barak AgriTech (Pvt) Ltd." className="badge-logo" />
              <img src={MagneticLogo} alt="Magnetic Technologies LLC" className="badge-logo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MagneticYieldAlliance;
