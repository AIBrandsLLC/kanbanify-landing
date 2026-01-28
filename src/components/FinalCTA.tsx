import React, { useState } from 'react'

export default function FinalCTA(){
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    if(!email) return
    alert(`Thanks! We will contact ${email} shortly.`)
    setEmail('')
  }

  return (
    <section className="relative isolate overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your workflow?</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Join thousands of engineering teams who have switched to Kanbanify to ship faster and audit easier.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Start Free Trial
              </button>
            </div>
            <p className="mt-2 text-xs text-slate-400">14-day free trial. No credit card required.</p>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative rounded-xl bg-slate-800 p-8 shadow-2xl ring-1 ring-white/10 w-full max-w-sm">
                <div className="flex flex-col gap-4">
                    <div className="h-4 w-1/2 rounded bg-slate-700"></div>
                    <div className="h-4 w-3/4 rounded bg-slate-700"></div>
                    <div className="h-32 w-full rounded bg-slate-700 mt-4"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>
    </section>
  )
}
