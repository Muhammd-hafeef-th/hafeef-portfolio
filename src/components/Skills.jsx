import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import './Skills.css';

const skillsData = [
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'C / C++', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'MongoDB', category: 'Database' },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with to bring ideas to life.</p>
      </div>
      
      <div className="skills-bento">
        {skillsData.map((skill, index) => (
          <motion.div 
            className="skill-badge" 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
          >
            <div className="skill-icon-wrapper">
              <Code2 size={20} />
            </div>
            <div className="skill-details">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-category">{skill.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
