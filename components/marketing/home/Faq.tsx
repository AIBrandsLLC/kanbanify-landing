import Link from "next/link";

export function Faq() {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">
            <span className="d" />
            FAQ
          </span>
          <h2>Good questions, answered.</h2>
        </div>
        <div className="faq reveal" id="faq">
          <details className="qa" open>
            <summary>
              Is Kanbanify really free to start?<span className="pl" />
            </summary>
            <p>
              Yes — the Free plan is free forever, with up to 5 boards and unlimited members. No
              credit card, no trial countdown. Upgrade only when your team needs more.
            </p>
          </details>
          <details className="qa">
            <summary>
              How does the built-in chat and video work?<span className="pl" />
            </summary>
            <p>
              Encrypted messaging and one-click video calls are built directly into every board — no
              bolting on a separate chat or video tool. The conversation stays attached to the work.
            </p>
          </details>
          <details className="qa">
            <summary>
              Can I migrate from another tool?<span className="pl" />
            </summary>
            <p>
              Yes. Kanbanify includes importers for common board and project formats, so bringing
              your existing work over is straightforward. Our team can help with larger migrations.
            </p>
          </details>
          <details className="qa">
            <summary>
              Is my data secure and GDPR compliant?<span className="pl" />
            </summary>
            <p>
              Chat and calls are end-to-end encrypted, and Organisation plans add SAML SSO and audit
              logs. We process data under a clear lawful basis and offer a{" "}
              <Link href="/dpa/">Data Processing Agreement</Link>. See our{" "}
              <Link href="/privacy/">Privacy Policy</Link> for full detail.
            </p>
          </details>
          <details className="qa">
            <summary>
              What happens when my trial ends?<span className="pl" />
            </summary>
            <p>
              Nothing breaks. If you don&apos;t upgrade, your workspace simply moves to the Free plan
              — your data stays intact and you keep up to 5 boards.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
