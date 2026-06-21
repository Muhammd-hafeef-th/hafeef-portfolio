import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Lybros E-Commerce',
    sub: 'A completely custom, high-performance e-commerce platform built for a Toronto-based retailer. Features advanced cart management and a gorgeous modern UI.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    link: null,
    github: 'https://github.com/Muhammd-hafeef-th/Lb-ecommerce.git',
  },
  {
    id: 2,
    title: 'Face-to-Face Video',
    sub: 'A seamless real-time video calling application leveraging WebRTC and Socket.io for instantaneous, low-latency peer-to-peer communication.',
    img: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=1200&q=80',
    tags: ['WebRTC', 'Socket.io', 'React', 'Node.js'],
    link: null,
    github: 'https://github.com/Muhammd-hafeef-th/Us.git',
  },
  {
    id: 3,
    title: 'Newstar Events',
    sub: 'A premium, highly-interactive event management platform. Architected with Next.js for flawless SEO and enhanced with Framer Motion physics.',
    img: '/assets/img/portfolio/newstarInsta.jpg',
    tags: ['Next.js', 'MongoDB', 'Framer Motion', 'SEO'],
    link: 'https://newstarevents.com/',
    github: null,
  },
  {
    id: 4,
    title: 'Roya Global Tourism',
    sub: 'A professional travel and tourism booking website designed to convert visitors with stunning visuals and an incredibly fast, fluid user experience.',
    img: '/assets/img/portfolio/royaglobal.png',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://roya-toursim.vercel.app/',
    github: null,
  },
  {
    id: 5,
    title: 'Avilo Brand Identity',
    sub: 'A sleek, corporate landing page and brand identity website for Avilo. Focused entirely on typography, whitespace, and brand storytelling.',
    img: '/assets/img/portfolio/avilo.png',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://aviloavil.com',
    github: null,
  },
];

/* ── 3D Tilt Wrapper Component ── */
const TiltImage = ({ src, alt }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse position to rotation angle (max 8 degrees)
  const rotateX = useTransform(y, [-300, 300], [8, -8]);
  const rotateY = useTransform(x, [-300, 300], [-8, 8]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    // Calculate distance from center
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="showcase-img-tilt-container"
      style={{ perspective: 1200 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="showcase-img-inner"
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <img src={src} alt={alt} />
        {/* Shine glare effect based on mouse movement */}
        <motion.div
          className="showcase-glare"
          style={{
            background: useTransform(
              [x, y],
              ([latestX, latestY]) => `radial-gradient(circle at ${latestX + 300}px ${latestY + 300}px, rgba(255,255,255,0.15) 0%, transparent 60%)`
            )
          }}
        />
      </motion.div>
    </motion.div>
  );
};


const Projects = () => {
  return (
    <section id="projects" className="section projects-editorial">
      <div className="container">

        {/* Header Section */}
        <motion.div
          className="projects-header-centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Selected <span className="o">Cases</span></h2>
          <p className="section-sub">A curated selection of my most recent and ambitious engineering projects.</p>
        </motion.div>

        {/* Editorial Showcase Rows */}
        <div className="showcase-list">
          {projects.map((p, i) => {
            const isReverse = i % 2 !== 0;

            return (
              <div key={p.id} className={`showcase-row ${isReverse ? 'reverse' : ''}`}>

                {/* 3D Image Half */}
                <div className="showcase-visual">
                  <TiltImage src={p.img} alt={p.title} />
                </div>

                {/* Typography Half */}
                <div className="showcase-content">


                  <motion.h3
                    className="showcase-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {p.title}
                  </motion.h3>

                  <motion.p
                    className="showcase-sub"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {p.sub}
                  </motion.p>

                  <motion.div
                    className="showcase-tags"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {p.tags.map(t => <span key={t} className="showcase-tag">{t}</span>)}
                  </motion.div>

                  <motion.div
                    className="showcase-actions"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {(p.link || p.github) && (
                      <a
                        href={p.link || p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="showcase-btn"
                      >
                        View Case Study <ArrowRight size={16} />
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="showcase-icon-btn" aria-label="GitHub">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="showcase-icon-btn" aria-label="Live Site">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
