import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap, Code, Rocket } from 'lucide-react';
import './About.css';

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const Cube = ({ cls = '', sizeCls = 'cube-sm', delay = 'd1' }) => (
  <div className={`cube-deco ${sizeCls} cube-${delay} ${cls}`} style={{ position: 'absolute' }}>
    {['front','back','left','right','top','bottom'].map(f => <div key={f} className={`face ${f}`} />)}
  </div>
);

const About = () => (
  <section id="about" className="section about">
    <div className="container">
      <motion.div {...inView(0)}>
        <span className="section-label">About Me</span>
        <h2 className="section-title">The Person <span className="o">Behind the Code</span></h2>
      </motion.div>

      <div className="about-frame" style={{ marginTop: '2.5rem' }}>
        {/* LEFT */}
        <motion.div className="about-left-card" {...inView(0.1)}>
          <Cube cls="about-cube-1" sizeCls="cube-sm" delay="d2" />

          <div className="about-img-wrap">
            <img src="/ProfileImages/WSFG8803.JPG" alt="Hafeef T H" className="about-img" />
          </div>

          <div className="about-card-title">Muhammad Hafeef T H</div>
          <div className="about-card-role">MERN Stack Developer</div>

          <div className="about-info-rows">
            <div className="info-row">
              <MapPin size={15} />
              <span>Irikkur, Kannur, Kerala</span>
            </div>
            <div className="info-row">
              <Mail size={15} />
              <a href="mailto:thhafeef2@gmail.com">thhafeef2@gmail.com</a>
            </div>
            <div className="info-row">
              <Phone size={15} />
              <a href="tel:+918089399521">+91 8089399521</a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className="about-right">
          {/* Bio */}
          <motion.div className="about-bio-card" {...inView(0.2)}>
            <div className="card-label">Bio</div>
            <h3 className="bio-heading">I will <span className="o">Design & Develop</span> the best websites</h3>
            <p className="bio-text">
              I'm a passionate self-taught MERN stack developer focused on building modern, responsive, and user-friendly web applications. I enjoy turning ideas into real-world digital experiences by combining clean design with efficient code. My journey is driven by continuous learning, consistency, and a strong desire to grow as a developer.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="about-stats">
            {[
              { num: '10+', lbl: 'Projects Built' },
              { num: '1+', lbl: 'Years Learning' },
            ].map((s, i) => (
              <motion.div key={i} className="stat-card" {...inView(0.25 + i * 0.08)}>
                <div className="stat-card-num">{s.num}</div>
                <div className="stat-card-lbl">{s.lbl}</div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div className="edu-card" {...inView(0.35)}>
            <div className="edu-header">
              <GraduationCap size={16} />
              Education & Learning
            </div>
            <div className="edu-timeline">
              {[
                { year: '2024 – Present', school: 'Self-Taught Development', sub: 'MERN Stack, TypeScript, PostgreSQL, Next.js' },
                { year: '2022 – 2024', school: 'Higher Secondary — Computer Commerce', sub: 'KPC HSS Pattanur' },
                { year: '2021 – 2022', school: 'High School', sub: 'GHSS Irikkur' },
              ].map((e, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-dot-col">
                    <div className="edu-dot" />
                    {i < 2 && <div className="edu-dot-line" />}
                  </div>
                  <div className="edu-detail">
                    <div className="edu-year">{e.year}</div>
                    <div className="edu-school">{e.school}</div>
                    <div className="edu-sub">{e.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default About;