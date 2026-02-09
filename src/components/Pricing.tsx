import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

type Period = 'month' | 'year'

export default function Pricing(){
  const [period, setPeriod] = useState<Period>('month')

  const plans = [
    { 
      id: 'free', 
      title: 'Free', 
      priceMonth: '$0', 
      priceYear: '$0', 
      features: ['Up to 5 boards', 'Unlimited members', 'Community support'],
      description: 'For individuals and small hobby projects.',
      highlight: false
    },
    { 
      id: 'team', 
      title: 'Team', 
      priceMonth: '$12', 
      priceYear: '$120', 
      features: ['Unlimited boards', 'Secure Chat', 'Standard support', 'Advanced Analytics'],
      description: 'For growing teams that need better collaboration.',
      highlight: true
    },
    { 
      id: 'org', 
      title: 'Organisation', 
      priceMonth: '$49', 
      priceYear: '$490', 
      features: ['SAML SSO', 'Audit Logs & Reporting', 'Dedicated Success Manager', '24/7 Priority Support'],
      description: 'For large organizations with security needs.',
      highlight: false
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-background-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col items-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl text-center">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl">
            Choose the plan that best fits your team's needs. No hidden fees.
          </p>
          
          <div className="relative mt-8 flex rounded-full bg-background-alt p-1 ring-1 ring-border">
            <button 
              onClick={()=>setPeriod('month')} 
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${period==='month' ? 'bg-white text-text shadow-sm' : 'text-text-light hover:text-text'}`}
            >
              Monthly
            </button>
            <button 
              onClick={()=>setPeriod('year')} 
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${period==='year' ? 'bg-white text-text shadow-sm' : 'text-text-light hover:text-text'}`}
            >
              Yearly <span className="text-primary ml-1 text-xs">-20%</span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <motion.div 
              key={p.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-2xl p-8 xl:p-10 flex flex-col ${
                p.highlight 
                  ? 'bg-white ring-2 ring-primary shadow-xl scale-105 z-10' 
                  : 'bg-white ring-1 ring-border shadow-sm hover:shadow-md'
              }`}
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold leading-8 text-text">{p.title}</h3>
                <p className="text-sm text-text-light mt-1">{p.description}</p>
              </div>
              
              <div className="mb-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-text">
                  {period === 'month' ? p.priceMonth : p.priceYear}
                </span>
                <span className="text-sm font-semibold leading-6 text-text-light">/user/{period}</span>
              </div>

              <a 
                href="#"
                className={`mt-auto block rounded-lg px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  p.highlight
                    ? 'bg-primary text-white hover:bg-primary-hover focus-visible:outline-primary'
                    : 'bg-primary/5 text-primary hover:bg-primary/10'
                }`}
              >
                {p.highlight ? 'Get started today' : 'Start for free'}
              </a>

              <ul className="mt-8 space-y-3 text-sm leading-6 text-text-light">
                {p.features.map(f=> (
                  <li key={f} className="flex gap-x-3">
                    <Check className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center border-t border-border pt-8">
            <p className="text-xs text-text-light">
                * Prices are for demonstration purposes. No payment method required for trial.
            </p>
        </div>
      </div>
    </section>
  )
}
