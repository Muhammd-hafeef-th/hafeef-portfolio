import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, GraduationCap, Code, Target } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A brief overview of who I am and my journey.</p>
        </motion.div>
      </div>

      <div className="about-split">
        <motion.div 
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-image-wrapper">
            <div className="about-image">
              <img src="/ProfileImages/WSFG8803.JPG" alt="Hafeef T H" />
            </div>
            <div className="image-decoration"></div>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={20} />
              <span>Kannur, Kerala</span>
            </div>
            <div className="contact-item">
              <Mail size={20} />
              <span>thhafeef2@gmail.com</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="about-content">
            <h3 className="about-heading">MERN Stack Developer</h3>
            <p className="about-text">
              I am a passionate self-taught MERN stack developer focused on building modern, responsive, and user-friendly web applications. I enjoy turning ideas into real-world digital experiences by combining clean design with efficient code. My journey is driven by continuous learning, consistency, and a strong desire to grow as a developer.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <Code size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Built</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Target size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Years of Learning & Practice</span>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h4 className="section-heading">
                <GraduationCap size={20} />
                Education
              </h4>
              <div className="education-list">
                <div className="education-item">
                  <span className="edu-year">2022 - 2024</span>
                  <div className="edu-details">
                    <h5>Higher Secondary (+2 Computer Commerce)</h5>
                    <p>KPC HSS Pattanur</p>
                  </div>
                </div>
                <div className="education-item">
                  <span className="edu-year">2021 - 2022</span>
                  <div className="edu-details">
                    <h5>High School</h5>
                    <p>GHSS Irikkur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Self Learning Section */}
            <div className="education-section">
              <h4 className="section-heading">
                <Code size={20} />
                Self Learning Journey
              </h4>
              <div className="education-list">
                <div className="education-item">
                  <span className="edu-year">2024 - Present</span>
                  <div className="edu-details">
                    <h5>Self-Taught MERN Stack Development</h5>
                    <p>
                    Specializing in full-stack development with the MERN stack, complemented by TypeScript, PostgreSQL, and Tailwind CSS. Passionate about building scalable, high-performance applications with clean architecture, modern UI, and efficient backend systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;