import React from 'react';
import HeroImg from '../../assets/hero.png';
import Logo2 from '../../assets/logo2.png';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background-light pt-16 pb-20 lg:pt-32 lg:pb-28">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
         <img src={Logo2} alt="" className="w-96 h-96 object-contain [filter:hue-rotate(120deg)]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              New: AI-Powered Workflows
            </div> */}
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-text sm:text-5xl lg:text-6xl leading-tight">
              Visual Project Management <br />
              <span className="text-primary">for High-Performing Teams</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-light font-body max-w-lg">
              Simplify your workflow with intuitive Kanban boards and real-time collaboration. Track tasks, manage projects, and communicate with your team in one place.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#features" className="group flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-primary-hover hover:shadow-xl transition-all">
                Get Started
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#demo" className="flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-8 py-3.5 text-base font-medium text-text hover:bg-background-alt transition-all">
                View Demo
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-medium text-text-light">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={20} />
                <span>Free Forever Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={20} />
                <span>No Credit Card Required</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-white/50 p-2 shadow-2xl ring-1 ring-gray-900/10 lg:p-4 backdrop-blur-sm">
              <img src={HeroImg} alt="Kanbanify Layout" className="w-full rounded-xl shadow-inner bg-white [filter:hue-rotate(120deg)]" />
              
              {/* Floating Badge Example */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-xl bg-white p-4 shadow-xl ring-1 ring-border"
              >
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200"></div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-text">Team Sync</p>
                  <p className="text-xs text-text-light">Online now</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
