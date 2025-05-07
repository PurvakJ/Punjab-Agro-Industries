import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>PUNJAB AGRO INDUSTRIES</h3>
          <p>03ACCPJ5936E3ZX</p>
          <p>OPP. JAGDAMBAY COLONY, SEHAJPURA ROAD</p>
          <p>Samana (147101), Distt Patiala</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: +91 81468 96807</p>
          <p>Email: punjabagroindustries@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Punjab Agro Industries. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
