import React, { useState } from 'react'

export default function Hero(){
  const [email, setEmail] = useState('')
  function submit(e: React.FormEvent){
    e.preventDefault()
    if(!email || !email.includes('@')){
      alert('Please enter a valid email')
      return
    }
    setEmail('')
    alert(`Thanks — we'll send trial access to ${email}.`)
  }

  return (
    <section className="bg-background-light dark:bg-background-dark py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              All-in-one<br /><span className="text-primary">R&D Audit Tool</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              The only platform that seamlessly combines <strong>Kanban</strong> + <strong>Secure Chat</strong> + <strong>Audit Reporting</strong>. Streamline your engineering workflow and master compliance.
            </p>

            <form id="hero-lead-form" onSubmit={submit} className="mt-8 flex max-w-md gap-4">
              <label htmlFor="hero-email-input" className="sr-only">Email</label>
              <input
                id="hero-email-input"
                type="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700"
              />
              <button className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-primary-dark transition-all">Start Free Trial</button>
            </form>

            <p className="mt-3 text-xs text-slate-500">14-day free trial. No credit card required.</p>
            
            <div className="mt-8 flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Kanban Board</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Secure Chat</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Audit Report</span>
              </div>
            </div>
          </div>

          <div aria-hidden className="relative rounded-2xl bg-slate-100 p-4 shadow-xl dark:bg-slate-800 lg:p-8">
             <img 
               src="https://placehold.co/800x600/e2e8f0/475569?text=Board+%2B+Chat+UI" 
               alt="Kanban Taiga Interface" 
               className="w-full rounded-lg shadow-2xl ring-1 ring-slate-900/10"
             />
          </div>
        </div>
      </div>
    </section>
  )
}
