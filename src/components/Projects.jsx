import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Lybros E-Commerce',
    sub: 'A Toronto based e-commerce platform',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    link: null,
    github: 'https://github.com/Muhammd-hafeef-th/Lb-ecommerce.git',
  },
  {
    id: 2,
    title: 'Face-to-Face Video Chat',
    sub: 'Real-time WebRTC video calling app',
    img: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80',
    tags: ['WebRTC', 'Socket.io', 'React', 'Node.js'],
    link: null,
    github: 'https://github.com/Muhammd-hafeef-th/Us.git',
  },
  {
    id: 3,
    title: 'Newstar Events',
    sub: 'Premium event management platform',
    img: '/assets/img/portfolio/newstarInsta.jpg',
    tags: ['Next.js', 'MongoDB', 'REST API', 'Framer Motion', 'SEO'],
    link: 'https://newstarevents.com/',
    github: null,
  },
  {
    id: 4,
    title: 'Roya Global Tourism',
    sub: 'Professional travel booking website',
    img: '/assets/img/portfolio/royaglobal.png',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://roya-toursim.vercel.app/',
    github: null,
  },
  {
    id: 5,
    title: 'Avilo Brand Website',
    sub: 'Premium brand website for Avilo',
    img: '/assets/img/portfolio/avilo.png',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://aviloavil.com',
    github: null,
  },
];

const Projects = () => (
  <section id="projects" className="section projects">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: '2.5rem' }}
      >
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Featured <span className="o">Works</span></h2>
        <p className="section-sub">Real-world products I've designed and engineered — from idea to live deployment.</p>
      </motion.div>

      <div className="projects-row">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="proj-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image */}
            <div className="proj-img-wrap">
              <img src={p.img} alt={p.title} className="proj-img" />
              <div className="proj-overlay" />
              <div className="proj-num">0{i + 1}</div>
              <div className="proj-actions">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-action-btn" aria-label="Live site">
                    <ExternalLink size={13} />
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-action-btn" aria-label="GitHub">
                    <FaGithub size={13} />
                  </a>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="proj-body">
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-sub">{p.sub}</p>
              <div className="proj-tags">
                {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
              </div>
              {(p.link || p.github) && (
                <a
                  href={p.link || p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-view"
                >
                  View live <ArrowRight size={12} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
