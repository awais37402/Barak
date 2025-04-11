import React from 'react';
import Hero from '../components/Hero';
import WaterTreatment from '../components/WaterTreatment';
import WaterBenefits from '../components/WaterBenefits';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';
import SurveyDownload from '../components/SurveyDownload';


const Home = () => {
  return (
    <>
      <Hero />
      <WaterBenefits />
      <WaterTreatment />
      
      <SurveyDownload />
      <StatsSection />
      
      <Testimonials />
    </>
  );
};

export default Home;
