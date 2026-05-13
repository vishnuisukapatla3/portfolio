import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, GithubLogo, ArrowUpRight } from '@phosphor-icons/react';
import { projectsData } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className="project-detail animate-fade-in">
      <div className="container">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={18} /> Back to projects
        </Link>

        <header className="detail-header">
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-subtitle">{project.description}</p>
          <p className="detail-long-desc">{project.longDescription}</p>
        </header>

        <div className="detail-section">
          <h3 className="section-label">Tech Stack</h3>
          <div className="detail-tech-grid">
            {project.tech.map((t, i) => (
              <span key={i} className="detail-tech-badge">{t}</span>
            ))}
          </div>
        </div>

        <div className="detail-grid">
          <div className="detail-column">
            <h3 className="section-label">Features</h3>
            <ul className="detail-list">
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="detail-column">
            <h3 className="section-label">Challenges</h3>
            <ul className="detail-list">
              {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>

        <div className="detail-grid">
          <div className="detail-column">
            <h3 className="section-label">Learnings</h3>
            <ul className="detail-list">
              {project.learnings.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>
          <div className="detail-column">
            <h3 className="section-label">Feedback</h3>
            <p className="feedback-text">
              For feedback or suggestions, contact me at: <a href="mailto:vishnu.isukapatla3@gmail.com">vishnu.isukapatla3@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="detail-links">
          <h3 className="section-label">Links</h3>
          <div className="links-row">
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-link btn-live">
              Live <ArrowUpRight size={18} />
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-link btn-github">
              Github <GithubLogo size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
