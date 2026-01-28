import React, { useState } from 'react'
import Modal from './Modal'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:bg-slate-900/80 dark:border-slate-800">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" aria-label="Kanban Taiga — Home" className="flex items-center gap-2 px-2 py-1 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
            <img src="/assets/logo.svg" alt="Kanban Taiga logo" className="h-8 w-8 rounded-md" />
            <span className="text-lg font-bold tracking-tight">Kanban Taiga</span>
          </a>
          <nav className="hidden md:flex gap-8">
            <a id="nav-about" className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white" href="/about">About</a>
            
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white">
                Features <span className="material-symbols-outlined text-sm">arrow_drop_down</span>
              </button>
              <div className="absolute left-0 top-full hidden w-64 rounded-xl bg-white p-2 shadow-xl ring-1 ring-slate-200 group-hover:block dark:bg-slate-900 dark:ring-slate-800">
                 <a href="#kanban" className="block rounded-lg p-3 hover:bg-slate-50 dark:hover:bg-slate-800">
                   <div className="text-sm font-semibold text-slate-900 dark:text-white">Kanban Board</div>
                   <div className="text-xs text-slate-500">Swimlanes, WIP limits & more</div>
                 </a>
                 <a href="#chat" className="block rounded-lg p-3 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">Secure Chat & Meeting</div>
                    <div className="text-xs text-slate-500">Video calls & encrypted chat</div>
                 </a>
                 <a href="#reporting" className="block rounded-lg p-3 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">R&D Reporting Tool</div>
                    <div className="text-xs text-slate-500">Audit features & time tracking</div>
                 </a>
              </div>
            </div>

            <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white" href="#pricing">Pricing</a>

            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white">
                Resources <span className="material-symbols-outlined text-sm">arrow_drop_down</span>
              </button>
              <div className="absolute left-0 top-full hidden w-56 rounded-xl bg-white p-2 shadow-xl ring-1 ring-slate-200 group-hover:block dark:bg-slate-900 dark:ring-slate-800">
                 <a href="#" className="block rounded-lg p-3 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">API Documentation</a>
                 <a href="#" className="block rounded-lg p-3 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">Blog</a>
                 <a href="#" className="block rounded-lg p-3 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">Help Center</a>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-6">
            <a href="#" onClick={(e)=>{e.preventDefault(); setOpen(true)}} className="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white">Login</a>
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-primary-dark transition-colors">Start Free Trial</button>
          </div>
        </div>
      </header>
      <Modal open={open} onClose={()=>setOpen(false)} title="Login">
        <form>
          <label className="text-xs text-slate-600">Email</label>
          <input type="email" className="mt-1 mb-3 block w-full rounded-md border px-3 py-2 text-sm" />
          <label className="text-xs text-slate-600">Password</label>
          <input type="password" className="mt-1 mb-4 block w-full rounded-md border px-3 py-2 text-sm" />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={()=>setOpen(false)} className="rounded-lg px-4 py-2 text-sm bg-slate-100">Cancel</button>
            <button type="button" className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white">Sign in</button>
          </div>
        </form>
      </Modal>
    </>
  )
}
