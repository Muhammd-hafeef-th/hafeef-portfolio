import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShoppingCart, Layers, Brain, Globe, LayoutDashboard, TrendingUp } from 'lucide-react';
import './Experience.css';

const items = [
  {
    title: 'E-Commerce Platforms',
    icon: ShoppingCart,
    desc: 'Built highly scalable online stores with secure payment gateways, inventory management, and seamless checkout flows with real-time order tracking.',
    color: '#FF6B6B'
  },
  {
    title: 'API Architecture',
    icon: Layers,
    desc: 'Designed robust RESTful APIs with advanced authentication, rate limiting, and error handling. Created microservices for scalable applications.',
    color: '#4ECDC4'
  },
  {
    title: 'AI Integration',
    icon: Brain,
    desc: 'Integrated sophisticated AI/ML models for intelligent chatbots, recommendation systems, and automated content generation using OpenAI APIs.',
    color: '#FFE66D'
  },
  {
    title: 'Full-Stack Applications',
    icon: Globe,
    desc: 'Delivered end-to-end web applications from concept to deployment utilizing React frontends, Node.js backends, MongoDB & PostgreSQL databases.',
    color: '#307643ff'
  },
  {
    title: 'SEO & Performance Optimization',
    icon: TrendingUp,
    desc: 'Optimized websites for search engines and performance through technical SEO, sitemap generation, metadata management, image optimization, Core Web Vitals improvements, and PWA implementation.',
    color: '#8338EC'
  },
];

const Card = ({ item, i, progress, range, targetScale }) => {
  const containerRef = useRef(null);

  // Smoothly scale down the card as the next one scrolls over it
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.5]);

  // 3D Tilt Effect on Hover
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rY = ((mouseX / width) - 0.5) * 10; // Max rotation 10deg
    const rX = ((mouseY / height) - 0.5) * -10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="card-wrapper" style={{ top: `calc(15vh + ${i * 40}px)` }}>
      <motion.div
        style={{ scale, opacity, transformStyle: "preserve-3d" }}
        className="card-motion-container"
      >
        <motion.div
          ref={containerRef}
          className="exp-animated-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ '--card-accent': item.color }}
        >
          <div className="card-glow" />

          <div className="card-content-layout">
            <div className="card-left">
              <div className="exp-icon-wrapper" style={{ color: item.color, borderColor: item.color }}>
                <item.icon size={32} />
              </div>

            </div>

            <div className="card-right">
              <h3 className="exp-title">{item.title}</h3>
              <p className="exp-desc">{item.desc}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="experience" className="section experience-animated">
      <div className="container">
        <motion.div
          className="exp-header-centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">What I <span className="o">Work On</span></h2>
          <p className="section-sub">Scroll down to explore the domains I've mastered to deliver exceptional, scalable digital solutions.</p>
        </motion.div>
      </div>

      {/* The Scroll Container for Stacking Cards */}
      <div ref={containerRef} className="cards-scroll-container container">
        {items.map((item, i) => {
          const targetScale = 1 - ((items.length - i) * 0.05);
          const rangeStart = i * (1 / items.length); // Dynamically calculate based on number of items
          const range = [rangeStart, 1]; // Trigger scale animation when scrolled past this card

          return (
            <Card
              key={i}
              i={i}
              item={item}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
