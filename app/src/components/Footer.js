
import React from 'react';
import '../assets/styles/Footer.css';
const Footer = () => {
  return (
    <footer className="footerBody">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>© 2024 PERTApp. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="social-links">
              <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
