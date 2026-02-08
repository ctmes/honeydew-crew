import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    const isValid = validateEmail(value);
    setIsValidEmail(isValid);
    if (value && !isValid) {
      setErrorMessage('Please enter a valid email address');
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidEmail) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
        setIsValidEmail(false);
      }, 3000);
    }
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Member Profile', path: '/members' },
    { label: 'Events', path: '/events' },
    { label: 'Videos', path: '/videos' },
  ];

  return (
    <footer className="bg-foreground text-background py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Left: Brand & Tagline */}
        <div className="space-y-6 max-w-sm">
          <Link to="/" className="inline-block">
            <span className="text-5xl md:text-6xl font-black tracking-tighter uppercase mix-blend-difference leading-none">
              Honeydew<br /><span className="text-primary">Crew</span>
            </span>
          </Link>
          <p className="text-lg font-medium text-background/60 leading-snug">
            We don't need a stage.<br />
            Bringing street dance to the world.
          </p>
        </div>

        {/* Right: Connect & Subscribe */}
        <div className="flex flex-col gap-10 w-full md:w-auto">

          {/* Social Links - Clean Text */}
          <div className="flex flex-wrap gap-8 text-sm font-bold tracking-widest uppercase">
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/honeydewcrew_perth/?hl=en' },
              { label: 'Twitter', href: '#' },
              { label: 'Youtube', href: '#' },
              { label: 'Contact', href: 'mailto:contact@honeydewcrew.com' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-0.5"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Minimal Newsletter */}
          <div className="w-full md:w-[400px]">
            <form onSubmit={handleSubmit} className="relative group">
              <div className="flex items-center border-b-2 border-background/20 group-focus-within:border-primary transition-colors duration-300 pb-2">
                <input
                  type="email"
                  placeholder="Join our mailing list"
                  value={email}
                  onChange={handleEmailChange}
                  className="flex-1 bg-transparent text-background placeholder:text-background/40 text-lg font-medium focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!isValidEmail || isSubmitted}
                  className="text-primary hover:text-white transition-colors disabled:opacity-50"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
              {isSubmitted && (
                <div className="absolute top-full left-0 mt-2 text-primary font-bold uppercase tracking-wide text-xs">Subscribed!</div>
              )}
              {errorMessage && (
                <div className="absolute top-full left-0 mt-2 text-red-500 font-bold uppercase tracking-wide text-xs">{errorMessage}</div>
              )}
            </form>
          </div>

          {/* Copyright */}
          <div className="text-xs font-bold uppercase tracking-widest text-background/30 mt-4 md:mt-auto">
            &copy; {new Date().getFullYear()} Honeydew Crew.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
