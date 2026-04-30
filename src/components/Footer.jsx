import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Heart, ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo / Brand */}
          <div className="footer-brand">
            <h3 className="footer-logo">Hafeef<span className="logo-accent">.dev</span></h3>
            <p className="footer-tagline">Building modern web experiences</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4 className="footer-heading">Connect With Me</h4>
            <div className="social-icons">
              <a href="https://github.com/Muhammd-hafeef-th" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/hafeef-th-860487315" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="https://www.instagram.com/hafeeff?igsh=MTRobHIwdHZwb3FjYQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Muhammad Hafeef T H. All rights reserved.
          </p>
          <p className="made-with">
            Made with <Heart size={14} className="heart-icon" /> in Kannur, Kerala
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button 
        className="scroll-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;