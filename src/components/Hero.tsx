import React from 'react';
import HeroImg from '../../assets/hero.png';

export default function Hero() {
  return (
    <section className="bg-background-light dark:bg-background-dark py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Visual Project Management <br />
              <span className="text-primary">for High-Performing Teams</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Simplify your workflow with intuitive Kanban boards and real-time collaboration. Track tasks, manage projects, and communicate with your team in one place.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#features" className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-primary-dark transition-all">
                Get Started
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Kanban Board</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Team Chat</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Collaboration</span>
              </div>
            </div>
          </div>

          <div aria-hidden className="relative rounded-2xl bg-slate-100 p-4 shadow-xl dark:bg-slate-800 lg:p-8">
            <img src={HeroImg} alt="Kanbanify Board and Chat Interface" className="w-full rounded-lg shadow-2xl ring-1 ring-slate-900/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
