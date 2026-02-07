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
    <footer className="relative bg-[#0f0f0f] border-t border-[#9dff00]/20">
      <div className="noise-texture absolute inset-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight uppercase">
            Stay <span className="text-[#9dff00]">Connected</span>
          </h3>
          <p className="text-[#e0e0e0] mb-8 max-w-md mx-auto">
            Subscribe to our newsletter for updates on new covers, events, and workshops
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    aria-invalid={email && !isValidEmail ? 'true' : 'false'}
                    aria-describedby={email && !isValidEmail ? 'email-error' : undefined}
                    className={`bg-white/5 border-2 backdrop-blur-sm text-white placeholder:text-[#e0e0e0]/50 h-12 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#9dff00] focus:ring-offset-2 focus:ring-offset-[#0f0f0f] ${
                      isValidEmail
                        ? 'border-[#9dff00]'
                        : email
                        ? 'border-red-500'
                        : 'border-white/10'
                    }`}
                  />
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center bg-[#9dff00] rounded-lg"
                    >
                      <span className="text-black font-semibold">Subscribed! ✓</span>
                    </motion.div>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={!isValidEmail || isSubmitted}
                  aria-label={isSubmitted ? 'Successfully subscribed' : 'Subscribe to newsletter'}
                  className="bg-[#9dff00] hover:bg-[#9dff00]/90 text-black h-12 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 neon-glow-green disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-[#9dff00] focus:ring-offset-2 focus:ring-offset-[#0f0f0f]"
                >
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Button>
              </div>
              {errorMessage && (
                <div id="email-error" className="text-red-500 text-sm font-semibold">
                  {errorMessage}
                </div>
              )}
            </div>
          </form>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold tracking-wider text-white mb-4">
              HONEYDEW<span className="text-[#9dff00]"> CREW</span>
            </div>
            <p className="text-[#e0e0e0] mb-6 max-w-sm">
              A high-energy dance collective bringing K-pop and J-pop performances to life.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-[#9dff00] transition-all duration-200 hover:scale-105 neon-glow-green focus:outline-2 focus:outline-[#9dff00] focus:outline-offset-2 rounded-full"
              >
                <Instagram className="w-5 h-5 text-white" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-[#9dff00] transition-all duration-200 hover:scale-105 neon-glow-green focus:outline-2 focus:outline-[#9dff00] focus:outline-offset-2 rounded-full"
              >
                <Twitter className="w-5 h-5 text-white" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-[#9dff00] transition-all duration-200 hover:scale-105 neon-glow-green focus:outline-2 focus:outline-[#9dff00] focus:outline-offset-2 rounded-full"
              >
                <Youtube className="w-5 h-5 text-white" aria-hidden="true" />
              </a>
              <a
                href="mailto:contact@honeydewcrew.com"
                aria-label="Email us at contact@honeydewcrew.com"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-[#9dff00] transition-all duration-200 hover:scale-105 neon-glow-green focus:outline-2 focus:outline-[#9dff00] focus:outline-offset-2 rounded-full"
              >
                <Mail className="w-5 h-5 text-white" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    aria-label={`Navigate to ${item.label} page`}
                    className="text-[#e0e0e0] hover:text-[#9dff00] transition-colors duration-200 focus:outline-2 focus:outline-[#9dff00] focus:outline-offset-2 rounded px-1 py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-[#e0e0e0]">
              <li>contact@honeydewcrew.com</li>
              <li>Los Angeles, CA</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-[#e0e0e0] text-sm">
          <p>&copy; 2024 Honeydew Crew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
