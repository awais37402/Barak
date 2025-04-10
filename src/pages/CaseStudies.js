import React, { useEffect, useRef, useState } from 'react';
import './CaseStudies.css';
import jojobaStudy from '../assets/1.pdf';
import aridRegionsStudy from '../assets/2.pdf';
import vegetableCropsStudy from '../assets/3.pdf';
import onionStudy from '../assets/4.pdf';
import wheatSeedsStudy from '../assets/5.pdf';
import fabaBeanStudy from '../assets/6.pdf';
import brackishWaterStudy from '../assets/7.pdf';
import soilMineralsStudy from '../assets/8.pdf';
import wheatProductionStudy from '../assets/9.pdf';
import chickpeaStudy from '../assets/10.pdf';

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const modalRef = useRef(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Effects of magnetically treated water on Jojoba plants',
      description: 'Study on biological effects of magnetically treated water under different water regimes on Jojoba plants.',
      authors: 'Mulook Al-Khazan, Batoul Mohamed Abdullatif, Nabila Al-Assaf',
      institution: 'King Abdul Aziz University, Saudi Arabia',
      abstract: 'In this study, the biological effects of magnetically treated water (MTW) under different water regimes (70, 50, and 30% SWHC) on water relations, photosynthetic pigments and nutrient contents of Jojoba plants has been studied under laboratory conditions.',
      pdfUrl: jojobaStudy,
      year: '2011'
    },
    {
      id: 2,
      title: 'Magnetic water application in arid regions',
      description: 'Research on producing more food from less water in arid regions using magnetic water technology.',
      authors: 'Mahmoud HOZAYN, Amany Attia ABD EL MONEM, Tarek ABD EL-FATAH ELWIA, Maha Mohamed EL-SHATAR',
      institution: 'National Research Centre, Egypt & Tabuk University, Saudi Arabia',
      abstract: 'A great challenge for the agricultural sector is to produce more food from less water, particularly in arid and semi-arid regions which suffer from water scarcity.',
      pdfUrl: aridRegionsStudy,
      year: '2015'
    },
    {
      id: 3,
      title: 'Magnetic treatment of irrigation water on vegetable crops',
      description: 'Effects on vegetable crop yield and water productivity in Australia.',
      authors: 'Basant L. Maheshwari, Harsharn Singh Grewal',
      institution: 'University of Western Sydney, Australia',
      abstract: 'This study examines whether there are any beneficial effects of magnetic treatment of different irrigation water types on water productivity and yield of snow pea, celery and pea plants. Long spell of drought and competing water demands in most parts of Australia have put enormous pressure on water resources.',
      pdfUrl: vegetableCropsStudy,
      year: '2009'
    },
    {
      id: 4,
      title: 'Effect of magnetic field on germination and growth of onion',
      description: 'Study on stimulation of germination process using magnetic fields.',
      authors: 'Hozayn M., Amal A. A., EL-Mahdy, Abdel-Rahman H. M. H.',
      institution: 'National Research Centre, Egypt & Agriculture Research Centre, Egypt',
      abstract: 'Magnetic field is considered a simple and cheap method for stimulation of germination process compared to traditional chemical processes. This research investigated the effects on onion (Allium cepa L.) germination, seedling growth and cytogenetic characteristics.',
      pdfUrl: onionStudy,
      year: '2015'
    },
    {
      id: 5,
      title: 'Changes in germination behavior of wheat seeds',
      description: 'Impact of magnetized seed and water on wheat germination.',
      authors: 'Babar Ijaz, Shakeel Ahmad Jatoi, Dawood Ahmad, M. Shahid Masood, Sadar Uddin Siddiqui',
      institution: 'University of Agriculture, Faisalabad & NARC, Islamabad, Pakistan',
      abstract: 'To study the invigoration impact of magnetized seed and water on germination, wheat seeds with low viability (45%) were subjected to magnetization treatments. Results showed significant improvement in germination rates and seedling vigor.',
      pdfUrl: wheatSeedsStudy,
      year: '2012'
    },
    {
      id: 6,
      title: 'Effect of magnetically treated water on faba bean growth',
      description: 'Pot experiment investigating growth and composition of faba beans.',
      authors: 'Research Team',
      institution: 'Agricultural Research Institution',
      abstract: 'A pot experiment was conducted to investigate the effect of irrigation with different magnetized water on faba bean (Vicia faba L) growth and composition. Results demonstrated improved growth parameters and nutrient uptake with magnetically treated water.',
      pdfUrl: fabaBeanStudy,
      year: '2013'
    },
    {
      id: 7,
      title: 'Magnetic technologies for brackish water irrigation',
      description: 'Correcting underground brackish water for irrigation in arid ecosystems.',
      authors: 'M. M. Selim',
      institution: 'National Research Centre, Egypt',
      abstract: 'While water on a global scale is plentiful, 97% is saline and 2.5% is trapped in glaciers and ice, leaving only 0.75% available in fresh water aquifers. This study explores magnetic treatment as a method to make brackish water suitable for irrigation.',
      pdfUrl: brackishWaterStudy,
      year: '2016'
    },
    {
      id: 8,
      title: 'Effect on translocation of minerals in soil',
      description: 'Research on how magnetically treated water affects soil mineral movement.',
      authors: 'Rami Noran, Uri Shani, Israel Lin',
      institution: 'University of Haifa & Technion, Israel',
      abstract: 'Magnetically treated water (MTW) is water passed through a magnetic field before being used. This study investigated its effects on mineral translocation in soil and subsequent plant availability, showing improved nutrient mobility.',
      pdfUrl: soilMineralsStudy,
      year: '1995'
    },
    {
      id: 9,
      title: 'Magnetic water for wheat crop production',
      description: 'Enhancing wheat production through magnetic water technology.',
      authors: 'Mahmoud Hozayn, Amira Mohamed Saeed Abdul Qados',
      institution: 'National Research Centre, Egypt & Princess Nora University, Saudi Arabia',
      abstract: 'The technology of magnetic water has widely studied and adopted in field of agriculture in many countries (Australia, USA, China and Japan). This research demonstrates its effectiveness in improving wheat (Triticum aestivum L.) growth and yield parameters.',
      pdfUrl: wheatProductionStudy,
      year: '2016'
    },
    {
      id: 10,
      title: 'Magnetic water enhances chickpea yield',
      description: 'Improving growth, chemical constituents and yield of chickpeas.',
      authors: 'Mahmoud Hozayn, Amira Mohamed Saeed Abdul Qados',
      institution: 'National Research Centre, Egypt & Princess Nora University, Saudi Arabia',
      abstract: 'Magnetic fields are known to induce biochemical changes and could be used as a stimulator for growth related reactions. Two pot experiments demonstrated significant improvements in chickpea (Cicer arietinum L.) growth and yield when irrigated with magnetically treated water.',
      pdfUrl: chickpeaStudy,
      year: '2010'
    }
  ];

  useEffect(() => {
    if (selectedStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedStudy]);

  const closeModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedStudy(null);
    }
  };

  return (
    <div className="case-studies-container">
      <div className="header-background">
        <h2 className="case-studies-header">Research Case Studies</h2>
        <p className="case-studies-subheader">
          Explore our collection of scientific studies on magnetic water treatment in agriculture.
        </p>
      </div>
      
      <div className="case-studies-grid">
        {caseStudies.map((study) => (
          <div 
            key={study.id} 
            className="case-study-card"
            onClick={() => setSelectedStudy(study)}
          >
            <div className="case-study-id">#{study.id.toString().padStart(2, '0')}</div>
            <h3 className="case-study-title">{study.title}</h3>
            <p className="case-study-description">{study.description}</p>
            <div className="case-study-meta">
              <span className="year-badge">{study.year}</span>
              <span className="view-details">View Details →</span>
            </div>
          </div>
        ))}
      </div>

      {selectedStudy && (
        <div className="case-study-modal" onClick={closeModal}>
          <div className="modal-content" ref={modalRef}>
            <button className="close-modal" onClick={() => setSelectedStudy(null)}>×</button>
            <h2>{selectedStudy.title}</h2>
            <div className="study-authors">
              <strong>Authors:</strong> {selectedStudy.authors}
            </div>
            <div className="study-institution">
              <strong>Institution:</strong> {selectedStudy.institution}
            </div>
            <div className="study-year">
              <strong>Year:</strong> {selectedStudy.year}
            </div>
            <div className="study-abstract">
              <h3>Abstract</h3>
              <p>{selectedStudy.abstract}</p>
            </div>
            <a 
              href={selectedStudy.pdfUrl} 
              className="download-pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Full PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;