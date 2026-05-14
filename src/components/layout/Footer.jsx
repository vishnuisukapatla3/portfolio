import { useLocation, Link } from 'react-router-dom';
import './Footer.css';

const ROUTES = [
  { path: '/', name: 'Home' },
  { path: '/skills', name: 'Skills & Tools' },
  { path: '/education', name: 'Education' },
  { path: '/experience', name: 'Experience' },
  { path: '/projects', name: 'Projects' },
  { path: '/contact', name: 'Contact' }
];

const Footer = () => {
  const location = useLocation();
  const currentIndex = ROUTES.findIndex(r => r.path === location.pathname);
  
  const prevRoute = currentIndex > 0 ? ROUTES[currentIndex - 1] : null;
  const nextRoute = currentIndex !== -1 && currentIndex < ROUTES.length - 1 ? ROUTES[currentIndex + 1] : null;

  return (
    <footer className="footer">
      <div className="container footer-container">
        {currentIndex !== -1 && (
          <div className="footer-nav">
            <div className="nav-prev">
              {prevRoute && (
                <Link to={prevRoute.path}>
                  &lt; {prevRoute.name}
                </Link>
              )}
            </div>
            <div className="nav-next">
              {nextRoute && (
                <Link to={nextRoute.path}>
                  {nextRoute.name} &gt;
                </Link>
              )}
            </div>
          </div>
        )}

        <div className="footer-content">
          <p className="developed-by">
            Developed by <strong>Isukapatla Vishnu Vardhan</strong> &middot; Source code available on <a href="https://github.com/vishnuisukapatla3" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
