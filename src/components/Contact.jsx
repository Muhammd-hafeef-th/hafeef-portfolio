import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('hiii');
    if (formData.name.trim() === '' || /\d/.test(formData.name)) {
      alert("Please enter a valid name without numbers.");
      return;
    }

    setStatus('loading');

    const formPayload = new FormData();
    formPayload.append("access_key", "ebd73a9d-d062-43e2-94ab-1c3d03cfd9f0");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("subject", formData.subject);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus('error');
    }
    
    setTimeout(() => {
      if(status === 'success' || status === 'error') setStatus('');
    }, 5000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Feel free to reach out—I'd love to hear from you!</p>
        </motion.div>
      </div>

      <div className="contact-split">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-intro">
            <div className="intro-icon">
              <MessageCircle size={48} />
            </div>
            <h3>Let's Connect</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <div className="item-icon">
                <Mail size={20} />
              </div>
              <div className="item-content">
                <span className="item-label">Email</span>
                <a href="mailto:thhafeef2@gmail.com" className="item-value">thhafeef2@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="item-icon">
                <Phone size={20} />
              </div>
              <div className="item-content">
                <span className="item-label">Phone</span>
                <a href="tel:+918089399521" className="item-value">+91 8089399521</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="item-icon">
                <MapPin size={20} />
              </div>
              <div className="item-content">
                <span className="item-label">Location</span>
                <span className="item-value">Irikkur, Kannur, Kerala</span>
              </div>
            </div>
          </div>

          <div className="contact-social-links">
            <a href="https://github.com/Muhammd-hafeef-th" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaGithub size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/hafeef-th-860487315" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaLinkedin size={20} />
              LinkedIn
            </a>
            <a href="https://www.instagram.com/hafeeff?igsh=MTRobHIwdHZwb3FjYQ==" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaInstagram size={20} />
              Instagram
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <div className="form-header">
            <h4>Send a Message</h4>
          </div>
          <div className="form-body">
            <div className="form-row">
              <div className="form-field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-field">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {status === 'loading' && <div className="status-msg loading">Sending...</div>}
          {status === 'success' && <div className="status-msg success">Message sent successfully!</div>}
          {status === 'error' && <div className="status-msg error">Error sending message</div>}

          <button type="submit" className="send-btn" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
