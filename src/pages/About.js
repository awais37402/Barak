import React, { useState, useEffect, useRef } from 'react';
import styles from './About.module.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('farmers');
  const sectionRefs = useRef([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Add section references to the array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className={styles.aboutPage}>
      {/* About Hero */}
      <section className={`${styles.aboutHero} ${styles.slideInContainer}`} ref={addToRefs}>
        <div className={styles.container}>
          <h1 className={styles.slideInItem}>About <span>Magnetic Yield Alliance</span></h1>
          <p className={styles.slideInItem}>Revolutionizing Pakistan's agriculture through magnetic technology and sustainable partnerships</p>
        </div>
      </section>

      {/* Partnership Story */}
      <section className={`${styles.ourStory} ${styles.slideInContainer}`} ref={addToRefs}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <h2 className={`${styles.sectionTitle} ${styles.slideInItem}`}>Our <span>Alliance</span></h2>
            <p className={styles.slideInItem}>The Magnetic Yield Alliance brings together global magnetic technology expertise with local agricultural knowledge to transform Pakistan's farming landscape. This innovative partnership between <strong>Magnetic Technologies LLC</strong> (Dubai) and <strong>Barak AgriTech</strong> (Pakistan) delivers unprecedented value to corporate and large-scale farmers.</p>
            
            <div className={`${styles.storyStats} ${styles.slideInContainer}`}>
              <div className={`${styles.statItem} ${styles.slideInItem}`}>
                <h3>30+</h3>
                <p>Years of Magnetic Research</p>
              </div>
              <div className={`${styles.statItem} ${styles.slideInItem}`}>
                <h3>50+</h3>
                <p>Countries Served</p>
              </div>
              <div className={`${styles.statItem} ${styles.slideInItem}`}>
                <h3>500K+</h3>
                <p>Hectares Treated</p>
              </div>
            </div>
          </div>
          <div className={`${styles.storyImage} ${styles.slideInItem}`}>
            <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Farm irrigation system" />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={`${styles.partners} ${styles.slideInContainer}`} ref={addToRefs}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.slideInItem}`}>Our <span>Partners</span></h2>
          
          <div className={styles.partnerCards}>
            <div className={`${styles.partnerCard} ${styles.slideInItem}`}>
              <div className={styles.partnerLogo}>
                <i className="fas fa-magnet fa-4x"></i>
              </div>
              <h3>Magnetic Technologies LLC</h3>
              <p><strong>Since 1995 | Dubai, UAE</strong></p>
              <p>Global leader in magnetic energy applications with deployments in 50+ countries. Our magnetic water treatment devices have irrigated over 500,000 hectares worldwide, supporting agriculture, poultry, fish farming, and manufacturing sectors.</p>
              <ul className={styles.partnerFeatures}>
                <li><i className="fas fa-check-circle"></i> 30+ years R&D in magnetic applications</li>
                <li><i className="fas fa-check-circle"></i> Proven water treatment technology</li>
                <li><i className="fas fa-check-circle"></i> Sustainable yield enhancement solutions</li>
              </ul>
            </div>
            
            <div className={`${styles.partnerCard} ${styles.slideInItem}`}>
              <div className={styles.partnerLogo}>
                <i className="fas fa-tractor fa-4x"></i>
              </div>
              <h3>Barak AgriTech</h3>
              <p><strong>Pakistan's Agricultural Specialists</strong></p>
              <p>Dedicated to modernizing Pakistani agriculture through innovative technologies and on-ground support. We've empowered over 1,000 farmers across 100,000+ acres with tailored solutions.</p>
              <ul className={styles.partnerFeatures}>
                <li><i className="fas fa-check-circle"></i> Local agronomic expertise</li>
                <li><i className="fas fa-check-circle"></i> Installation & maintenance services</li>
                <li><i className="fas fa-check-circle"></i> Agricultural consultancy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Technology Section */}
      <section className={`${styles.technology} ${styles.slideInContainer}`} ref={addToRefs}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.slideInItem}`}>Our <span>Technology</span></h2>
          <p className={`${styles.sectionSubtitle} ${styles.slideInItem}`}>How magnetic treatment transforms agriculture</p>
          
          <div className={styles.techGrid}>
            <div className={`${styles.techCard} ${styles.slideInItem}`}>
              <div className={styles.techIcon}>
                <i className="fas fa-atom"></i>
              </div>
              <h3>Magnetic Water Treatment</h3>
              <ul>
                <li>0.1–0.5 Tesla magnetic fields optimize water structure</li>
                <li>Reduces irrigation volume by 30–50%</li>
                <li>Enables use of brackish water (up to 7,000 ppm salts)</li>
                <li>Boosts yields by 15–30% (up to 70% in trials)</li>
              </ul>
            </div>
            
            <div className={`${styles.techCard} ${styles.slideInItem}`}>
              <div className={styles.techIcon}>
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Seed Treatment</h3>
              <ul>
                <li>50–100 mT magnetic fields activate seed enzymes</li>
                <li>Speeds germination by 3–5 days</li>
                <li>Reduces seed requirements by 10–15%</li>
                <li>Increases root length by 20%</li>
              </ul>
            </div>
            
            <div className={`${styles.techCard} ${styles.slideInItem}`}>
              <div className={styles.techIcon}>
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Proven Results</h3>
              <ul>
                <li>15–30% yield increase for grains</li>
                <li>20–50% boost for vegetables</li>
                <li>15–25% more fruit with better quality</li>
                <li>10–15 day shorter growth cycles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className={`${styles.offer} ${styles.slideInContainer}`} ref={addToRefs}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.slideInItem}`}>Our <span>Offer</span></h2>
          <div className={`${styles.offerHighlight} ${styles.slideInItem}`}>
            <h3>"You Invest Nothing, We Deliver Everything!"</h3>
          </div>
          
          <div className={styles.offerGrid}>
            <div className={`${styles.offerCard} ${styles.slideInItem}`}>
              <div className={styles.offerIcon}>
                <i className="fas fa-gift"></i>
              </div>
              <h3>Zero Upfront Costs</h3>
              <p>Free magnetic devices and seed funnels installed on your pivot systems/tube wells</p>
            </div>
            
            <div className={`${styles.offerCard} ${styles.slideInItem}`}>
              <div className={styles.offerIcon}>
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Profit Sharing</h3>
              <p>Freshwater: 40% additional yield to farmer<br />
              Brackish: 50% net profit to farmer</p>
            </div>
            
            <div className={`${styles.offerCard} ${styles.slideInItem}`}>
              <div className={styles.offerIcon}>
                <i className="fas fa-tools"></i>
              </div>
              <h3>Comprehensive Support</h3>
              <p>Installation, maintenance, and agricultural consultancy included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className={`${styles.impact} ${styles.slideInContainer}`} ref={addToRefs}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.slideInItem}`}>Our <span>Impact</span></h2>
          
          <div className={styles.impactTabs}>
            <div className={`${styles.tabButtons} ${styles.slideInItem}`}>
              <button 
                className={`${styles.tabButton} ${activeTab === 'farmers' ? styles.active : ''}`} 
                onClick={() => handleTabClick('farmers')}
              >
                For Farmers
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'pakistan' ? styles.active : ''}`} 
                onClick={() => handleTabClick('pakistan')}
              >
                For Pakistan
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'environment' ? styles.active : ''}`} 
                onClick={() => handleTabClick('environment')}
              >
                Environment
              </button>
            </div>
            
            <div className={`${styles.tabContent} ${activeTab === 'farmers' ? styles.active : ''} ${styles.slideInItem}`}>
              <ul>
                <li><i className="fas fa-coins"></i> Higher Profits: Retain 40-50% of additional yield with no upfront cost</li>
                <li><i className="fas fa-tint"></i> Water Savings: 30-50% reduction in irrigation needs</li>
                <li><i className="fas fa-clock"></i> Faster Growth: 10-15 day shorter crop cycles</li>
                <li><i className="fas fa-shield-alt"></i> Resilience: Farm with brackish water in arid regions</li>
              </ul>
            </div>
            
            <div className={`${styles.tabContent} ${activeTab === 'pakistan' ? styles.active : ''} ${styles.slideInItem}`}>
              <ul>
                <li><i className="fas fa-wheat"></i> Food Security: Potential 10-15% national grain increase</li>
                <li><i className="fas fa-map"></i> Land Reclamation: Reverse salinization on 1-2 million ha</li>
                <li><i className="fas fa-users"></i> Rural Development: Empower large-scale farming operations</li>
              </ul>
            </div>
            
            <div className={`${styles.tabContent} ${activeTab === 'environment' ? styles.active : ''} ${styles.slideInItem}`}>
              <ul>
                <li><i className="fas fa-leaf"></i> Chemical Reduction: 40-50% less runoff polluting water</li>
                <li><i className="fas fa-tree"></i> Soil Health: 20-30% salinity reduction over 2-3 seasons</li>
                <li><i className="fas fa-cloud"></i> Climate Resilience: Sustainable farming in water-scarce regions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.cta} ${styles.slideInContainer}`} ref={addToRefs}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.slideInItem}>Ready to Transform Your Farming?</h2>
            <p className={styles.slideInItem}>Join the Magnetic Yield Alliance with zero upfront investment</p>
          </div>
          <a href="/contact" className={`${styles.primaryBtn} ${styles.slideInItem}`}>Contact Us Today</a>
        </div>
      </section>
    </div>
  );
};

export default About;
