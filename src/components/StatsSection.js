import React, { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const statsData = [
  { number: 12500, label: 'Acres Managed' },
  { number: 35, label: 'Average Yield Increase', isPercentage: true },
  { number: 200, label: 'Happy Farmers' },
  { number: 24, label: 'Support Available', suffix: '/7' }
];

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

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

  useEffect(() => {
    if (inView) {
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
    }
  }, [inView]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        {statsData.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-number">
              {stat.isPercentage
                ? `${counts[idx]}%`
                : `${counts[idx].toLocaleString()}${stat.suffix || ''}`}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
