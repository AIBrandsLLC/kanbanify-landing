import Link from "next/link";

export function FinalCta() {
  return (
    <div className="cta">
      <div className="wrap">
        <div className="cta-card reveal">
          <h2>
            Stop tab-switching. <span className="hl">Start shipping.</span>
          </h2>
          <p>
            Connect your tasks, chats, and meetings — and let the reports build themselves. Free
            forever to start.
          </p>
          <div className="cta-row">
            <a href="#pricing" className="btn btn-primary">
              Get started free{" "}
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10h11M11 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <Link href="/coming-soon/" className="btn btn-ghost">
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
