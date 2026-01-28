import React, { useState } from 'react'

type Period = 'month' | 'year'

export default function Pricing(){
  const [period, setPeriod] = useState<Period>('month')

  const plans = [
    { 
      id: 'free', 
      title: 'Free', 
      priceMonth: '$0', 
      priceYear: '$0', 
      features: ['Up to 5 boards', 'Unlimited members', 'Community support', 'Basic reporting'] 
    },
    { 
      id: 'startup', 
      title: 'Startup', 
      priceMonth: '$12', 
      priceYear: '$120', 
      features: ['Unlimited boards', 'Secure Chat', 'Standard support', 'Time tracking'] 
    },
    { 
      id: 'enterprise', 
      title: 'Enterprise', 
      priceMonth: '$49', 
      priceYear: '$490', 
      features: ['SAML SSO', 'Audit Logs & Reporting', 'Dedicated Success Manager', 'On-premise option'] 
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h2 className="text-3xl font-bold tracking-tight sm:text-center">Pricing Plans</h2>
          <p className="mt-4 text-lg text-slate-600 sm:text-center dark:text-slate-400">Simple, transparent pricing for teams of all sizes.</p>
          <div className="relative self-center mt-6 flex rounded-lg bg-slate-100 p-0.5 sm:mt-8">
            <button onClick={()=>setPeriod('month')} className={`relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:z-10 sm:w-auto sm:px-8 ${period==='month' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}>Monthly billing</button>
            <button onClick={()=>setPeriod('year')} className={`relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:z-10 sm:w-auto sm:px-8 ${period==='year' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}>Yearly billing <span className="text-primary text-xs ml-1 font-normal">(Save 20%)</span></button>
          </div>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:max-w-none lg:mx-0">
          {plans.map(p=> (
            <div key={p.id} className={`rounded-3xl p-8 ring-1 xl:p-10 ${p.id === 'startup' ? 'bg-slate-900 ring-slate-900 text-white shadow-xl' : 'bg-white ring-slate-200 dark:bg-slate-900 dark:ring-slate-800'}`}>
              <h3 className={`text-lg font-semibold leading-8 ${p.id==='startup'?'text-white':'text-slate-900 dark:text-white'}`}>{p.title}</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className={`text-4xl font-bold tracking-tight ${p.id==='startup'?'text-white':'text-slate-900 dark:text-white'}`}>
                  {period === 'month' ? p.priceMonth : p.priceYear}
                </span>
                <span className={`text-sm leading-6 ${p.id==='startup'?'text-slate-300':'text-slate-500'}`}>/user/{period}</span>
              </p>
              <ul className={`mt-8 space-y-3 text-sm leading-6 ${p.id==='startup'?'text-slate-300':'text-slate-600 dark:text-slate-300'}`}>
                {p.features.map(f=> (
                  <li key={f} className="flex gap-x-3">
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button className={`block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${p.id === 'startup' ? 'bg-primary text-white hover:bg-primary-dark focus-visible:outline-primary' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
                  {p.id === 'enterprise' ? 'Contact Sales' : `Get started with ${p.title}`}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
