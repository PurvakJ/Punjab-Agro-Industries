// pages/Home.js
import React from 'react';
import { FaTools, FaTractor, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Professional Trolley Manufacturing Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Enhancing your agricultural productivity with customized trolley solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact" className="btn">
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services">
        <div className="container">
          <h2 className="section-title">Our Modification Services</h2>
          <div className="services-grid">
            <motion.div 
              className="service-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTools className="service-icon" />
              <h3>Trolley Modifications</h3>
              <p>Custom trolley designs for enhanced load capacity and durability to meet your specific farming needs.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTractor className="service-icon" />
              <h3>Hydraulic Systems</h3>
              <p>Upgraded hydraulic systems for better performance and efficiency in all weather conditions.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <FaCogs className="service-icon" />
            <h3>Custom Trolley Modifications</h3>
            <p>
            Modify your trolley size and structure based on your specific agricultural or transport needs. 
            Whether you require extended capacity, reinforced build, or unique dimensions — we've got you covered.
            </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="feature-number">01</div>
              <h3>Expert Technicians</h3>
              <p>Our certified technicians have over 15 years of experience in trolley Manufacturing and modifications.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-number">02</div>
              <h3>Quality Materials</h3>
              <p>We use only premium quality materials that withstand tough farming conditions.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="feature-number">03</div>
              <h3>Warranty</h3>
              <p>All our modifications come with a comprehensive 1-year warranty.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial-item">
              <p className="testimonial-text">
                "Punjab Agro Industries transformed my old trolley into a powerful product. Their trolley modification has doubled my harvest capacity!"
              </p>
              <p className="testimonial-author">- Harpreet Singh, Patiala</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Upgrade Your Trolley?</h2>
            <p>Contact us today for a free consultation and estimate</p>
            <Link to="/contact" className="btn btn-light">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;