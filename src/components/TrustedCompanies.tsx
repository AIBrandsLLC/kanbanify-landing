import React from 'react'

const companies = [
  { name: 'Acme Corp', logo: 'https://placehold.co/150x50/e2e8f0/475569?text=Acme+Corp' },
  { name: 'Global Tech', logo: 'https://placehold.co/150x50/e2e8f0/475569?text=Global+Tech' },
  { name: 'Nebula', logo: 'https://placehold.co/150x50/e2e8f0/475569?text=Nebula' },
  { name: 'Vortex', logo: 'https://placehold.co/150x50/e2e8f0/475569?text=Vortex' },
  { name: 'Fox Run', logo: 'https://placehold.co/150x50/e2e8f0/475569?text=Fox+Run' },
]

export default function TrustedCompanies(){
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wide">Trusted by 2000+ companies</p>
        <div className="mt-6 flex flex-wrap justify-center gap-8 md:gap-12 opacity-75 grayscale transition-all hover:grayscale-0">
          {companies.map(c => (
            <img key={c.name} src={c.logo} alt={c.name} className="h-8 md:h-10" />
          ))}
        </div>
      </div>
    </section>
  )
}
