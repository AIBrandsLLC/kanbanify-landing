import { useEffect, useState } from 'react'

export type Consent = 'all' | 'essential' | null

const KEY = 'kanbanify_cookie_consent'

export default function useCookieConsent(){
  const [consent, setConsent] = useState<Consent>(null)

  useEffect(()=>{
    try{
      const v = localStorage.getItem(KEY)
      if(v === 'all' || v === 'essential') setConsent(v as Consent)
    }catch(e){}
  },[])

  function accept(){
    try{ localStorage.setItem(KEY,'all'); setConsent('all') }catch(e){}
  }
  function deny(){
    try{ localStorage.setItem(KEY,'essential'); setConsent('essential') }catch(e){}
  }

  return { consent, accept, deny }
}
