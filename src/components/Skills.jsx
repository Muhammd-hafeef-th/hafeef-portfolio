import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';
import './Skills.css';

const allSkills = [
  { n: 'React', e: '⚛️' }, { n: 'Next.js', e: '⛳' }, { n: 'TypeScript', e: '📘' },
  { n: 'JavaScript', e: '🟡' }, { n: 'Tailwind CSS', e: '🎨' }, { n: 'Framer Motion', e: '🎭' },
  { n: 'HTML5 / CSS3', e: '🌐' }, { n: 'Node.js', e: '🟢' }, { n: 'FastAPI', e: '⚡' },
  { n: 'Express', e: '🚂' }, { n: 'MongoDB', e: '🍃' }, { n: 'PostgreSQL', e: '🐘' },
  { n: 'Socket.io', e: '🔌' }, { n: 'Git', e: '📦' }, { n: 'Docker', e: '🐳' },
  { n: 'Vercel', e: '▲' }, { n: 'Figma', e: '🎨' }, { n: 'Postman', e: '📮' }, { n: 'AWS', e: '☁️' }, { n: 'Stitch', e: '🎨' }
];

// duplicate for infinite marquee
const marqueeItems = [...allSkills, ...allSkills];

const categories = [
  {
    id: 'frontend', cls: 'cat-frontend', icon: Code2, label: 'Frontend',
    skills: [
      { n: 'React', e: '⚛️' }, { n: 'Next.js', e: '⛳' }, { n: 'TypeScript', e: '📘' },
      { n: 'JavaScript', e: '🟡' }, { n: 'Tailwind CSS', e: '🎨' }, { n: 'Framer Motion', e: '🎭' },
      { n: 'HTML5 / CSS3', e: '🌐' },
    ],
  },
  {
    id: 'backend', cls: 'cat-backend', icon: Server, label: 'Backend',
    skills: [
      { n: 'Node.js', e: '🟢' }, { n: 'FastAPI', e: '⚡' }, { n: 'Express', e: '🚂' },
      { n: 'REST APIs', e: '🔗' }, { n: 'Socket.io', e: '🔌' }, { n: 'MongoDB', e: '🍃' },
      { n: 'PostgreSQL', e: '🐘' },
    ],
  },
  {
    id: 'tools', cls: 'cat-tools', icon: Wrench, label: 'Tools & Infra',
    skills: [
      { n: 'Git', e: '📦' }, { n: 'Docker', e: '🐳' }, { n: 'Vercel', e: '▲' },
      { n: 'Postman', e: '📮' }, { n: 'Figma', e: '🎨' }, { n: 'VS Code', e: '💻' }, { n: 'AWS', e: '☁️' }, { n: 'Stitch', e: '🎨' }
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section skills">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: '2rem' }}
      >
        <span className="section-label">My Skills</span>
        <h2 className="section-title">Technical <span className="o">Arsenal</span></h2>
        <p className="section-sub">Technologies and tools I wield to build bold, production-ready products.</p>
      </motion.div>

      {/* Marquee strip */}
      <motion.div
        className="skills-marquee-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="skills-marquee">
          {marqueeItems.map((s, i) => (
            <div key={i} className="skill-badge">
              <span className="sb-emoji">{s.e}</span>
              {s.n}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Categorized */}
      <div className="skills-cats">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.id}
            className={cat.cls}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: ci * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="skill-cat-header">
              <div className="cat-icon"><cat.icon size={17} /></div>
              <span className="cat-title">{cat.label}</span>
              <div className="cat-sep" />
            </div>
            <div className="skill-pills">
              {cat.skills.map((s, si) => (
                <motion.div
                  key={s.n}
                  className="skill-pill"
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: ci * 0.08 + si * 0.04 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  <span className="sp-emoji">{s.e}</span>
                  {s.n}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;