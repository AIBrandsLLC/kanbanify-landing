import React from 'react'

export default function About(){
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="about-heading" className="text-3xl font-bold">About Kanban Taiga</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">A lightweight, privacy-first kanban platform designed to help engineering teams collaborate, measure, and ship.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Mission</h3>
            <p className="mt-2 text-sm text-slate-600">Make project work visible and predictable while respecting user privacy.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Values</h3>
            <p className="mt-2 text-sm text-slate-600">Speed, clarity, and trust — shipped with simple interfaces and strong defaults.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Who we serve</h3>
            <p className="mt-2 text-sm text-slate-600">Small to mid-size engineering teams, R&D groups, and product teams who prefer focused tools.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="rounded-lg bg-primary px-6 py-2 text-white font-bold">Learn more</button>
        </div>
      </div>
    </section>
  )
}
