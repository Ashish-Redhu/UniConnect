import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h3>About University</h3>
            <p>
              Our university provides top-quality education and offers a wide range of programs for students. We focus on holistic development and innovative learning techniques.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Admissions</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Departments</a></li>
              <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Information</h3>
            <p>123 University St, City, State</p>
            <p>Email: info@university.edu</p>
            <p>Phone: +1 234 567 8900</p>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.linkedin.com/in/ashish-redhu/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="https://github.com/Ashish-Redhu" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} UniConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
