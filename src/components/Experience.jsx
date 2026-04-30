import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Layers, Brain, Globe, ChevronRight } from 'lucide-react';
import './Experience.css';

const experienceData = [
  {
    title: 'E-Commerce',
    icon: ShoppingCart,
    description: 'Built scalable online stores with secure payment gateways, inventory management systems, and seamless checkout experiences. Implemented cart functionality, product filtering, and order tracking with real-time updates.',
  },
  {
    title: 'API Architecture',
    icon: Layers,
    description: 'Designed and developed RESTful APIs with proper authentication, rate limiting, and error handling. Created microservices architecture for scalable applications and integrated third-party APIs for enhanced functionality.',
  },
  {
    title: 'AI Integration',
    icon: Brain,
    description: 'Integrated AI/ML models into web applications for intelligent features like chatbots, recommendation systems, and automated content generation. Worked with OpenAI APIs and custom ML models for predictive analytics.',
  },
  {
    title: 'Full-Stack Web Apps',
    icon: Globe,
    description: 'Developed end-to-end web applications from concept to deployment. Built responsive frontends with React, robust backends with Node.js, and managed databases with MongoDB and PostgreSQL for complete solutions.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Domains I've worked in and technologies I've mastered to deliver exceptional solutions.</p>
        </motion.div>
      </div>
      
      <div className="timeline">
        <div className="timeline-line"></div>
        {experienceData.map((exp, index) => (
          <motion.div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-icon">
                <exp.icon size={24} />
              </div>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-arrow">
                <ChevronRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
