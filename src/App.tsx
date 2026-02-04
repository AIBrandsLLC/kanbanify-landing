import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import LoginPage from './pages/LoginPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

export default function App(){
  const path = typeof window !== 'undefined' ? window.location.pathname : '/'

  if(path === '/login'){
    return <LoginPage />
  }
  if(path === '/terms'){
    return <TermsPage />
  }
  if(path === '/privacy'){
    return <PrivacyPage />
  }

  // Simplified: No About, Testimonials, TrustedCompanies, FinalCTA
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Footer />
      </main>
      <CookieBanner />
    </div>
  )
}
