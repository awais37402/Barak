import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import './WaterTreatment.css';
import seedImage from '../assets/product.jpg';

const Magneticwater = () => {
    return (
        <section className="seed-treatment">
            <div className="seed-container">
                <div className="seed-header">
                    <h2 className="seed-title">Seed Treatment Devices</h2>
                    <p className="seed-subtitle">
                        Revolutionary magnetic field technology for enhanced seed performance
                    </p>
                </div>

                <div className="seed-content">
                    <div className="seed-image">
                        <div className="seed-image-wrapper">
                            <img src={seedImage} alt="Seed Treatment Technology" />
                        </div>
                    </div>

                    <div className="seed-details">
                        <p className="seed-description">
                            This technology not only reduces the expenditure on sowing materials by 30-50%, 
                            but it also facilitates earlier harvests. Researchers have conducted experiments 
                            across various regions, yielding promising results. The studies indicate that 
                            seeds treated with a magnetic field exhibit accelerated growth, enhanced 
                            activation processes that expedite protein formation, thereby promoting root 
                            development and stimulating growth also in weaker seeds.
                            <br />
                            <span className="additional-benefits">
                                Improved seed quality, faster development, enhanced vitality
                            </span>
                        </p>

                        <div className="seed-benefits">
                            {[ 
                                "Seed germination rates achieve 80-100%",
                                "Accelerates fertility",
                                "Expedite protein formation",
                                "Provides internal energy that boosts metabolism",
                                "Boosts ion mobility and uptake by seeds",
                                "Enhances resistance to diseases",
                                "Improves resilience against challenging environmental conditions",
                                "Accelerates the protein formation process in plants",
                                "Reduces seed sowing costs by 30-50%",
                                "Facilitates earlier crop ripening",
                                "Increases yield per acre"
                            ].map((benefit, index) => (
                                <div key={index} className="seed-benefit-item">
                                    <div className="seed-benefit-icon">
                                        <FontAwesomeIcon icon={faSeedling} />
                                    </div>
                                    <span className="seed-benefit-text">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Magneticwater;
