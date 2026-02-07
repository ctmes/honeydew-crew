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
    { label: 'Videos', path: '/videos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f0f0f]/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wider text-white focus:outline-2 focus:outline-[#9dff00] focus:outline-offset-2 rounded">
            HONEYDEW<span className="text-[#9dff00]"> CREW</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-label={`Navigate to ${item.label} page`}
                aria-current={isActive(item.path) ? 'page' : undefined}
                className={`transition-colors duration-200 text-xl font-extrabold tracking-wider uppercase focus:outline-2 focus:outline-[#9dff00] focus:outline-offset-2 rounded px-2 py-1 ${
                  isActive(item.path) ? 'text-[#9dff00]' : 'text-[#e0e0e0] hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-2 focus:outline-[#9dff00] focus:outline-offset-2 rounded p-1"
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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div ref={menuRef} className="absolute right-0 top-0 h-full w-64 bg-[#0f0f0f] backdrop-blur-md shadow-2xl focus:outline-none">
            <div className="flex flex-col gap-4 p-8 mt-20">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={`Navigate to ${item.label} page`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                  className={`transition-colors duration-200 text-left text-2xl font-extrabold tracking-wider uppercase focus:outline-2 focus:outline-[#9dff00] focus:outline-offset-2 rounded px-2 py-1 ${
                    isActive(item.path) ? 'text-[#9dff00]' : 'text-[#e0e0e0] hover:text-[#9dff00]'
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
