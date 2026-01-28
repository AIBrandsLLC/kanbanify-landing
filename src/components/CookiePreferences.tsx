import React, { useState } from 'react'
import Modal from './Modal'

type Props = {
  open: boolean
  onClose: ()=>void
  accept: ()=>void
  deny: ()=>void
}

export default function CookiePreferences({ open, onClose, accept, deny }: Props){
  const [analytics, setAnalytics] = useState(true)

  function save(){
    if(analytics) accept()
    else deny()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="Cookie Preferences">
      <div className="space-y-4">
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={analytics} onChange={e=>setAnalytics(e.target.checked)} />
          <span>Allow analytics and anonymous usage tracking</span>
        </label>
        <p className="text-sm text-slate-500">We only use aggregated data to improve the service. Toggle analytics on to help us improve features.</p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="rounded-lg px-4 py-2 bg-slate-100">Cancel</button>
          <button onClick={save} className="rounded-lg bg-primary px-4 py-2 text-white font-bold">Save preferences</button>
        </div>
      </div>
    </Modal>
  )
}
