import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="hero-gradient"></div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-text-container"
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="pulse-dot"></span> Available for Freelance
          </motion.div>

          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="text-gradient">Muhammad Hafeef T H</span>
          </h1>

          <div className="hero-typing-wrapper">
            <span className="static-text">I build </span>
            <TypeAnimation
              sequence={[
                'modern web applications.',
                2000,
                'scalable MERN stacks.',
                2000,
                'seamless user experiences.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="typing-text"
              repeat={Infinity}
            />
          </div>

          <p className="hero-description">
            A passionate MERN Stack Developer specialized in crafting visually stunning and highly interactive web solutions.
          </p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="#projects" className="btn-primary btn-large">View My Work</a>
            <div className="hero-socials">
              <a href="https://github.com/Muhammd-hafeef-th" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={22} /></a>
              <a href="https://www.linkedin.com/in/hafeef-th-860487315" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={22} /></a>
              <a href="https://www.instagram.com/hafeeff?igsh=MTRobHIwdHZwb3FjYQ==" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={22} /></a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
