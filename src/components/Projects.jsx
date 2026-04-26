import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Lybros E-Commerce',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A fully functional e-commerce platform built with modern web technologies, offering a seamless shopping experience.',
    tags: ['EJS', 'Node.js', 'MongoDB'],
    link: 'https://www.lb-lybros.shop/',
    github: null
  },
  {
    id: 2,
    title: 'Face-to-Face Video Chat (Team Project)',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A collaborative real-time video calling application developed as a team project with a friend, enabling random face-to-face interactions via WebRTC.',
    tags: ['WebRTC', 'Socket.io', 'React', 'Nodejs'],
    link: null,
    github: 'https://github.com/muhammd-hafeef-th'
  },
  {
    id: 3,
    title: 'Admin Dashboard Pro',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive admin dashboard with complex state management, data visualization, and user management.',
    tags: ['React', 'Recharts', 'Tailwind'],
    link: null,
    github: 'https://github.com/muhammd-hafeef-th'
  },
  {
    id: 4,
    title: 'MERN Task Manager',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A productivity application for managing daily tasks with drag-and-drop functionality and user authentication.',
    tags: ['MERN', 'Redux', 'JWT'],
    link: null,
    github: 'https://github.com/muhammd-hafeef-th'
  },
  {
    id: 5,
    title: '7UP Clone',
    image: '/assets/img/portfolio/7UP-Portfolio.jpg',
    description: 'A static web application built with HTML and CSS, designed to replicate the appearance of the original 7UP\'s website.',
    tags: ['HTML5', 'CSS3', 'Responsive'],
    link: 'https://muhammd-hafeef-th.github.io/Seven-up/',
    github: null
  },
  {
    id: 6,
    title: 'Papper Grid Clone',
    image: '/assets/img/portfolio/papper.png',
    description: 'An HTML and CSS-based static web application that mimics the look of the original Tesla website.',
    tags: ['HTML5', 'CSS3'],
    link: 'https://muhammd-hafeef-th.github.io/Pappergrid/',
    github: null
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work and personal projects.</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="Live Demo">
                      <ExternalLink size={22} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="View Source">
                      <FaGithub size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
