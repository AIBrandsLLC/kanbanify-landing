"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "kb_cookie";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setIsVisible(!window.localStorage.getItem(STORAGE_KEY));
      } catch {
        setIsVisible(true);
      }
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  function dismiss() {
    setIsVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Storage can be unavailable in private browsing; dismissal still works for this render.
    }
  }

  return (
    <div className={`cookie-bar${isVisible ? " show" : ""}`}>
      <div className="cookie-in">
        <p>
          We use cookies to improve your experience. By using our site, you agree to our{" "}
          <Link href="/cookies/">Cookie Policy</Link>.
        </p>
        <div className="cookie-actions">
          <button className="btn btn-ghost btn-sm" type="button" onClick={dismiss}>
            Decline
          </button>
          <button className="btn btn-primary btn-sm" type="button" onClick={dismiss}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
