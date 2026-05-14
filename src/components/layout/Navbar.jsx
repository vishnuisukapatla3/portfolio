import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { List, MusicNote, Sun, Moon, GithubLogo, X, MagnifyingGlass, CaretRight, ProjectorScreen, IdentificationCard, Code, Briefcase, GraduationCap, ChatCircle, ArrowElbowDownLeft } from '@phosphor-icons/react';
import { projectsData } from '../../data/projects';
import MusicPlayer from '../ui/MusicPlayer';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
  const location = useLocation();
  const navigate = useNavigate();

  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const siteSections = [
    { id: 's1', title: 'Introduction', path: '/', icon: <IdentificationCard size={18} /> },
    { id: 's2', title: 'Projects', path: '/projects', icon: <ProjectorScreen size={18} /> },
    { id: 's3', title: 'Skills & Tools', path: '/skills', icon: <Code size={18} /> },
    { id: 's4', title: 'Experience', path: '/experience', icon: <Briefcase size={18} /> },
    { id: 's5', title: 'Education', path: '/education', icon: <GraduationCap size={18} /> },
    { id: 's6', title: 'Contact', path: '/contact', icon: <ChatCircle size={18} /> },
  ];

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const filteredSections = siteSections.filter(s => s.title.toLowerCase().includes(lowerQuery));
    const filteredProjects = projectsData.filter(p => 
      p.title.toLowerCase().includes(lowerQuery) || 
      p.tech.some(t => t.toLowerCase().includes(lowerQuery))
    ).map(p => ({
      id: p.id,
      title: p.title,
      path: `/projects/${p.slug}`,
      icon: <ProjectorScreen size={18} />,
      subtitle: p.subtitle
    }));

    setSearchResults([...filteredSections, ...filteredProjects]);
    setShowResults(true);
    setSelectedIndex(0);
  }, [searchQuery]);

  const handleSearchKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % searchResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === 'Enter') {
      if (searchResults[selectedIndex]) {
        handleResultSelect(searchResults[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setShowResults(false);
    }
  };

  const handleResultSelect = (item) => {
    navigate(item.path);
    setSearchQuery('');
    setShowResults(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <button className="icon-btn mobile-only" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
          
          <div className="logo-section">
            <CaretRight size={20} weight="bold" className="logo-icon" />
            <Link to="/" className="logo-text">vishnu.is-dev</Link>
          </div>

          <div className="desktop-links desktop-only">
            <Link to="/">Home</Link>
            <a href="https://linkedin.com/in/vishnuisukapatla3" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={`${import.meta.env.BASE_URL}Resume.pdf`} target="_blank" rel="noopener noreferrer">Resume ↗</a>
          </div>
        </div>

        <div className="nav-center desktop-only">
          <div className="search-container">
            <div className="search-bar">
              <MagnifyingGlass size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                onFocus={() => searchQuery && setShowResults(true)}
              />
            </div>

            {showResults && searchResults.length > 0 && (
              <div className="search-dropdown">
                {searchResults.map((item, index) => (
                  <div
                    key={item.id}
                    className={`dropdown-item ${index === selectedIndex ? 'selected' : ''}`}
                    onMouseEnter={() => setSelectedIndex(index)}
                    onClick={() => handleResultSelect(item)}
                  >
                    <span className="item-icon">{item.icon}</span>
                    <div className="item-info">
                      <span className="item-title">{item.title}</span>
                      {item.subtitle && <span className="item-subtitle">{item.subtitle}</span>}
                    </div>
                    {index === selectedIndex && <ArrowElbowDownLeft size={14} className="enter-icon" />}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="nav-right">
          <div className="timer-status desktop-only">
            <span className="status-dot"></span>
            <span className="time-text">{time}</span>
          </div>
          
          <button 
            className={`icon-btn ${isMusicPlaying ? 'active' : ''}`} 
            onClick={() => setIsMusicPlaying(!isMusicPlaying)}
            aria-label="Toggle Music"
          >
            <MusicNote size={20} weight={isMusicPlaying ? "fill" : "regular"} />
          </button>
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="https://github.com/vishnuisukapatla3" target="_blank" rel="noopener noreferrer" className="icon-btn">
            <GithubLogo size={20} />
          </a>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu mobile-only">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Introduction</Link>
            <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
            <Link to="/skills" onClick={() => setMobileMenuOpen(false)}>Skills & Tools</Link>
            <Link to="/experience" onClick={() => setMobileMenuOpen(false)}>Experience</Link>
            <Link to="/education" onClick={() => setMobileMenuOpen(false)}>Education</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
      
      <MusicPlayer isPlaying={isMusicPlaying} />
    </nav>
  );
};

export default Navbar;
