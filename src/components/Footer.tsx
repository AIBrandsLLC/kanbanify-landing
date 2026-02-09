import React from 'react'
import { Link } from 'react-router-dom'
import Logo1 from '../../assets/logo1.png';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer(){
  return (
    <footer aria-labelledby="footer-heading" className="bg-white border-t border-gray-100 pt-16 pb-8">
      <h2 className="sr-only" id="footer-heading">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo1} alt="Kanbanify" className="h-8 w-auto" />
            </Link>
            <p className="text-sm leading-6 text-text-light max-w-xs">
              Empowering teams to achieve more with visual project management.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-text">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-text-light hover:text-primary transition-colors">Marketing</a></li>
                  <li><a href="#" className="text-sm leading-6 text-text-light hover:text-primary transition-colors">Engineering</a></li>
                  <li><a href="#" className="text-sm leading-6 text-text-light hover:text-primary transition-colors">Sales</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-text">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-text-light hover:text-primary transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-sm leading-6 text-text-light hover:text-primary transition-colors">Guides</a></li>
                  <li><a href="mailto:support@kanbanify.org" className="text-sm leading-6 text-text-light hover:text-primary transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-text">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-text-light hover:text-primary transition-colors">About</a></li>
                  <li><a href="#" className="text-sm leading-6 text-text-light hover:text-primary transition-colors">Blog</a></li>
                  <li><a href="#" className="text-sm leading-6 text-text-light hover:text-primary transition-colors">Careers</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-text">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/privacy" className="text-sm leading-6 text-text-light hover:text-primary transition-colors">Privacy</Link></li>
                  <li><Link to="/terms" className="text-sm leading-6 text-text-light hover:text-primary transition-colors">Terms</Link></li>
                  <li><Link to="/cookies" className="text-sm leading-6 text-text-light hover:text-primary transition-colors">Cookie Policy</Link></li>
                  <li><Link to="/dpa" className="text-sm leading-6 text-text-light hover:text-primary transition-colors">DPA</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-background-alt pt-8 sm:mt-20 lg:mt-24 text-center">
           <p className="text-xs leading-5 text-text-light">© 2026 Kanbanify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
