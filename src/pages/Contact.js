import React from 'react';
import ReviewForm from '../components/ReviewForm';
import './Contact.css';

const Contact = () => {
  return (
<div className="contact-page">
  <section className="map-section">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13800.65170370016!2d76.18279887289276!3d30.14675759795345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911cd37431369dd%3A0xfc199a8864d888f8!2sJAGDAMBAY%20MACHINERY%20STORE!5e0!3m2!1sen!2sin!4v1746542804500!5m2!1sen!2sin"
      width="100%" 
      height="450" 
      style={{ border: '0' }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Map Location"
    ></iframe>
  </section>

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch for your trolley modification needs</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Our Location</h2>
          <p><strong>Address:</strong> OPP. JAGDAMBAY COLONY, SEHAJPURA ROAD, Samana (147101), Distt Patiala</p>
          <p><strong>Phone:</strong> +91 81468 96807</p>
          <p><strong>Email:</strong> punjabagroindustries@gmail.com</p>
          <p><strong>GSTIN:</strong> 03ACCPJ5936E3ZX</p>

          <h2>Business Hours</h2>
          <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      <section className="review-section">
        <h2>Customer Feedback</h2>
        <ReviewForm />
      </section>
    </div>
  );
};

export default Contact;