export default function Testimonials(){
  const items = [
    { name: 'Aisha K', role: 'Engineering Manager', quote: 'Our velocity improved 30% with Kanban Taiga. The reporting tool is a game changer for our funding audits.', avatar: 'https://placehold.co/100x100/e2e8f0/475569?text=AK' },
    { name: 'Luca P', role: 'Product Lead', quote: 'Clear boards and great reporting — love it. The secure chat keeps our discussions context-aware and safe.', avatar: 'https://placehold.co/100x100/e2e8f0/475569?text=LP' },
    { name: 'Mei L', role: 'QA Lead', quote: 'Chat integration keeps everyone in sync. We no longer lose track of decisions made in meetings.', avatar: 'https://placehold.co/100x100/e2e8f0/475569?text=ML' },
  ]

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">What engineering teams say</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {items.map((t,i)=> (
            <div key={i} className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
              <div>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-current text-sm">star</span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">“{t.quote}”</p>
              </div>
              <footer className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-slate-100" src={t.avatar} alt="" />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-slate-500">{t.role}</div>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
