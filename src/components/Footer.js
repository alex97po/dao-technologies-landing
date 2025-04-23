import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">DAO Technologies</h3>
            <p className="footer-description">
              Turn your startup idea into a working product in weeks - not months.
            </p>
          </div>
          
          <div className="footer-legal">
            <h4>Legal Information</h4>
            <p>DAO Education and Technologies FZE-LLC</p>
            <p>Ajman Free Zone C1 Building</p>
            <p>B. C. 1305067</p>
            <p>Ajman UAE</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} DAO Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
