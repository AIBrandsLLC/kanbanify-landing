import React from 'react';
import LogoImg from '../../assets/Logo.png';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:bg-slate-900/80 dark:border-slate-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" aria-label="Kanbanify — Home" className="flex items-center gap-2 px-2 py-1 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
          <img src={LogoImg} alt="Kanbanify logo" className="h-8 w-8 rounded-md" />
          <span className="text-lg font-bold tracking-tight">Kanbanify</span>
        </a>
        <nav className="hidden md:flex gap-8">
          <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white" href="#features">
            Features
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white" href="#pricing">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <a href="/login" className="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
