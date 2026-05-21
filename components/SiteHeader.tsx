"use client";

import Link from "next/link";
import { useState } from "react";
import { APP_URL, LOGIN_URL } from "@/data/app-links";

const navLinks = [
  { href: "/features/", label: "Features" },
  { href: "/solutions/", label: "Solutions" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/resources/", label: "Resources" },
];

function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Kanbanify home">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 19V8a1 1 0 0 1 1-1h3v12H6a1 1 0 0 1-1-1zM11 19V5a1 1 0 0 1 1-1h3v15h-4zM17 19v-7h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3z"
          fill="currentColor"
        />
      </svg>
      kanbanify
    </Link>
  );
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="wrap nav-in">
        <Logo />
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <a href={LOGIN_URL}>Login</a>
          <a href={APP_URL} className="btn btn-primary btn-sm">
            Open App
          </a>
        </div>
        <button
          className="nav-burger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {isOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>
      <div className={`mobile-menu${isOpen ? " show" : ""}`}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </Link>
        ))}
        <a href={LOGIN_URL} onClick={() => setIsOpen(false)}>
          Login
        </a>
        <a
          href={APP_URL}
          className="btn btn-primary"
          onClick={() => setIsOpen(false)}
        >
          Open App
        </a>
      </div>
    </nav>
  );
}
