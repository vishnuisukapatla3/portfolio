import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Code, Database, Cloud, Gear, GitBranch, Globe, Layout, Monitor } from '@phosphor-icons/react';
import './Skills.css';

const skills = [
  { name: 'Java', icon: <Code color="#ED8B00" weight="fill" /> },
  { name: 'Spring Boot', icon: <Code color="#6DB33F" weight="fill" /> },
  { name: 'Spring Security', icon: <Gear color="#6DB33F" weight="fill" /> },
  { name: 'Spring Cloud', icon: <Cloud color="#6DB33F" weight="fill" /> },
  { name: 'Hibernate / JPA', icon: <Database color="#59666C" weight="fill" /> },
  { name: 'ReactJS', icon: <Monitor color="#61DAFB" weight="fill" /> },
  { name: 'JavaScript', icon: <Code color="#F7DF1E" weight="fill" /> },
  { name: 'TypeScript', icon: <Code color="#3178C6" weight="fill" /> },
  { name: 'MySQL', icon: <Database color="#4479A1" weight="fill" /> },
  { name: 'MongoDB', icon: <Database color="#47A248" weight="fill" /> },
  { name: 'AWS (EC2, S3, RDS)', icon: <Cloud color="#FF9900" weight="fill" /> },
  { name: 'Docker', icon: <Cloud color="#2496ED" weight="fill" /> },
  { name: 'Jenkins', icon: <Gear color="#D24939" weight="fill" /> },
  { name: 'CI/CD Pipelines', icon: <Gear color="#333" weight="fill" /> },
  { name: 'Git & GitHub', icon: <GitBranch color="#F05032" weight="fill" /> },
  { name: 'Maven', icon: <Gear color="#C71A36" weight="fill" /> },
  { name: 'JUnit / Mockito', icon: <Code color="#E24D25" weight="fill" /> },
  { name: 'Postman', icon: <Globe color="#FF6C37" weight="fill" /> },
  { name: 'REST APIs', icon: <Layout color="#009688" weight="fill" /> },
  { name: 'HTML5 & CSS3', icon: <Layout color="#E34F26" weight="fill" /> },
  { name: 'Microservices', icon: <Gear color="#4CAF50" weight="fill" /> },
  { name: 'Circuit Breaker (Resilience4j)', icon: <Gear color="#FF5252" weight="fill" /> },
  { name: 'JWT Security', icon: <Gear color="#FFD700" weight="fill" /> },
  { name: 'Agile Scrum', icon: <Layout color="#00BCD4" weight="fill" /> },
];

const Skills = () => {
  return (
    <section className="skills-page animate-fade-in">
      <div className="container">
        <h1 className="page-title">Skills & Tools</h1>
        <h2 className="page-subtitle">Learned by coding all night and debugging all day!</h2>
        
        <p className="page-description">
          As a <strong>Java Full-stack Software Engineer</strong>, I specialize in building scalable web applications using modern technologies such as <strong>Spring Boot</strong>, <strong>React</strong>, and <strong>MySQL</strong>. 
          I'm also expanding my expertise into DevOps and cloud practices to create efficient, maintainable, robust software solutions.
        </p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-badge" key={index}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="section-footer-nav">
          <Link to="/projects" className="nav-link prev">
            <ArrowLeft size={18} /> Projects
          </Link>
          <Link to="/experience" className="nav-link next">
            Experience <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;
