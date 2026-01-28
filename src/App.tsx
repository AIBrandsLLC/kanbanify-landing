import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutPage from './pages/AboutPage'
import Features from './components/Features'
import About from './components/About'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import TrustedCompanies from './components/TrustedCompanies'
import FinalCTA from './components/FinalCTA'

export default function App(){
  const path = typeof window !== 'undefined' ? window.location.pathname : '/'

  // Simple routing: dedicated /about page vs landing page
  if(path === '/about'){
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
        <Header />
        <AboutPage />
        <CookieBanner />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Header />
      <main>
        <Hero />
        <TrustedCompanies />
        <Features />
        <Pricing />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </main>
      <CookieBanner />
    </div>
  )
}
