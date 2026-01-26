import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Why Veritas', path: '/why-veritas' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on a page with dark hero
  const isOnHero = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navbarClass = [
    'navbar',
    isScrolled ? 'navbar--scrolled' : '',
    !isScrolled && isOnHero ? 'navbar--transparent' : 'navbar--scrolled'
  ].filter(Boolean).join(' ');

  return (
    <header className={navbarClass}>
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-text">VERITAS</span>
          <span className="navbar__logo-sub">CONSULTING</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navbar__link ${location.pathname === item.path ? 'navbar__link--active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="navbar__cta">
            <Link to="/contact" className="btn btn--primary btn--sm">
              Partner With Us <ArrowRight size={16} />
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="navbar__mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="navbar__mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="navbar__mobile-header">
                <button
                  className="navbar__mobile-close"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="navbar__mobile-nav">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`navbar__mobile-link ${location.pathname === item.path ? 'navbar__mobile-link--active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  style={{ marginTop: 'var(--spacing-4)' }}
                >
                  <Link to="/contact" className="btn btn--primary" style={{ width: '100%' }}>
                    Partner With Us <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
