import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';
import './Skills.css';

const allSkills = [
  { n: 'React', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', c: '#61DAFB' },
  { n: 'Next.js', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', c: '#ffffff', invertDark: true },
  { n: 'TypeScript', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', c: '#3178C6' },
  { n: 'JavaScript', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', c: '#F7DF1E' },
  { n: 'Tailwind', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', c: '#06B6D4' },
  { n: 'HTML5', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', c: '#E34F26' },
  { n: 'CSS3', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', c: '#1572B6' },
  { n: 'Node.js', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', c: '#339933' },
  { n: 'Express', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', c: '#ffffff', invertDark: true },
  { n: 'FastAPI', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', c: '#009688' },
  { n: 'MongoDB', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', c: '#47A248' },
  { n: 'PostgreSQL', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', c: '#4169E1' },
  { n: 'Socket.io', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg', c: '#ffffff', invertDark: true },
  { n: 'Git', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', c: '#F05032' },
  { n: 'Docker', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', c: '#2496ED' },
  { n: 'AWS', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', c: '#FF9900' },
  { n: 'Figma', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', c: '#F24E1E' },
  { n: 'Postman', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', c: '#FF6C37' },
  { n: 'VS Code', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', c: '#007ACC' },
  { n: 'Vercel', i: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', c: '#ffffff', invertDark: true },
];

const categories = [
  {
    id: 'frontend', icon: Code2, label: 'Frontend',
    skills: allSkills.slice(0, 7)
  },
  {
    id: 'backend', icon: Server, label: 'Backend',
    skills: allSkills.slice(7, 13)
  },
  {
    id: 'tools', icon: Wrench, label: 'Tools & Infra',
    skills: allSkills.slice(13, 20)
  },
];

// Split for dual marquees
const marqueeTop = [...allSkills.slice(0, 10), ...allSkills.slice(0, 10)];
const marqueeBottom = [...allSkills.slice(10, 20), ...allSkills.slice(10, 20)];

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const SkillTile = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="bento-skill-tile"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{ '--hover-color': skill.c }}
    >
      <div className={`tile-icon-wrap ${skill.invertDark ? 'invert-dark' : ''}`}>
        <img src={skill.i} alt={skill.n} className="tile-icon" />
      </div>
      <span className="tile-name">{skill.n}</span>
      
      {/* Dynamic Glow that matches brand color */}
      <motion.div 
        className="tile-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: `radial-gradient(circle, ${skill.c} 0%, transparent 70%)` }}
      />
    </motion.div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="section skills-premium">
      
      <div className="container">
        <motion.div
          className="skills-header-centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <span className="section-label">My Skills</span>
          <h2 className="section-title">The <span className="o">Tech Ecosystem</span></h2>
          <p className="section-sub">A curated stack of modern technologies, heavily optimized for scalability and performance.</p>
        </motion.div>
      </div>

      {/* Cinematic Dual Marquee */}
      <div className="marquee-cinematic-container">
        <div className="marquee-fade-left"></div>
        <div className="marquee-fade-right"></div>
        
        <div className="marquee-track">
          <motion.div 
            className="marquee-inner move-left"
            animate={{ x: [0, -1035] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {marqueeTop.map((s, i) => (
              <div key={`t-${i}`} className="marquee-item">
                <img src={s.i} alt={s.n} className={`marquee-icon ${s.invertDark ? 'invert-dark' : ''}`} />
                <span>{s.n}</span>
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="marquee-track" style={{ marginTop: '1rem' }}>
          <motion.div 
            className="marquee-inner move-right"
            initial={{ x: -1035 }}
            animate={{ x: 0 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {marqueeBottom.map((s, i) => (
              <div key={`b-${i}`} className="marquee-item">
                <img src={s.i} alt={s.n} className={`marquee-icon ${s.invertDark ? 'invert-dark' : ''}`} />
                <span>{s.n}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Glowing Bento Grid Categories */}
      <div className="container" style={{ marginTop: '5rem' }}>
        <div className="bento-skills-grid">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              className="bento-category-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: ci * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="bento-cat-header">
                <div className="bento-cat-icon"><cat.icon size={24} /></div>
                <h3 className="bento-cat-title">{cat.label}</h3>
              </div>
              
              <div className="bento-tiles-grid">
                {cat.skills.map((s) => (
                  <SkillTile key={s.n} skill={s} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Skills;