export function Security() {
  return (
    <section className="security" id="security">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 0 }}>
          <span className="eyebrow">
            <span className="d" />
            Security &amp; privacy
          </span>
          <h2>Enterprise-grade, privacy-first.</h2>
          <p>
            Privacy-first by design. Your data stays yours — encrypted, compliant, and fully under
            your control.
          </p>
        </div>
        <div className="sec-grid">
          <div className="sec-card reveal">
            <div className="si">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>End-to-end encryption</h3>
            <p>Chat and calls are end-to-end encrypted by default — readable only by participants.</p>
          </div>
          <div className="sec-card reveal">
            <div className="si">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </div>
            <h3>GDPR aligned</h3>
            <p>
              Clear roles, lawful bases, data-subject rights, and a Data Processing Agreement for
              organisation customers.
            </p>
          </div>
          <div className="sec-card reveal">
            <div className="si">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.7" />
                <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Audit logs &amp; SSO</h3>
            <p>
              SAML single sign-on and audit trails on the Organisation plan give admins full
              oversight and control.
            </p>
          </div>
          <div className="sec-card reveal">
            <div className="si">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 8a7 7 0 0 1 14 0v3c0 5-3 8-7 9-4-1-7-4-7-9V8z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>You own your data</h3>
            <p>Export anytime, granular retention controls, and no selling of personal data — ever.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
