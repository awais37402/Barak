import React from 'react';
import Hero from '../components/Hero';
import WaterTreatment from '../components/WaterTreatment';
import WaterBenefits from '../components/WaterBenefits';
import StatsSection from '../components/StatsSection';

import SurveyDownload from '../components/SurveyDownload';
import Gallery from '../components/Gallery';


const Home = () => {
  return (
    <>
      <Hero />
      <WaterBenefits />
      <WaterTreatment />
      
      <SurveyDownload />
      <StatsSection />
      <Gallery />
      
      
    </>
  );
};

export default Home;
