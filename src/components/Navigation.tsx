import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Member Profile', path: '/members' },
    { label: 'Events', path: '/events' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Videos', path: '/videos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-black tracking-tighter focus:outline-none focus:ring-2 focus:ring-primary rounded uppercase transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'
              }`}
          >
            Honeydew<span className="text-primary">Crew</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-label={`Navigate to ${item.label} page`}
                aria-current={isActive(item.path) ? 'page' : undefined}
                className={`transition-all duration-300 text-sm font-bold tracking-widest uppercase hover:-translate-y-0.5 ${isActive(item.path)
                    ? 'text-primary'
                    : isScrolled
                      ? 'text-foreground/80 hover:text-foreground'
                      : 'text-white/90 hover:text-white'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div ref={menuRef} className="absolute right-0 top-0 h-full w-full max-w-sm bg-background border-l border-border shadow-2xl focus:outline-none flex flex-col justify-center">
            <div className="flex flex-col gap-8 p-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={`Navigate to ${item.label} page`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                  className={`text-4xl font-black tracking-tighter uppercase transition-colors duration-300 ${isActive(item.path) ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
