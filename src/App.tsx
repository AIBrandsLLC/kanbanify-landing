import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import LoginPage from './pages/LoginPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import ScrollToTop from './components/ScrollToTop'

function Layout() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

function Landing() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
    </>
  )
}

function ScrollToTopComponent() {
  const { pathname } = window.location;
  // This is a placeholder, actual ScrollToTop needs useLocation from router
  // But we can implement a proper one or just let the pages handle it. 
  // Let's create a proper ScrollToTop component in a separate file if needed, 
  // or just inline a hook here if we import useLocation.
  return null;
}

export default function App(){
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
