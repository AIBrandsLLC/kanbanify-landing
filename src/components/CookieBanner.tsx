import React, { useEffect, useRef } from 'react'
import useCookieConsent from '../hooks/useCookieConsent'

export default function CookieBanner(){
  const { consent, accept, deny } = useCookieConsent()
  const acceptRef = useRef<HTMLButtonElement | null>(null)
  const previousActive = useRef<HTMLElement | null>(null)

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
    <div id="cookie-consent" role="region" aria-label="Cookie consent" className="fixed bottom-4 left-4 right-4 z-50 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-white/95 p-4 shadow-xl ring-1 ring-gray-900/5 backdrop-blur sm:gap-8 font-body">
      <div className="max-w-3xl text-center sm:text-left">
        <p className="text-sm text-text leading-relaxed">
          We use cookies to improve your experience. By using our site, you agree to our <a href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</a>.
        </p>
      </div>
      <div className="flex w-full sm:w-auto items-center justify-center gap-3">
        <button id="cookie-reject" aria-label="Reject non-essential cookies" onClick={handleDeny} className="flex-1 sm:flex-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-text hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors">Decline</button>
        <button id="cookie-accept" aria-label="Accept cookies" ref={acceptRef} onClick={handleAccept} className="flex-1 sm:flex-none rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors">Accept</button>
      </div>
    </div>
  )
}
