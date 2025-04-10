import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './WaterTreatment.css';
import seedImage from '../assets/water.jpg';

const WaterTreatment = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const benefitVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    };

    return (
        <motion.section 
            className="seed-treatment"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <div className="seed-container">
                <motion.div className="seed-header" variants={itemVariants}>
                    <motion.h2 
                        className="seed-title"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: { duration: 0.6 }
                            }
                        }}
                    >
                        Water Treatment Devices
                    </motion.h2>
                    <motion.p 
                        className="seed-subtitle"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: { delay: 0.4, duration: 0.6 }
                            }
                        }}
                    >
                        Revolutionary magnetic field technology for enhanced seed performance
                    </motion.p>
                </motion.div>

                <motion.div className="seed-content" variants={itemVariants}>
                    <div className="seed-image">
                        <motion.div 
                            className="seed-image-wrapper"
                            initial={{ scale: 1.05 }}
                            animate={inView ? { scale: 1 } : {}}
                            transition={{ duration: 1 }}
                        >
                            <img src={seedImage} alt="Seed Treatment Technology" />
                        </motion.div>
                    </div>

                    <div className="seed-details">
                        <motion.p 
                            className="seed-description"
                            variants={itemVariants}
                        >
                            This technology not only reduces the expenditure on sowing materials by 30-50%, 
                            but it also facilitates earlier harvests. Researchers have conducted experiments 
                            across various regions, yielding promising results. The studies indicate that 
                            seeds treated with a magnetic field exhibit accelerated growth, enhanced 
                            activation processes that expedite protein formation, thereby promoting root 
                            development and stimulating growth also in weaker seeds.
                        </motion.p>
                        
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
                                <motion.div 
                                    key={index} 
                                    className="seed-benefit-item"
                                    variants={benefitVariants}
                                    custom={index}
                                >
                                    <div className="seed-benefit-icon">
                                        <FontAwesomeIcon icon={faSeedling} />
                                    </div>
                                    <span className="seed-benefit-text">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default WaterTreatment;
