import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Code2 } from 'lucide-react';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const About = () => {
  return (
    <section id="about" className="section about-compact">
      <div className="about-bg-glow"></div>

      <div className="container">

        {/* Section Header */}
        <motion.div
          className="about-header-centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">The Person <span className="o">Behind the Code</span></h2>
        </motion.div>

        {/* 2x2 Compact Grid */}
        <motion.div
          className="about-grid-2x2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >

          {/* Row 1, Col 1: Image & Identity */}
          <motion.div variants={fadeUp} className="about-card image-card">
            <img src="/ProfileImages/WSFG8803.JPG" alt="Muhammad Hafeef T H" className="grid-img" />
            <div className="grid-img-overlay">
              <h3 className="glass-name">Muhammad Hafeef</h3>
              <p className="glass-role">Full Stack Developer</p>
              <div className="glass-contact">
                <a href="mailto:thhafeef2@gmail.com" aria-label="Email" className="glass-icon"><Mail size={16} /></a>
                <a href="tel:+918089399521" aria-label="Phone" className="glass-icon"><Phone size={16} /></a>
                <span className="glass-loc"><MapPin size={16} /> Kerala, India</span>
              </div>
            </div>
          </motion.div>

          {/* Row 1, Col 2: Bio / Description */}
          <motion.div variants={fadeUp} className="about-card bio-card">
            <h3 className="card-headline">
              Driven by passion.<br />
              <span className="o">Guided by logic.</span>
            </h3>
            <div className="card-text-content">
              <p className="card-lead">
                I design & develop digital experiences that inspire. I am a passionate, self-taught developer who thrives on turning complex problems into elegant, user-friendly solutions.
              </p>
              <p className="card-text">
                My journey into programming started with a profound curiosity for how things work on the web. Since then, I've dedicated myself to mastering the MERN stack, Next.js, and modern UI architectures. I believe in writing clean, scalable code and continuously pushing the boundaries of web experiences.
              </p>
            </div>
          </motion.div>

          {/* Row 2, Col 1: The Journey (Timeline) */}
          <motion.div variants={fadeUp} className="about-card journey-card">
            <h3 className="card-title">Education & Journey</h3>
            <div className="card-timeline">
              {[
                { year: '2024 – Present', title: 'Self-Taught Development', desc: 'MERN Stack, Next.js, React, TailwindCSS, PostgreSQL' },
                { year: '2022 – 2024', title: 'Higher Secondary (Commerce)', desc: 'KPC HSS Pattanur — Building foundational skills.' },
                { year: '2021 – 2022', title: 'High School', desc: 'GHSS Irikkur — Where the curiosity began.' },
              ].map((item, i) => (
                <div className="timeline-row" key={i}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-info">
                    <span className="timeline-year">{item.year}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Row 2, Col 2: By the Numbers (Stats) */}
          <motion.div variants={fadeUp} className="about-card stats-card">
            <h3 className="card-title">By the Numbers</h3>
            <div className="stats-2x2">
              <div className="stat-box">
                <div className="stat-num">20+</div>
                <div className="stat-lbl">Projects Completed</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">1+</div>
                <div className="stat-lbl">Years Experience</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">100%</div>
                <div className="stat-lbl">Self-Taught</div>
              </div>
              <div className="stat-box">
                <div className="stat-num"><Code2 size={28} className="o" /></div>
                <div className="stat-lbl">Clean Code Advocate</div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;