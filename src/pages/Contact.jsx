import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeenrgqp";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('idle');
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setStatus('idle');
      alert("Error: Could not connect to Formspree.");
    }
  };

  if (status === 'success') {
    return (
      <section className="contact-page animate-fade-in" id="contact">
        <div className="container contact-container">
          <h1 className="page-title">Thank You!</h1>
          <h2 className="page-subtitle">Your message has been received.</h2>
          <div className="success-message glass-panel">
            <p>I'll get back to you faster than a compiler error!</p>
            <button className="btn btn-primary" onClick={() => setStatus('idle')}>
              Send Another Message
            </button>
          </div>
          <div className="section-footer-nav">
            <Link to="/education" className="nav-link prev">
              <ArrowLeft size={18} /> Education
            </Link>
            <Link to="/" className="nav-link next">
              Home <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-page animate-fade-in" id="contact">
      <div className="container contact-container">
        <h1 className="page-title">Contact</h1>
        <h2 className="page-subtitle">Get in touch before I write another line of code!</h2>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name<span className="required">*</span></label>
            <input 
              type="text" id="name" 
              placeholder="Your name, your fame" 
              required 
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email<span className="required">*</span></label>
            <input 
              type="email" id="email" 
              placeholder="Where can I reach you back?" 
              required 
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message<span className="required">*</span></label>
            <textarea 
              id="message" rows="4" 
              placeholder="Your words, my inbox." 
              required
              value={formState.message}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Submit'}
            </button>
            <button type="reset" className="reset-btn" onClick={() => setFormState({ name: '', email: '', message: '' })}>
              Reset
            </button>
          </div>
        </form>

        <div className="section-footer-nav">
          <Link to="/education" className="nav-link prev">
            <ArrowLeft size={18} /> Education
          </Link>
          <Link to="/" className="nav-link next">
            Home <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
