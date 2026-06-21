import React, { useState, useEffect } from 'react';
import { Sun, Moon, Zap } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Intersection observer for active link
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            {/* Logo */}
            <a href="#hero" className="nav-logo">
              HAFEEF<span className="logo-o">.</span>dev
            </a>

            {/* Desktop Links */}
            <nav className="nav-links">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`nav-link ${active === l.href.slice(1) ? 'active' : ''}`}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="nav-actions">
              <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </button>
              <a href="#contact" className="nav-hire">
                <Zap size={14} /> Hire Me
              </a>
              <button
                className={`menu-btn ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Menu"
              >
                <span className="menu-line" />
                <span className="menu-line" />
                <span className="menu-line" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={close} />

      {/* Mobile drawer */}
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={close} aria-label="Close">✕</button>
        <div className="nav-logo" style={{ marginBottom: '1.5rem' }}>
          HAFEEF<span className="logo-o">.</span>dev
        </div>
        {links.map(l => (
          <a key={l.href} href={l.href} className="mobile-link" onClick={close}>
            {l.label}
          </a>
        ))}
        <div className="mobile-socials">
          <a href="https://github.com/Muhammd-hafeef-th" target="_blank" rel="noopener noreferrer" className="mobile-social-icon"><FaGithub size={16} /></a>
          <a href="https://www.linkedin.com/in/hafeef-th-860487315" target="_blank" rel="noopener noreferrer" className="mobile-social-icon"><FaLinkedin size={16} /></a>
          <a href="https://www.instagram.com/hafeeff?igsh=MTRobHIwdHZwb3FjYQ==" target="_blank" rel="noopener noreferrer" className="mobile-social-icon"><FaInstagram size={16} /></a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
