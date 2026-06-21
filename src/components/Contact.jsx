import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Cube = ({ cls = '', sizeCls = 'cube-sm', delay = 'd3' }) => (
  <div className={`cube-deco ${sizeCls} cube-${delay} contact-cube ${cls}`}>
    {['front','back','left','right','top','bottom'].map(f => <div key={f} className={`face ${f}`} />)}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    if (!form.name.trim() || /\d/.test(form.name)) { alert('Please enter a valid name.'); return; }
    setStatus('loading');
    const fd = new FormData();
    fd.append('access_key', 'ebd73a9d-d062-43e2-94ab-1c3d03cfd9f0');
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
    setTimeout(() => setStatus(''), 5000);
  };

  const inView = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div {...inView(0)} style={{ marginBottom: '2.5rem' }}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get a <span className="o">Quote</span></h2>
          <p className="section-sub">Have a project idea? Let's talk and bring it to life together.</p>
        </motion.div>

        <div className="contact-frame">
          {/* Left info */}
          <motion.div className="contact-info-panel" {...inView(0.1)}>
            <Cube sizeCls="cube-sm" />
            <h3 className="ci-heading">Let's <span>Connect</span></h3>
            <p className="ci-sub">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

            <div className="ci-rows">
              {[
                { icon: Mail, label: 'Email', val: 'thhafeef2@gmail.com', href: 'mailto:thhafeef2@gmail.com' },
                { icon: Phone, label: 'Phone', val: '+91 8089399521', href: 'tel:+918089399521' },
                { icon: MapPin, label: 'Location', val: 'Irikkur, Kannur, Kerala', href: null },
              ].map(({ icon: Icon, label, val, href }) => (
                <div key={label} className="ci-row">
                  <div className="ci-icon"><Icon size={17} /></div>
                  <div className="ci-text">
                    <span>{label}</span>
                    {href ? <a href={href}>{val}</a> : <p>{val}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="ci-social">
              <a href="https://github.com/Muhammd-hafeef-th" target="_blank" rel="noopener noreferrer" className="ci-social-btn">
                <FaGithub size={14} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/hafeef-th-860487315" target="_blank" rel="noopener noreferrer" className="ci-social-btn">
                <FaLinkedin size={14} /> LinkedIn
              </a>
              <a href="https://www.instagram.com/hafeeff?igsh=MTRobHIwdHZwb3FjYQ==" target="_blank" rel="noopener noreferrer" className="ci-social-btn">
                <FaInstagram size={14} /> Instagram
              </a>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div className="contact-form-panel" {...inView(0.2)}>
            <h3 className="form-heading">Send a Message</h3>
            <p className="form-sub">I'll respond as quickly as possible.</p>

            <form className="contact-form" onSubmit={submit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input type="text" name="name" className="form-input" placeholder="John Doe" required value={form.name} onChange={handle} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" name="email" className="form-input" placeholder="john@example.com" required value={form.email} onChange={handle} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="text" name="subject" className="form-input" placeholder="Project Inquiry / Phone" required value={form.subject} onChange={handle} />
              </div>
              <div className="form-group">
                <label className="form-label">Your Project Message</label>
                <textarea name="message" className="form-textarea" placeholder="Tell me about your project idea..." required value={form.message} onChange={handle} />
              </div>

              {status === 'loading' && <div className="status-msg loading">Sending...</div>}
              {status === 'success' && <div className="status-msg success">✓ Message sent! I'll reply soon.</div>}
              {status === 'error'   && <div className="status-msg error">✕ Something went wrong. Try again.</div>}

              <button type="submit" className="send-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
