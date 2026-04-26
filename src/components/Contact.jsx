import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
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
    
    // Validation
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
    
    // Reset status after 5 seconds
    setTimeout(() => {
      if(status === 'success' || status === 'error') setStatus('');
    }, 5000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-header">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Feel free to reach out—I'd love to hear from you!</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-container">
          <div className="contact-info">
            <motion.div className="info-card glass-card" whileHover={{ y: -5 }}>
              <div className="info-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div>
                <h3>Address</h3>
                <p>Irikkur, Kannur, Kerala-670593</p>
              </div>
            </motion.div>

            <motion.div className="info-card glass-card" whileHover={{ y: -5 }}>
              <div className="info-icon-wrapper">
                <Phone size={24} />
              </div>
              <div>
                <h3>Call or Whatsapp</h3>
                <p>+91 8089399521</p>
              </div>
            </motion.div>

            <motion.div className="info-card glass-card" whileHover={{ y: -5 }}>
              <div className="info-icon-wrapper">
                <Mail size={24} />
              </div>
              <div>
                <h3>Email</h3>
                <p>thhafeef2@gmail.com</p>
              </div>
            </motion.div>

            <div className="map-container glass-card">
              <iframe 
                title="map" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15611.350658229216!2d75.55621079999999!3d11.985732300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4373ef7058ff7%3A0x12cab345adc57c32!2sIrikkur%2C%20Kerala%20670593!5e0!3m2!1sen!2sin!4v1736691526820!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-wrapper glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  rows="6" 
                  placeholder="Message" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {status === 'loading' && <div className="status loading">Sending message...</div>}
              {status === 'success' && <div className="status success">Your message has been sent. Thank you!</div>}
              {status === 'error' && <div className="status error">Error sending message. Please try again.</div>}

              <button type="submit" className="btn-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
