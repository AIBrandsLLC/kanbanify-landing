"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { buildSignupUrl } from "@/lib/marketing/signup-link";

export function Hero() {
  function handleSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    window.location.href = buildSignupUrl(typeof email === "string" ? email : undefined);
  }

  return (
    <header className="hero">
      <div className="aurora" style={{ opacity: 0.7 }} />
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow rise d1">
            <span className="d" />
            Plan · Talk · Track · Prove
          </span>
          <h1 className="head rise d2">
            <span className="hl">Plan</span> it, <span className="hl">talk</span> it,{" "}
            <span className="hl">track</span> it, <span className="hl">prove</span> it.
          </h1>
          <p className="lede rise d3">
            Plan on boards, talk in chat and calls, log time as you go — every task remembers the
            work behind it. Kanbanify does the rest, turning it into a report that writes itself: per
            person, per group, however you need it — just one click.
          </p>
          <div className="hero-actions rise d4">
            <form className="hero-signup" onSubmit={handleSignup}>
              <input
                type="email"
                name="email"
                placeholder="Enter your work email"
                required
                aria-label="Work email"
              />
              <button type="submit" className="btn btn-primary shimmer">
                Sign up — it&apos;s free!{" "}
                <svg viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10h11M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
          <p className="hero-gdpr rise d4">
            By entering your email, you agree to our <Link href="/privacy/">Privacy Policy</Link>.
            Free forever — no credit card, GDPR-compliant.
          </p>
          <button className="watch-demo rise d5" onClick={() => window.openVideo?.()}>
            <span className="play">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 6.5v11l9-5.5z" />
              </svg>
            </span>
            Watch the 90-second demo
          </button>
          <div className="trust rise d5" style={{ marginTop: 24 }}>
            <span>
              <svg viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8.2" stroke="currentColor" strokeWidth="1.6" />
                <path
                  d="M6.5 10l2.2 2.2L13.5 7.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              10,000+ teams
            </span>
            <span>
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2l2.2 4.6 5 .7-3.6 3.5.9 5L10 18.9 5.5 15.8l.9-5L2.8 7.3l5-.7z"
                  fill="currentColor"
                />
              </svg>
              4.8/5 rating
            </span>
          </div>
        </div>
        <div className="stage rise d4">
          <div className="panel">
            <div className="winbar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="ttl">
                <b>Product Sprint</b> · Board
              </span>
            </div>
            <div className="board">
              <div>
                <div className="col-h">
                  In Progress <span className="ct">3</span>
                </div>
                <div className="tk hero-mover">
                  <span className="tag t-indigo">Design</span>
                  <p>New onboarding flow</p>
                  <div className="row">
                    <div className="avs">
                      <span className="av a1" />
                      <span className="av a3" />
                    </div>
                    <span className="meta">KB-241</span>
                  </div>
                </div>
                <div className="tk">
                  <span className="tag t-rose">Bug</span>
                  <p>Fix board drag latency</p>
                  <div className="row">
                    <div className="avs">
                      <span className="av a2" />
                    </div>
                    <span className="meta">KB-238</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="col-h">
                  Review <span className="ct">2</span>
                </div>
                <div className="tk">
                  <span className="tag t-green">API</span>
                  <p>Call bridge service</p>
                  <div className="row">
                    <div className="avs">
                      <span className="av a4" />
                      <span className="av a1" />
                    </div>
                    <span className="meta">KB-230</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="col-h">
                  Done <span className="ct">8</span>
                </div>
                <div className="tk">
                  <span className="tag t-amber">Infra</span>
                  <p>Realtime presence</p>
                  <div className="row">
                    <div className="avs">
                      <span className="av a3" />
                    </div>
                    <span className="meta">KB-219</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel chatfloat linkcard">
            <div className="lc-head">
              <span className="lc-id">KB-241</span>
              <span className="lc-ttl">New onboarding flow</span>
            </div>
            <div className="lc-row">
              <span className="lc-ic chat">
                <svg viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 5h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8l-3 3v-3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Linked chats<span className="grow">12</span>
            </div>
            <div className="lc-row">
              <span className="lc-ic meet">
                <svg viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="6" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M13 9l4-2v6l-4-2" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
              </span>
              Meetings<span className="grow">2</span>
            </div>
            <div className="lc-row t">
              <span className="lc-ic time">
                <svg viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              Logged this week<span className="grow">3.5h</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
