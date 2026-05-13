import { Link } from 'react-router-dom';
import { EnvelopeSimple, FileArrowDown, ArrowRight } from '@phosphor-icons/react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-banner-wrapper">
        <div className="hero-banner">
          <img 
            src="/banner.png" 
            alt="Architectural Banner" 
            className="banner-image" 
          />
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <div className="banner-text">
              <h3 className="banner-quote">Trust the process.</h3>
              <p className="banner-handle">@Vishnu_Isukapatla</p>
            </div>
          </div>
        </div>
        
        <div className="hero-profile-overlap">
          <div className="hero-profile-container">
            <img src="/profile-photo.png" alt="Vishnu Vardhan" className="hero-profile-img" />
          </div>
        </div>
      </div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-name">Isukapatla Vishnu Vardhan</h1>
          <h2 className="hero-tagline">Associate Engineer – Technology at Virtusa</h2>
          
          <p className="hero-description">
            I am a dedicated <strong>Java Full Stack Developer</strong> specializing in building scalable backend architectures and modern web applications. 
            I enjoy crafting robust solutions using <strong>Spring Boot</strong>, <strong>React</strong>, and <strong>AWS</strong>, while also applying DevOps practices to deliver high-quality, user-centric software.
          </p>
          
          <div className="hero-actions">
            <a href="/Resume.pdf" className="btn-resume" download="Vishnu_Vardhan_Resume.pdf">
              Get Resume <FileArrowDown size={20} weight="bold" />
            </a>
            <Link to="/contact" className="btn-mail">
              <EnvelopeSimple size={20} weight="bold" /> Send Mail
            </Link>
          </div>

          <div className="hero-next">
            <Link to="/projects" className="next-link">
              Explore My Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-bg-accent"></div>
    </section>
  );
};

export default Hero;
