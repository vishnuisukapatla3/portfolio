import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Education from './pages/Education';
import ProjectDetail from './pages/ProjectDetail';
import './styles/App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <Sidebar />
        <div className="app-container">
          <Navbar />
          <main className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
