import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Layers, Brain, Globe } from 'lucide-react';
import './Experience.css';

const items = [
  { title: 'E-Commerce Platforms', icon: ShoppingCart, desc: 'Built scalable online stores with secure payment gateways, inventory management, and seamless checkout with real-time order tracking.' },
  { title: 'API Architecture', icon: Layers, desc: 'Designed RESTful APIs with authentication, rate limiting, and error handling. Created microservices for scalable applications with third-party integrations.' },
  { title: 'AI Integration', icon: Brain, desc: 'Integrated AI/ML models for chatbots, recommendation systems, and automated content generation using OpenAI APIs and custom ML pipelines.' },
  { title: 'Full-Stack Applications', icon: Globe, desc: 'End-to-end web applications from concept to deployment — React frontends, Node.js backends, MongoDB & PostgreSQL databases.' },
];

const Experience = () => (
  <section id="experience" className="section experience">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">Experience</span>
        <h2 className="section-title">What I <span className="o">Work On</span></h2>
        <p className="section-sub">Domains I've mastered to deliver exceptional, scalable digital solutions.</p>
      </motion.div>

      <div className="exp-grid">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="exp-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5 }}
          >
            <div className="exp-ghost-num">0{i + 1}</div>
            <div className="exp-icon">
              <item.icon size={22} />
            </div>
            <h3 className="exp-title">{item.title}</h3>
            <p className="exp-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
