import React, { useState } from 'react';
import LogoImg from '../../assets/Logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Allow time for navigation before scrolling
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:bg-slate-900/80 dark:border-slate-800 transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Kanbanify — Home" className="flex items-center gap-2 px-2 py-1 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
          <img src={LogoImg} alt="Kanbanify logo" className="h-8 w-8 rounded-md" />
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Kanbanify</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <button onClick={() => handleScrollToSection('features')} className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors bg-transparent border-none cursor-pointer">
            Features
          </button>
          <button onClick={() => handleScrollToSection('pricing')} className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors bg-transparent border-none cursor-pointer">
            Pricing
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/login" className="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 absolute w-full left-0 shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <button 
              className="text-left text-base font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white px-2 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full" 
              onClick={() => handleScrollToSection('features')}
            >
              Features
            </button>
            <button 
              className="text-left text-base font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white px-2 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full" 
              onClick={() => handleScrollToSection('pricing')}
            >
              Pricing
            </button>
            <hr className="border-slate-200 dark:border-slate-700 my-2" />
            <Link 
              to="/login" 
              className="block text-base font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white px-2 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
