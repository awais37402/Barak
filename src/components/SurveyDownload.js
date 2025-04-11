import React from 'react';
import { motion } from 'framer-motion';
import './SurveyDownload.css';

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
        href="https://docs.google.com/forms/d/e/1FAIpQLSc7NOvWuB_NC3E9bYriVLQopmFNHJDAOI0vnqKIT5u9qvXwyg/viewform?pli=1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="download-button"
      >
        Fill Out Survey Form
      </a>
    </motion.div>
  );
};

export default SurveyDownload;
