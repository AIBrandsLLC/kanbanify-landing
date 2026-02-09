import React, { useEffect } from 'react';
import LogoImg from '../../assets/Logo.png';

export default function LoginPage() {
  
  useEffect(() => {
    // Safety Net:
    // If the backend redirects to the root "/" (Landing Page) instead of "/app/" 
    // but includes authentication parameters, forward them to the app.
    const params = new URLSearchParams(window.location.search);
    if (params.has('verified_email') || params.has('token') || params.has('refresh')) {
        window.location.href = '/app/' + window.location.search;
        return; // Stop execution to allow redirect
    }

    // Redirect to Taiga Backend OIDC initiation endpoint
    // We use next=/ because the backend seems to be configured with TAIGA_SUBPATH=/app
    // and automatically prepends it. Using next=/app/ caused /app/app/.
    const oidcUrl = window.location.origin + '/oidc/authenticate/?next=/';
    
    window.location.href = oidcUrl;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-center">
         <div>
          <a href="/" className="flex justify-center items-center gap-2">
            <img className="h-10 w-10 rounded-md" src={LogoImg} alt="Kanbanify" />
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Kanbanify</span>
          </a>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Redirecting to login...</h2>
        </div>
      </div>
    </div>
  );
}
