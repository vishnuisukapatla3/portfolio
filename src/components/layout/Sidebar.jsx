import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar desktop-only">
      <div className="sidebar-content">
        <div className="sidebar-profile">
          <img src="/profile-photo.png" alt="Vishnu Vardhan" className="sidebar-avatar" />
          <div className="sidebar-info">
            <h2 className="sidebar-name">Vishnu Vardhan</h2>
            <p className="sidebar-role">Java Developer</p>
          </div>
        </div>
        <h3 className="sidebar-title">Sections</h3>
        <nav className="sidebar-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Introduction</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>Skills & Tools</NavLink>
          <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>Experience</NavLink>
          <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>Education</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
