import React, { useState, useEffect } from 'react';
import Logo1 from '../../assets/logo1.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Features', id: 'features' },
    { name: 'Pricing', id: 'pricing' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          aria-label="Kanbanify — Home" 
          className="flex items-center gap-2 focus:outline-none"
        >
          <img src={Logo1} alt="Kanbanify" className="h-8 w-auto object-contain" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => handleScrollToSection(link.id)} 
              className="text-sm font-medium text-text-light hover:text-primary transition-colors focus:outline-none"
            >
              {link.name}
            </button>
          ))}
          <Link 
            to="/login" 
            className="text-sm font-medium text-text hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup" // Assuming a signup route or button usage
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white shadow-md hover:bg-primary-hover transition-colors"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-text-light hover:text-primary focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-b border-background-alt shadow-lg"
          >
            <nav className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  className="text-left text-base font-medium text-text-light hover:text-primary px-2 py-2 rounded-md hover:bg-background-alt transition-colors w-full" 
                  onClick={() => handleScrollToSection(link.id)}
                >
                  {link.name}
                </button>
              ))}
              <hr className="border-background-alt my-2" />
              <Link 
                to="/login" 
                className="block text-base font-medium text-text hover:text-primary px-2 py-2 rounded-md hover:bg-background-alt transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block text-center text-base font-medium bg-primary text-white px-2 py-2 rounded-md hover:bg-primary-hover transition-colors shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
