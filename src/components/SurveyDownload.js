import React from 'react';
import { motion } from 'framer-motion';
import './SurveyDownload.css';
import surveyDoc from '../assets/Magnetic Yield Alliance - Survey Form.docx';

const SurveyDownload = () => {
  return (
    <motion.div 
      className="survey-download-container"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      <h2 className="survey-download-title">
        Magnetic Yield Alliance <br /> Survey Form
      </h2>

      <a 
        href={surveyDoc} 
        download 
        className="download-button"
      >
        Download Survey Form
      </a>
    </motion.div>
  );
};

export default SurveyDownload;
