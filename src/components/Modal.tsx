import React from 'react'

type Props = {
  open: boolean
  onClose: ()=>void
  title?: string
  children?: React.ReactNode
}

export default function Modal({ open, onClose, title, children }: Props){
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-lg bg-white dark:bg-slate-900 p-6 shadow-lg">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        <div className="mt-4">{children}</div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="rounded-lg px-4 py-2 bg-slate-100">Close</button>
        </div>
      </div>
    </div>
  )
}
