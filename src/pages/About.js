// src/pages/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="hero-section">
        <div className="overlay">
          <h1>
            Digitalizing <span className="highlight">Agriculture in Pakistan</span><br />
            and Providing RST Based <span className="highlight">Agriculture Services.</span>
          </h1>
        </div>
      </div>

      <div className="breadcrumb">
        <span>Home</span> / <span className="current">About Us</span>
      </div>

      <div className="about-content">
        <h5 className="section-label">ABOUT</h5>
        <h2 className="section-title">WHO WE ARE</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              GROWTECH Services is a climate smart agricultural-based technology company, providing digital solutions to improve productivity, efficiencies and reduce environmental impact.
            </p>
            <p>
              With comprehensive in-house expertise of agriculture & rural business, climate related risks, technology, finance, agronomy & SW development, Growtech has developed its own solutions to provide sustainable & climate smart agriculture services and to integrate multiple stakeholders including financial sector
            </p>
            <button className="learn-more-btn">Learn More</button>

            <h3>Our Solution</h3>
            <p>
              Our solution helps farmers by using RST based monitoring, machine learning & data analytics and recommendations in order to determine <strong>Soil Organic Carbon, available Nitrogen in the soil, problematic areas, crops health analysis, water stress, management zones and weather forecast.</strong><br />
              <strong>We are committed to increase the productivity & quality of the crops</strong> while minimizing the input cost with <strong>ultimate goal of food security, Water conservation & environment.</strong>
            </p>
            <p>
              Growtech services can help to optimize the use of urea, nitrogenous (20-30%) & phosphorus (15-30%) fertilizers through data driven agronomy practices <span className="highlight-text">Farm Profitability</span>. Our services can also be effective in building up soil organic matter (SOM) through data driven management that will help build soils for exhaustive crops.
            </p>
            <p>
              GROWTECH agronomy team ensures precise management of water and fertilizers through weekly monitoring of crop(s) and identified land boundaries. Digital handholding of growers to ensure precise and timely management of seeding, fertilizers, pesticides, soil and water management to increase productivity and reduce GHG emissions.<br />
              Growtech is already able to create following direct & indirect benefits for growers as well as environment which are aligned with UN SDG2 <strong>(Sustainable Development Goal)</strong>
            </p>
          </div>

          <div className="about-right">
            <ol>
              <li><a href="#">GrowPak Agriculture</a> - provides remote monitoring tools for individual farmers...</li>
              <li><a href="#">GrowPak Store</a> - Agri commerce platform for buying inputs and selling output...</li>
              <li><a href="#">GrowPak eLoan Manager</a> - financial inclusion of unbanked communities...</li>
              <li>Crop Insurance</li>
              <li>Tele-health Insurance</li>
            </ol>
            <img src="https://i.ibb.co/tPD1Bsk/meeting-room.png" alt="meeting" />
          </div>
        </div>

        <div className="sdg-grid">
          {[
            { title: "Food Security", desc: "SDG 2.1, 2.3 Higher Yield" },
            { title: "Food Preference & Healthy Life", desc: "SDG 2.1, 2.2 More Disposable Income" },
            { title: "Water Conservation", desc: "SDG 2.4 Need-based irrigation" },
            { title: "Reduction in GHG Emissions & cost", desc: "SDG 2.4 Optimized use of inputs" },
            { title: "Indirect reduction in Carbon emission", desc: "SDG 2.4 Need-based use of pesticides & fertilizers" },
            { title: "Input cost saving/Yield Improvement", desc: "SDG 2.1, 2.3 Highlighting of Stress areas" },
            { title: "Better Ecosystem", desc: "SDG 2.A Integrated Landscape" },
            { title: "long term land recovery", desc: "SDG 2.A Boundary identification based on soil health status" },
            { title: "Yield/Food security", desc: "SDG 2.A Crops may be rescued based on GROWTECH recommendations" },
          ].map((item, index) => (
            <div className="sdg-card" key={index}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
