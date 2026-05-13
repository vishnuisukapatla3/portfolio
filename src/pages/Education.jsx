import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import './Education.css';

const Education = () => {
  return (
    <section className="education-page animate-fade-in">
      <div className="container">
        <h1 className="page-title">Education</h1>
        <h2 className="page-subtitle">I learned a lot, but the real learning happens in the code editor!</h2>

        <p className="page-description">
          My academic journey in Information Technology has provided me with a solid theoretical foundation and practical skills in software engineering, data structures, and computer networks. I am passionate about applying these principles to build robust and efficient systems.
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-inner"></span>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>B.Tech in Information Technology</h3>
                <span className="badge">Latest</span>
              </div>
              <span className="timeline-date">2020 – 2024</span>
              <p>
                <strong>SRKR Engineering College, Bhimavaram</strong>
                <br />
                Focused on core IT subjects, software engineering, and application development.
                <br />
                <strong>CGPA: 7.22</strong>
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-inner"></span>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Intermediate (Maths & Science)</h3>
              </div>
              <span className="timeline-date">2018 – 2020</span>
              <p>
                <strong>Sri Chaitanya Junior College, Kakinada</strong>
                <br />
                Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry.
                <br />
                <strong>CGPA: 8.42</strong>
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon-inner"></span>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>S.S.C. (Secondary School Certificate)</h3>
              </div>
              <span className="timeline-date">2018</span>
              <p>
                <strong>Vaidhin Public School, Mummidivaram</strong>
                <br />
                Foundation schooling with excellence in core subjects.
                <br />
                <strong>CGPA: 9.7</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="section-footer-nav">
          <Link to="/experience" className="nav-link prev">
            <ArrowLeft size={18} /> Experience
          </Link>
          <Link to="/contact" className="nav-link next">
            Contact <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Education;
