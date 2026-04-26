import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, Code2, Briefcase, GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A brief overview of who I am and my journey.</p>
      </div>

      <div className="bento-grid">
        {/* Main Bio Card */}
        <motion.div
          className="bento-card bio-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="card-header">
            <div className="icon-box"><Briefcase size={20} /></div>
            <h3>MERN Stack Developer</h3>
          </div>
          <p className="bio-text">
            I specialize in creating visually stunning, highly interactive web applications that offer seamless user experiences. With a strong focus on both design and functionality, I bring together my skills in front-end and back-end development to craft applications that are robust, responsive, and optimized for performance across all devices.
          </p>
        </motion.div>

        {/* Profile Image Card */}
        <motion.div
          className="bento-card image-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <img src="/ProfileImages/WSFG8803.JPG" alt="Hafeef T H" className="bento-profile-img" />
        </motion.div>

        {/* Quick Info Cards */}
        <motion.div
          className="bento-card info-card-small"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <MapPin size={24} className="bento-icon" />
          <div>
            <span className="info-label">Location</span>
            <span className="info-value">Kannur, Kerala</span>
          </div>
        </motion.div>

        <motion.div
          className="bento-card info-card-small"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Mail size={24} className="bento-icon" />
          <div>
            <span className="info-label">Email</span>
            <span className="info-value text-sm">thhafeef2@gmail.com</span>
          </div>
        </motion.div>

        {/* Education Timeline Card */}
        <motion.div
          className="bento-card education-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="card-header">
            <div className="icon-box"><GraduationCap size={20} /></div>
            <h3>Education</h3>
          </div>
          <div className="edu-list">
            <div className="edu-item">
              <span className="edu-year">2022 - 2024</span>
              <h4>Higher Secondary (+2 Computer Commerce)</h4>
              <p>KPC HSS Pattanur</p>
            </div>
            <div className="edu-item">
              <span className="edu-year">2021 - 2022</span>
              <h4>High School</h4>
              <p>GHSS Irikkur</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
