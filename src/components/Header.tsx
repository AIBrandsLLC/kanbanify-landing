import React, { useState } from 'react';
import LogoImg from '../../assets/Logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:bg-slate-900/80 dark:border-slate-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" aria-label="Kanbanify — Home" className="flex items-center gap-2 px-2 py-1 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
          <img src={LogoImg} alt="Kanbanify logo" className="h-8 w-8 rounded-md" />
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Kanbanify</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" href="#features">
            Features
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a href="/login" className="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors">
            Login
          </a>
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
            <a 
              className="text-base font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white px-2 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" 
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              className="text-base font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white px-2 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" 
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <hr className="border-slate-200 dark:border-slate-700 my-2" />
            <a 
              href="/login" 
              className="text-base font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white px-2 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
