import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-page animate-fade-in">
      <div className="container">
        <h1 className="page-title">Experience</h1>
        <h2 className="page-subtitle">You need it to get the job, but the job's what gives it!</h2>
        <p className="page-description">
          Throughout my journey as a developer, I have had the opportunity to work with cutting-edge technologies while also mastering the fine art of debugging at 2 AM. From building dynamic web applications to deciphering cryptic error messages, my experience has been a mix of structured learning and spontaneous problem-solving. Each project and internship has sharpened my ability to write clean code, collaborate effectively, and most importantly—fix bugs before they fix me.
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-inner"></span>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Associate Engineer Technology · Virtusa</h3>
                <span className="badge">Latest</span>
              </div>
              <span className="timeline-date">Feb 2026 - Present</span>
              <ul className="experience-list">
                <li>Specializing in Java Full Stack development with a primary focus on scalable backend architectures.</li>
                <li>Developing and maintaining robust microservices using Spring Boot and Spring Cloud.</li>
                <li>Optimizing database performance and ensuring seamless integration between frontend and backend components.</li>
                <li>Collaborating with cross-functional teams to deliver high-quality enterprise solutions.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-inner"></span>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Java Full Stack Trainee · Revature</h3>
              </div>
              <span className="timeline-date">Oct 2025 - Jan 2026</span>
              <ul className="experience-list">
                <li>Led the migration of the RevJobs monolithic platform into a domain-driven microservices architecture.</li>
                <li>Implemented fault tolerance using the <strong>Circuit Breaker pattern (Resilience4j)</strong> to prevent cascading failures.</li>
                <li>Developed secure authentication modules using <strong>JWT and Spring Security</strong> for role-based access control.</li>
                <li>Configured robust <strong>CI/CD pipelines</strong> and automated deployments on <strong>AWS EC2</strong> using Docker and Jenkins.</li>
                <li>Designed and optimized <strong>RESTful APIs</strong> and managed hybrid data storage with MySQL and MongoDB.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-footer-nav">
          <Link to="/skills" className="nav-link prev">
            <ArrowLeft size={18} /> Skills & Tools
          </Link>
          <Link to="/education" className="nav-link next">
            Education <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
