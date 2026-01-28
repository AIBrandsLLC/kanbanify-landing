import React, { useEffect, useRef, useState } from 'react'
import useCookieConsent from '../hooks/useCookieConsent'
import CookiePreferences from './CookiePreferences'

export default function CookieBanner(){
  const { consent, accept, deny } = useCookieConsent()
  const acceptRef = useRef<HTMLButtonElement | null>(null)
  const previousActive = useRef<HTMLElement | null>(null)
  const [showPrefs, setShowPrefs] = useState(false)

  useEffect(()=>{
    if(!consent){
      // save previous focus and move focus to the accept button for keyboard users
      previousActive.current = document.activeElement as HTMLElement | null
      setTimeout(()=> acceptRef.current?.focus(), 50)
    }
  },[consent])

  function handleAccept(){ accept(); previousActive.current?.focus() }
  function handleDeny(){ deny(); previousActive.current?.focus() }

  if(consent) return null

  return (
    <>
      <div id="cookie-consent" role="region" aria-label="Cookie consent" className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-between rounded-lg bg-white p-4 shadow-md dark:bg-slate-900">
        <div className="max-w-3xl">
          <p className="text-sm text-slate-700 dark:text-slate-300">We use cookies and anonymous usage data to improve the service. Accept All, Deny Essential Only, or open Preferences to fine-tune what we collect.</p>
        </div>
        <div className="flex items-center gap-2">
          <button id="cookie-decline" aria-label="Deny essential cookies" onClick={handleDeny} className="rounded-lg px-3 py-2 text-sm bg-slate-100">Deny Essential Only</button>
          <button id="cookie-preferences" aria-label="Cookie preferences" onClick={()=>setShowPrefs(true)} className="rounded-lg px-3 py-2 text-sm border">Preferences</button>
          <button id="cookie-accept" aria-label="Accept all cookies" ref={acceptRef} onClick={handleAccept} className="rounded-lg bg-primary px-3 py-2 text-sm font-bold text-white">Accept All</button>
        </div>
      </div>

      <CookiePreferences open={showPrefs} onClose={()=>setShowPrefs(false)} accept={accept} deny={deny} />
    </>
  )
}
