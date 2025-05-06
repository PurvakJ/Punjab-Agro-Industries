import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Punjab Agro Industries</h1>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Punjab Agro Industries was established with a vision to revolutionize 
            agricultural machinery in the region. Starting as a small workshop, we 
            have grown into a trusted name for trolley modifications in Punjab.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To provide farmers with customized, high-quality trolley modifications 
            that enhance productivity, reduce operational costs, and improve 
            efficiency in agricultural operations.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Facility</h2>
          <p>
            Located at OPP. JAGDAMBAY COLONY, SEHAJPURA ROAD, Samana (147101), 
            Distt Patiala, our state-of-the-art facility is equipped with modern 
            tools and machinery to handle all types of trolley modifications.
          </p>
          <p>
            GSTIN: 03ACCPJ5936E3ZX
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;