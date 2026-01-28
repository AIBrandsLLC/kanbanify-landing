import React from 'react'
import { Linkedin, Instagram, Facebook } from 'lucide-react'

export default function Footer(){
  return (
    <footer aria-labelledby="footer-heading" className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <h2 className="sr-only" id="footer-heading">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <div className="flex items-center gap-2">
               <img src="/assets/logo.svg" alt="Kanbanify logo" className="h-8 w-8 rounded-md" />
               <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Kanbanify</span>
             </div>
             <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
               Making project management simple, visual, and collaborative for everyone.
             </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-4 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">Product</h3>
                <ul className="mt-6 space-y-4" role="list">
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Kanban Board</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Secure Chat</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">R&D Audit Engine</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">AI Automation</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Pricing</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Download Apps</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">Solutions</h3>
                <ul className="mt-6 space-y-4" role="list">
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">R&D Reporting</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Agile for Engineering</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Audit</a></li>
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">Company</h3>
                <ul className="mt-6 space-y-4" role="list">
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">About Us</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Success Stories</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Press</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Partnerships</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Careers</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">Resources</h3>
                <ul className="mt-6 space-y-4" role="list">
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">API Documentation</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Help Center</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Community Forum</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">R&D Tax Guides</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">System Status</a></li>
                </ul>
              </div>
            </div>
            
             <div className="mt-10 md:mt-0 xl:col-span-1">
                <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">Contact</h3>
                <ul className="mt-6 space-y-4" role="list">
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Contact Sales</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="#">Submit Support Ticket</a></li>
                  <li><a className="text-sm leading-6 text-slate-600 hover:text-primary dark:text-slate-400" href="mailto:hello@kanbanify.org">hello@kanbanify.org</a></li>
                </ul>
              </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-900/10 dark:border-slate-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col-reverse justify-between gap-6 sm:flex-row sm:items-center">
             <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">© 2026 Kanbanify. All rights reserved.</p>
             <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400">
               <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy Policy</a>
               <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms & Conditions</a>
               <a href="#" className="hover:text-slate-900 dark:hover:text-white">Legal Notice</a>
               <a href="#" className="hover:text-slate-900 dark:hover:text-white">Google User Data Policy</a>
             </div>
             <div className="flex items-center gap-4">
               <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-blue-600">
                 <Linkedin className="h-5 w-5" />
               </a>
               <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-blue-400">
                 <Instagram className="h-5 w-5" />
               </a>
               <a href="#" aria-label="Facebook" className="text-slate-500 hover:text-blue-800">
                 <Facebook className="h-5 w-5" />
               </a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
