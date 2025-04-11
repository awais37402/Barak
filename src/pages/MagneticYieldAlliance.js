import React, { useEffect } from 'react';
import './MagneticYieldAlliance.css';

// Logo imports
import BarakLogo from '../assets/logo-removebg-preview.png';
import MagneticLogo from '../assets/Magnetic_Yield_Alliance__4.png';

// Hero section
import HeroBackground from '../assets/farm-field-banner.jpg';

// Partnership intro
import GlobalLocalCollage from '../assets/global-local-collage.jpg';

// Technology showcase icons
import AGI400DIcon from '../assets/agi400d-icon.png';
import ResearchIcon from '../assets/research-icon.png';
import AdaptationIcon from '../assets/adaptation-icon.png';

// Before/After collage
import BeforeCrop from '../assets/before-crop.jpeg';
import AfterCrop from '../assets/after-crop.jpg';

const MagneticYieldAlliance = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-up');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="alliance-page">
      {/* Hero Banner with Partnership Highlight */}
      <section
        className="hero-banner fade-in-up"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroBackground})`,
        }}
      >
        <div className="hero-content">
          <div className="partner-logos">
            <img src={BarakLogo} alt="Barak AgriTech" className="logo" />
            <span className="partnership-symbol">+</span>
            <img src={MagneticLogo} alt="Magnetic Technologies LLC" className="logo" />
          </div>
          <h1>Magnetic Yield Alliance</h1>
          <p className="tagline">Global Magnetic Technology Expertise Meets Local Agricultural Innovation</p>
          <button className="cta-button">Contact Us for a Demo</button>
        </div>
      </section>

      {/* Partnership Introduction */}
      <section className="partnership-intro fade-in-up">
        <div className="container">
          <h2>Our Strategic Partnership</h2>
          <div className="intro-grid">
            <div className="intro-text">
              <p>
                Barak AgriTech has partnered with <strong>Magnetic Technologies LLC</strong>, Dubai's leading
                agricultural technology innovator since 1995, to bring proven magnetic water treatment
                solutions to Pakistan.
              </p>
              <p>
                Together, we form the <strong>Magnetic Yield Alliance</strong>, combining 30+ years of
                international success with deep local farming expertise.
              </p>
              <div className="achievement-stats">
                <div className="stat-item">
                  <span className="stat-number">500,000+</span>
                  <span className="stat-label">Hectares Irrigated Worldwide</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Countries Using This Technology</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">30%</span>
                  <span className="stat-label">Average Yield Increase</span>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <img src={GlobalLocalCollage} alt="Global meets local partnership" />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="technology-showcase fade-in-up">
        <div className="container">
          <h2>Powered by Magnetic Technologies LLC</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">
                <img src={AGI400DIcon} alt="AGI400D Device" />
              </div>
              <h3>AGI400D Technology</h3>
              <p>
                The same proven magnetic water treatment devices used successfully in 50+ countries,
                now optimized for Pakistani soil and water conditions.
              </p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <img src={ResearchIcon} alt="Research" />
              </div>
              <h3>30 Years of R&D</h3>
              <p>
                Leveraging decades of scientific research and field testing by Magnetic Technologies LLC's
                global team of agricultural engineers.
              </p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <img src={AdaptationIcon} alt="Local Adaptation" />
              </div>
              <h3>Localized Solutions</h3>
              <p>
                Barak AgriTech's on-ground expertise ensures the technology is perfectly adapted to
                Pakistan's unique farming challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Collage Section */}
      <section className="results-collage fade-in-up">
        <h2>Transforming Agriculture Together</h2>
        <div className="collage-container">
          <div
            className="before-section"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BeforeCrop})`,
            }}
          >
            <h3>Before</h3>
            <p>Struggling with brackish water, low yields, and high input costs</p>
          </div>
          <div className="vs-circle">VS</div>
          <div
            className="after-section"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${AfterCrop})`,
            }}
          >
            <h3>After</h3>
            <p>Increased yields, reduced water usage, healthier crops</p>
          </div>
        </div>
        <div className="partnership-badge">
          <img src={MagneticLogo} alt="Magnetic Technologies LLC" />
          <span>+</span>
          <img src={BarakLogo} alt="Barak AgriTech" />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial fade-in-up">
        <div className="container">
          <blockquote>
            "Our partnership with Barak AgriTech represents an exciting opportunity to bring our proven
            magnetic agricultural solutions to Pakistan's farming community. Their local expertise makes
            them the ideal partner for this expansion."
            <footer>
              <cite>- Magnetic Technologies LLC Leadership</cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section fade-in-up">
        <div className="container">
          <h2>Ready to Join the Magnetic Yield Revolution?</h2>
          <p>
            Be part of the movement transforming Pakistani agriculture through our partnership with
            Magnetic Technologies LLC.
          </p>
          <div className="cta-buttons">
            <button className="primary-cta">Get Your Consultation</button>
            <button className="secondary-cta">Download Case Studies</button>
          </div>
          <div className="partner-assurance">
            <img src={MagneticLogo} alt="Magnetic Technologies LLC" />
            <span>Technology Backed by 30+ Years of Global Success</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MagneticYieldAlliance;
