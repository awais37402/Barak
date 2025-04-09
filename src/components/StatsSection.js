import React, { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const statsData = [
  { number: '12,500+', label: 'Acres Managed' },
  { number: '35%', label: 'Average Yield Increase' },
  { number: '200+', label: 'Happy Farmers' },
  { number: '24/7', label: 'Support Available' }
];

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        {statsData.map((stat, idx) => (
          <div
            className={`stat-card ${inView ? 'animate' : ''}`}
            style={{ transitionDelay: `${(idx + 1) * 0.1}s` }}
            key={idx}
          >
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
