import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-grid">
              {/* Brand */}
              <div className="footer-brand">
                <div className="footer-brand-name">HAFEEF<span className="o">.dev</span></div>
                <p className="footer-brand-desc">
                  Building high-performance, visually stunning web experiences. Always open to new collaborations and exciting projects.
                </p>
                <div className="footer-social">
                  <a href="https://github.com/Muhammd-hafeef-th" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub"><FaGithub size={15} /></a>
                  <a href="https://www.linkedin.com/in/hafeef-th-860487315" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn"><FaLinkedin size={15} /></a>
                  <a href="https://www.instagram.com/hafeeff?igsh=MTRobHIwdHZwb3FjYQ==" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram"><FaInstagram size={15} /></a>
                </div>
              </div>

              {/* Navigation */}
              <div>
                <div className="footer-col-title">Navigate</div>
                <div className="footer-links">
                  {['#hero', '#about', '#skills', '#projects', '#contact'].map(href => (
                    <a key={href} href={href} className="footer-link">
                      {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div>
                <div className="footer-col-title">Connect</div>
                <div className="footer-links">
                  <a href="https://github.com/Muhammd-hafeef-th" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                  <a href="https://www.linkedin.com/in/hafeef-th-860487315" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                  <a href="https://www.instagram.com/hafeeff?igsh=MTRobHIwdHZwb3FjYQ==" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
                  <a href="mailto:thhafeef2@gmail.com" className="footer-link">Email</a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p className="footer-copy">© {year} Muhammad Hafeef T H. All rights reserved.</p>
              <p className="footer-made">Designed & Developed by MUHAMMED HAFEEF T H</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <motion.button
        className="scroll-top-fab"
        onClick={scrollTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 220, damping: 18 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </motion.button>
    </>
  );
};

export default Footer;