import React from 'react';
import Hero from '../components/Hero';
import WaterTreatment from '../components/WaterTreatment';
import WaterBenefits from '../components/WaterBenefits';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <WaterTreatment />
      <WaterBenefits />
      <StatsSection />
      <Testimonials />
    </>
  );
};

export default Home;
