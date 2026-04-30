import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';
import './Skills.css';

const skillsData = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'TypeScript', category: 'Frontend', icon: '📘' },
  { name: 'JavaScript', category: 'Frontend', icon: '🟡' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: '🎨' },
  { name: 'Framer Motion', category: 'Frontend', icon: '🎭' },
  { name: 'HTML5/CSS3', category: 'Frontend', icon: '🌐' },
  // Backend
  { name: 'Node.js', category: 'Backend', icon: '🟢' },
  { name: 'Express', category: 'Backend', icon: '🚂' },
  { name: 'REST APIs', category: 'Backend', icon: '🔗' },
  { name: 'Socket.io', category: 'Backend', icon: '🔌' },
  { name: 'MongoDB', category: 'Backend', icon: '🍃' },
  { name: 'PostgreSQL', category: 'Backend', icon: '🐘' },
  // Tools & Infra
  { name: 'Git', category: 'Tools & Infra', icon: '📦' },
  { name: 'Docker', category: 'Tools & Infra', icon: '🐳' },
  { name: 'Vercel', category: 'Tools & Infra', icon: '▲' },
  { name: 'Postman', category: 'Tools & Infra', icon: '📮' },
  { name: 'VS Code', category: 'Tools & Infra', icon: '💻' },
  { name: 'Figma', category: 'Tools & Infra', icon: '🎨' },
];

const categoryConfig = {
  'Frontend': { icon: <Code2 />, gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  'Backend': { icon: <Server />, gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  'Tools & Infra': { icon: <Wrench />, gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
};

const Skills = () => {
  const categories = ['Frontend', 'Backend', 'Tools & Infra'];
  
  return (
    <section id="skills" className="section skills">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with to bring ideas to life.</p>
        </motion.div>
      </div>
      
      <div className="skills-container">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category}
            className="skill-category-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
          >
            <div className="skill-category-header">
              <div 
                className="category-icon-bg"
                style={{ background: categoryConfig[category].gradient }}
              >
                {categoryConfig[category].icon}
              </div>
              <h3 className="category-title">{category}</h3>
            </div>
            
            <div className="skills-grid">
              {skillsData
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="skill-card-content">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;