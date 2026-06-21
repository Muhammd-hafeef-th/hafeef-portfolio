import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

/* ── 3D Cube helper ─────────────────────────────────────── */
const Cube = ({ cls = '', sizeCls = '', delayCls = 'd1' }) => (
  <div className={`cube-deco ${sizeCls} ${delayCls} ${cls}`}>
    <div className="face front" />
    <div className="face back" />
    <div className="face left" />
    <div className="face right" />
    <div className="face top" />
    <div className="face bottom" />
  </div>
);

/* ── Animation variants ─────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          className="hero-frame"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative 3D cubes */}
          <Cube cls="hero-cube-1" sizeCls="cube-lg" delayCls="cube-d1" />
          <Cube cls="hero-cube-2" sizeCls="cube-sm" delayCls="cube-d2" />
          <Cube cls="hero-cube-3" sizeCls="cube-sm" delayCls="cube-d3" />

          {/* Left Social Bar */}
          <div className="hero-social-bar">
            <motion.a
              href="https://www.instagram.com/hafeeff?igsh=MTRobHIwdHZwb3FjYQ=="
              target="_blank" rel="noopener noreferrer"
              className="hero-social-icon"
              {...fadeUp(0.6)} whileHover={{ scale: 1.15 }} aria-label="Instagram"
            >
              <FaInstagram size={15} />
            </motion.a>
            <motion.a
              href="https://github.com/Muhammd-hafeef-th"
              target="_blank" rel="noopener noreferrer"
              className="hero-social-icon"
              {...fadeUp(0.7)} whileHover={{ scale: 1.15 }} aria-label="GitHub"
            >
              <FaGithub size={15} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/hafeef-th-860487315"
              target="_blank" rel="noopener noreferrer"
              className="hero-social-icon"
              {...fadeUp(0.8)} whileHover={{ scale: 1.15 }} aria-label="LinkedIn"
            >
              <FaLinkedin size={15} />
            </motion.a>
          </div>

          {/* Main Content */}
          <div className="hero-content">
            <motion.div className="hero-hello" {...fadeUp(0.2)}>
              <span className="hello-line" />
              Hello
            </motion.div>

            <motion.h1 className="hero-title" {...fadeUp(0.3)}>
              I'm{' '}
              <span className="name-highlight">
                Muhammad<br />Hafeef T H
              </span>
            </motion.h1>

            <motion.div className="hero-typing" {...fadeUp(0.4)}>
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer', 2200,
                  'Full-Stack Engineer', 2200,
                  'UI/UX Enthusiast', 2200,
                  'Freelance Developer', 2200,
                ]}
                wrapper="span"
                speed={52}
                deletionSpeed={65}
                repeat={Infinity}
              />
              <span className="typing-cursor" />
            </motion.div>

            <motion.p className="hero-desc" {...fadeUp(0.5)}>
              A full stack developer based in Kannur, Kerala — building modern, scalable web applications with clean design and powerful backends.
            </motion.p>

            <motion.div className="hero-btns" {...fadeUp(0.6)}>
              <a href="#projects" className="btn btn-orange">
                View My Work <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </motion.div>

            <motion.div className="hero-stats" {...fadeUp(0.7)}>
              <div>
                <div className="stat-num">20+</div>
                <div className="stat-lbl">Projects Delivered</div>
              </div>
              <div className="stat-divider" />
              <div>
                <div className="stat-num">1+</div>
                <div className="stat-lbl">Years Experience</div>
              </div>
              <div className="stat-divider" />
              <div>
                <div className="stat-num">5+</div>
                <div className="stat-lbl">Live Products</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-avatar-container">
              <img
                src="/hero_3d_avatar_transparent.png"
                alt="3D Developer Avatar (Dark)"
                className="hero-3d-avatar hero-avatar-dark"
              />
              <img
                src="/hero_avatar_light.png"
                alt="3D Developer Avatar (Light)"
                className="hero-3d-avatar hero-avatar-light"
              />
              <motion.div 
                className="hero-badge"
                initial={{ opacity: 0, y: 20, x: "-50%", scale: 0.8 }}
                animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(255, 107, 107, 0.15)" }}
                style={{ overflow: "hidden", minWidth: "180px", display: "flex", justifyContent: "center" }}
              >
                <motion.span 
                  className="badge-dot" 
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  style={{ marginRight: "8px" }}
                />
                
                <div style={{ position: "relative", height: "18px", width: "160px", overflow: "hidden" }}>
                  <motion.div
                    animate={{ y: ["0px", "-18px", "-36px"] }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "anticipate",
                      times: [0, 0.45, 0.9]
                    }}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", display: "flex", flexDirection: "column" }}
                  >
                    <span style={{ height: "18px", lineHeight: "18px", display: "block", textAlign: "left", whiteSpace: "nowrap" }}>Available for Freelance</span>
                    <span style={{ height: "18px", lineHeight: "18px", display: "block", textAlign: "left", whiteSpace: "nowrap" }}>Open to Opportunities</span>
                    <span style={{ height: "18px", lineHeight: "18px", display: "block", textAlign: "left", whiteSpace: "nowrap" }}>Available for Freelance</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll cue */}
          <div className="scroll-cue">
            <div className="scroll-line" />
            scroll down
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;