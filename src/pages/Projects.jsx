import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { projectsData } from '../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-page animate-fade-in" id="projects">
      <div className="container">
        <h1 className="page-title">Featured Projects</h1>
        <h2 className="page-subtitle">Built with passion and a lot of coffee!</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <h3 className="project-title-row">
                  <span className="project-title-main">{project.title}</span>
                  <span className="project-title-divider">|</span>
                  <span className="project-title-sub">{project.subtitle}</span>
                </h3>
                
                <p className="project-short-desc">{project.description}</p>
                
                <Link to={`/projects/${project.slug}`} className="learn-more-link">
                  Learn More...
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer-nav">
          <Link to="/" className="nav-link prev">
            <ArrowLeft size={18} /> Introduction
          </Link>
          <Link to="/skills" className="nav-link next">
            Skills & Tools <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
