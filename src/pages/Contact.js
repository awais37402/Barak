import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Contact.module.css';

// Animation wrapper component
const AnimateIn = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${styles.animateIn} ${inView ? styles.visible : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // FAQ state
  const [activeFaq, setActiveFaq] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // Toggle FAQ item
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className={styles.contactPage}>
      {/* Contact Hero */}
      <section className={styles.contactHero}>
        <div className={styles.container}>
          <AnimateIn delay={100}>
            <h1>Get in <span>Touch</span></h1>
          </AnimateIn>
          <AnimateIn delay={300}>
            <p>We'd love to hear from you and discuss how we can help your agricultural operation.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <AnimateIn>
            <div className={styles.contactGrid}>
              <div className={styles.contactForm}>
                <AnimateIn delay={100}>
                  <h2>Send Us a Message</h2>
                </AnimateIn>
                <form id="contactForm" onSubmit={handleSubmit}>
                  <AnimateIn delay={200}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </AnimateIn>
                  
                  <AnimateIn delay={300}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </AnimateIn>
                  
                  <AnimateIn delay={400}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </AnimateIn>
                  
                  <AnimateIn delay={500}>
                    <div className={styles.formGroup}>
                      <label htmlFor="subject">Subject</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales Questions</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunities</option>
                      </select>
                    </div>
                  </AnimateIn>
                  
                  <AnimateIn delay={600}>
                    <div className={styles.formGroup}>
                      <label htmlFor="message">Your Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="5" 
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                  </AnimateIn>
                  
                  <AnimateIn delay={700}>
                    <button type="submit" className={`${styles.btn} ${styles.primaryBtn}`}>
                      Send Message
                    </button>
                  </AnimateIn>
                </form>
              </div>
              
              <div className={styles.contactInfo}>
                <AnimateIn delay={100}>
                  <h2>Contact Information</h2>
                </AnimateIn>
                <AnimateIn delay={200}>
                  <p>Feel free to reach out through any of these channels:</p>
                </AnimateIn>
                
                <AnimateIn delay={300}>
                  <div className={styles.infoCard}>
                    <div className={styles.icon}>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className={styles.content}>
                      <h3>Our Office</h3>
                      <p>123 Farm Tech Avenue<br />Agro Valley, CA 90210</p>
                    </div>
                  </div>
                </AnimateIn>
                
                <AnimateIn delay={400}>
                  <div className={styles.infoCard}>
                    <div className={styles.icon}>
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className={styles.content}>
                      <h3>Phone</h3>
                      <p>+1 (555) 123-4567<br />Mon-Fri, 8am-5pm PST</p>
                    </div>
                  </div>
                </AnimateIn>
                
                <AnimateIn delay={500}>
                  <div className={styles.infoCard}>
                    <div className={styles.icon}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className={styles.content}>
                      <h3>Email</h3>
                      <p>info@agrovision.com<br />support@agrovision.com</p>
                    </div>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <AnimateIn>
            <h2 className={styles.sectionTitle}>Find Us on the <span>Map</span></h2>
          </AnimateIn>
          <AnimateIn delay={200}>
            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179535!2d-73.98784492416407!3d40.74844097138968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629997977658!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                title="Our Location"
              ></iframe>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <AnimateIn>
            <h2 className={styles.sectionTitle}>Frequently Asked <span>Questions</span></h2>
          </AnimateIn>
          
          <div className={styles.faqContainer}>
            {/* AgroVision Service FAQs */}
            <AnimateIn delay={100}>
              <h3 className={styles.faqCategory}>AgroVision Service FAQs</h3>
            </AnimateIn>
            
            <AnimateIn delay={200}>
              <div className={styles.faqItem}>
                <button 
                  className={`${styles.faqQuestion} ${activeFaq === 0 ? styles.active : ''}`}
                  onClick={() => toggleFaq(0)}
                >
                  What types of farms does AgroVision work with?
                  <i className={`fas fa-chevron-down ${activeFaq === 0 ? styles.rotate : ''}`}></i>
                </button>
                <div className={`${styles.faqAnswer} ${activeFaq === 0 ? styles.active : ''}`}>
                  <p>We work with farms of all sizes and types, from small organic operations to large commercial farms. Our solutions are customizable to meet the specific needs of different crops, climates, and farming methods including conventional, organic, hydroponic, and greenhouse operations.</p>
                </div>
              </div>
            </AnimateIn>
            
            <AnimateIn delay={300}>
              <div className={styles.faqItem}>
                <button 
                  className={`${styles.faqQuestion} ${activeFaq === 1 ? styles.active : ''}`}
                  onClick={() => toggleFaq(1)}
                >
                  How quickly can I expect to see results?
                  <i className={`fas fa-chevron-down ${activeFaq === 1 ? styles.rotate : ''}`}></i>
                </button>
                <div className={`${styles.faqAnswer} ${activeFaq === 1 ? styles.active : ''}`}>
                  <p>Most farmers see noticeable improvements within the first growing season, with optimal results typically appearing in the second season as soil health improves. Some crops show immediate benefits in germination rates and early growth.</p>
                </div>
              </div>
            </AnimateIn>
            
            {/* General Agriculture FAQs */}
            <AnimateIn delay={400}>
              <h3 className={styles.faqCategory}>General Agriculture FAQs</h3>
            </AnimateIn>
            
            <AnimateIn delay={500}>
              <div className={styles.faqItem}>
                <button 
                  className={`${styles.faqQuestion} ${activeFaq === 2 ? styles.active : ''}`}
                  onClick={() => toggleFaq(2)}
                >
                  What is sustainable agriculture?
                  <i className={`fas fa-chevron-down ${activeFaq === 2 ? styles.rotate : ''}`}></i>
                </button>
                <div className={`${styles.faqAnswer} ${activeFaq === 2 ? styles.active : ''}`}>
                  <p>Sustainable agriculture refers to farming practices that meet current food and textile needs without compromising the ability of future generations to meet their needs. It integrates three main goals: environmental health, economic profitability, and social equity.</p>
                </div>
              </div>
            </AnimateIn>
            
            <AnimateIn delay={600}>
              <div className={styles.faqItem}>
                <button 
                  className={`${styles.faqQuestion} ${activeFaq === 3 ? styles.active : ''}`}
                  onClick={() => toggleFaq(3)}
                >
                  What is organic farming?
                  <i className={`fas fa-chevron-down ${activeFaq === 3 ? styles.rotate : ''}`}></i>
                </button>
                <div className={`${styles.faqAnswer} ${activeFaq === 3 ? styles.active : ''}`}>
                  <p>Organic farming is a method of farming system which primarily aims to cultivate the land and raise crops in such a way that the soil is kept alive and in good health using organic wastes and other biological materials, avoiding synthetic chemicals.</p>
                </div>
              </div>
            </AnimateIn>
            
            <AnimateIn delay={700}>
              <div className={styles.faqItem}>
                <button 
                  className={`${styles.faqQuestion} ${activeFaq === 4 ? styles.active : ''}`}
                  onClick={() => toggleFaq(4)}
                >
                  What are the major types of irrigation?
                  <i className={`fas fa-chevron-down ${activeFaq === 4 ? styles.rotate : ''}`}></i>
                </button>
                <div className={`${styles.faqAnswer} ${activeFaq === 4 ? styles.active : ''}`}>
                  <p>The major types of irrigation include surface irrigation, sprinkler irrigation, and drip (or trickle) irrigation. Each method has its advantages depending on the crop, soil, and climate.</p>
                </div>
              </div>
            </AnimateIn>
            
            <AnimateIn delay={800}>
              <div className={styles.faqItem}>
                <button 
                  className={`${styles.faqQuestion} ${activeFaq === 5 ? styles.active : ''}`}
                  onClick={() => toggleFaq(5)}
                >
                  What is crop rotation?
                  <i className={`fas fa-chevron-down ${activeFaq === 5 ? styles.rotate : ''}`}></i>
                </button>
                <div className={`${styles.faqAnswer} ${activeFaq === 5 ? styles.active : ''}`}>
                  <p>Crop rotation is a practice of growing different types of crops in the same area in sequential seasons. It helps in maintaining soil fertility and reducing soil erosion and pests.</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <AnimateIn delay={100}>
            <div className={styles.ctaContent}>
              <h2>Still Have Questions?</h2>
              <p>Our agricultural experts are ready to help you find the right solutions.</p>
            </div>
          </AnimateIn>
          <AnimateIn delay={300}>
            <button className={`${styles.btn} ${styles.primaryBtn}`}>Chat With an Expert</button>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
};

export default Contact;