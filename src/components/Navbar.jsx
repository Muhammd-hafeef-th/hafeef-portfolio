import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          HAFEEF<span>.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="nav-menu">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link btn-nav">Contact</a>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" className="mobile-link" onClick={closeMenu}>About</a>
        <a href="#skills" className="mobile-link" onClick={closeMenu}>Skills</a>
        <a href="#projects" className="mobile-link" onClick={closeMenu}>Projects</a>
        <a href="#contact" className="mobile-link" onClick={closeMenu}>Contact</a>
      </div>
    </header>
  );
};

export default Navbar;
