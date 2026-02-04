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
      features: ['Up to 5 boards', 'Unlimited members', 'Community support'] 
    },
    { 
      id: 'team', 
      title: 'Team', 
      priceMonth: '$12', 
      priceYear: '$120', 
      features: ['Unlimited boards', 'Secure Chat', 'Standard support'] 
    },
    { 
      id: 'org', 
      title: 'Organisation', 
      priceMonth: '$49', 
      priceYear: '$490', 
      features: ['SAML SSO', 'Audit Logs & Reporting', 'Dedicated Success Manager'] 
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h2 className="text-3xl font-bold tracking-tight sm:text-center text-slate-900 dark:text-white">Pricing Plans</h2>
          <p className="mt-4 text-lg text-slate-600 sm:text-center dark:text-slate-400">Simple, transparent pricing for teams of all sizes.</p>
          <div className="relative self-center mt-6 flex rounded-lg bg-slate-100 dark:bg-slate-800 p-1 sm:mt-8">
            <button 
              onClick={()=>setPeriod('month')} 
              className={`relative flex-1 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:z-10 px-4 sm:px-8 sm:w-auto sm:flex-none ${period==='month' ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
            >
              <span className="sm:hidden">Monthly</span>
              <span className="hidden sm:inline">Monthly billing</span>
            </button>
            <button 
              onClick={()=>setPeriod('year')} 
              className={`relative flex-1 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:z-10 px-4 sm:px-8 sm:w-auto sm:flex-none ${period==='year' ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
            >
              <span className="sm:hidden">Yearly <span className="text-primary text-xs ml-0.5">-20%</span></span>
              <span className="hidden sm:inline">Yearly billing <span className="text-primary text-xs ml-1 font-normal">(Save 20%)</span></span>
            </button>
          </div>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:max-w-none lg:mx-0">
          {plans.map(p=> (
            <div key={p.id} className={`rounded-3xl p-8 ring-1 xl:p-10 ${p.id === 'team' ? 'bg-slate-900 ring-slate-900 text-white shadow-xl' : 'bg-white ring-slate-200 dark:bg-slate-900 dark:ring-slate-800'}`}>
              <h3 className={`text-lg font-semibold leading-8 ${p.id==='team'?'text-white':'text-slate-900 dark:text-white'}`}>{p.title}</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className={`text-4xl font-bold tracking-tight ${p.id==='team'?'text-white':'text-slate-900 dark:text-white'}`}>
                  {period === 'month' ? p.priceMonth : p.priceYear}
                </span>
                <span className={`text-sm leading-6 ${p.id==='team'?'text-slate-300':'text-slate-500'}`}>/user/{period}</span>
              </p>
              <ul className={`mt-8 space-y-3 text-sm leading-6 ${p.id==='team'?'text-slate-300':'text-slate-600 dark:text-slate-300'}`}>
                {p.features.map(f=> (
                  <li key={f} className="flex gap-x-3">
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
                * This pricing page is for informational purposes only. No payment processing is configured.
            </p>
        </div>
      </div>
    </section>
  )
}
