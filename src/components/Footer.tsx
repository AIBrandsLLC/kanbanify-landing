import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer aria-labelledby="footer-heading" className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <h2 className="sr-only" id="footer-heading">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-6">
           <div className="flex items-center gap-2">
             <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Kanbanify</span>
           </div>
           
           <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-400 text-center">
             <Link to="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms & Conditions</Link>
             <Link to="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookie Policy</Link>
             <Link to="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Data Processing Policy</Link>
           </div>

           <div className="text-sm text-slate-500 dark:text-slate-400">
             <a href="mailto:support@kanbanify.org" className="hover:text-slate-900 dark:hover:text-white transition-colors">support@kanbanify.org</a>
           </div>
        </div>
        
        <div className="mt-8 border-t border-slate-900/10 dark:border-slate-800 pt-8 text-center">
           <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">© 2026 Kanbanify.</p>
        </div>
      </div>
    </footer>
  )
}
