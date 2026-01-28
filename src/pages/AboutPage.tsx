import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'

export default function AboutPage(){
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <About />
      <Footer />
    </main>
  )
}
