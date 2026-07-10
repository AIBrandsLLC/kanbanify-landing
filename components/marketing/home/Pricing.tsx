"use client";

import { useState } from "react";
import Link from "next/link";
import { REGISTER_URL } from "@/data/app-links";

function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M4 10l4 4 8-9"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Reassure() {
  return (
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
  );
}

const NBSP = "\u00A0";

export function Pricing() {
  const [cycle, setCycle] = useState<"m" | "y">("m");

  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 0 }}>
          <span className="eyebrow">
            <span className="d" />
            Pricing
          </span>
          <h2>Simple, transparent pricing.</h2>
          <p>Start free and upgrade when your team grows. No hidden fees, no surprise seats.</p>
          <div className="toggle">
            <button
              id="m"
              className={cycle === "m" ? "on" : undefined}
              onClick={() => setCycle("m")}
            >
              Monthly
            </button>
            <button
              id="y"
              className={cycle === "y" ? "on" : undefined}
              onClick={() => setCycle("y")}
            >
              Yearly <span className="save">Save 20%</span>
            </button>
          </div>
        </div>
        <div className="plans">
          <div className="plan">
            <div className="pname">Free</div>
            <div className="pdesc">For individuals and small hobby projects.</div>
            <div className="price">
              $0 <small>/ user / mo</small>
            </div>
            <div className="save-line">{NBSP}</div>
            <a href={REGISTER_URL} className="pbtn outline">
              Start for free
            </a>
            <ul>
              <li>
                <Check />
                Up to 5 boards
              </li>
              <li>
                <Check />
                Unlimited members
              </li>
              <li>
                <Check />
                Community support
              </li>
            </ul>
          </div>
          <div className="plan pop">
            <span className="badge">Most popular</span>
            <div className="pname">Team</div>
            <div className="pdesc">For growing teams that live in their boards.</div>
            <div className="price">
              $
              <span data-m="12" data-y="10">
                {cycle === "m" ? "12" : "10"}
              </span>{" "}
              <small>/ user / mo</small>
            </div>
            <div className="save-line" id="team-save">
              {cycle === "y" ? "Billed yearly - save $24/user" : NBSP}
            </div>
            <a href={REGISTER_URL} className="pbtn solid">
              Get started today{" "}
              <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                <path
                  d="M4 10h11M11 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <ul>
              <li>
                <Check />
                <b style={{ fontWeight: 700, color: "var(--ink)" }}>Everything in Free, plus:</b>
              </li>
              <li>
                <Check />
                Unlimited boards
              </li>
              <li>
                <Check />
                Encrypted chat &amp; video calls
              </li>
              <li>
                <Check />
                Advanced analytics
              </li>
              <li>
                <Check />
                Standard support
              </li>
            </ul>
          </div>
          <div className="plan">
            <div className="pname">Organisation</div>
            <div className="pdesc">For large organizations with security needs.</div>
            <div className="price">
              $
              <span data-m="49" data-y="39">
                {cycle === "m" ? "49" : "39"}
              </span>{" "}
              <small>/ user / mo</small>
            </div>
            <div className="save-line" id="org-save">
              {cycle === "y" ? "Billed yearly - save $120/user" : NBSP}
            </div>
            <Link href="/coming-soon/" className="pbtn outline">
              Contact sales
            </Link>
            <ul>
              <li>
                <Check />
                <b style={{ fontWeight: 700, color: "var(--ink)" }}>Everything in Team, plus:</b>
              </li>
              <li>
                <Check />
                SAML single sign-on
              </li>
              <li>
                <Check />
                Audit logs &amp; reporting
              </li>
              <li>
                <Check />
                Dedicated success manager
              </li>
              <li>
                <Check />
                24/7 priority support
              </li>
            </ul>
          </div>
        </div>
        <div className="price-reassure">
          <span>
            <Reassure />
            14-day Team trial
          </span>
          <span>
            <Reassure />
            Cancel anytime
          </span>
          <span>
            <Reassure />
            No credit card to start
          </span>
        </div>
        <p className="footnote">
          * Prices are for demonstration purposes. No payment method required for trial.
        </p>
      </div>
    </section>
  );
}
