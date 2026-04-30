import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Lybros E-Commerce',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A fully functional e-commerce platform built with modern web technologies, offering a seamless shopping experience.',
    tags: ['EJS', 'Node.js', 'MongoDB','Js','Tailwind Css'],
    link: 'https://www.lb-lybros.shop/',
    github: null
  },
{
  id: 2,
  title: 'Face-to-Face Video Chat',
  image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  description: 'A collaborative real-time video calling application built with WebRTC, enabling random face-to-face interactions. Developed as a team project with a focus on real-time communication, performance, and seamless user experience.',
  tags: ['WebRTC', 'Socket.io', 'React', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'Node.js'],
  link: null,
  github: 'https://github.com/Muhammd-hafeef-th/Us.git'
},
  {
    id: 3,
    title: 'Admin Dashboard Pro',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive admin dashboard with complex state management, data visualization, and user management.',
    tags: ['React', 'Recharts', 'Tailwind','Js','MongoDB','Node.js'],
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
  title: 'Avilo Brand Website',
  image: '/assets/img/portfolio/avilo.png',
  description: 'A premium brand website for Avilo Banana Avil Milk, designed with modern UI, smooth animations, and responsive layout to deliver a rich digital experience.',
  tags: ['React', 'Vite', 'Tailwind CSS'],
  link: 'https://aviloavil.com',
  github: null
 },
  {
    id: 6,
    title: '7UP Clone',
    image: '/assets/img/portfolio/7UP-Portfolio.jpg',
    description: 'A static web application designed to replicate the appearance of the original 7UP website.',
    tags: ['HTML5', 'CSS3', 'Responsive','Tailwind Css'],
    link: 'https://muhammd-hafeef-th.github.io/Seven-up/',
    github: null
  }
  
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work and personal projects.</p>
        </motion.div>
      </div>

      <div className="projects-list">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-row"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="project-index">
              <span>0{index + 1}</span>
            </div>
            <div className="project-content">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-meta">
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="project-arrow">
              <ArrowRight size={24} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
