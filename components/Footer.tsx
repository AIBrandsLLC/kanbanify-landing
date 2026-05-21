import Link from "next/link";

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a href="#" aria-label={label}>
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <Link href="/" className="logo">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 19V8a1 1 0 0 1 1-1h3v12H6a1 1 0 0 1-1-1zM11 19V5a1 1 0 0 1 1-1h3v15h-4zM17 19v-7h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3z"
                fill="currentColor"
              />
            </svg>
            kanbanify
          </Link>
          <p className="blurb">
            Connect tasks, chats, and meetings - and turn them into reports that write themselves.
          </p>
          <div className="socials">
            <SocialIcon label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.8 3.6A11.3 11.3 0 0 1 3.6 4.6a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 3.9c-.5.2-1.1.2-1.7.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.1a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2-2.2z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.3.3.6.9.6 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18H5.7V9.7h2.6V18zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.3 18h-2.6v-4c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.7V18h-2.6V9.7h2.6v1.1c.3-.5 1-1.3 2.4-1.3 1.7 0 3 1.1 3 3.6V18z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
        <div>
          <h4>Product</h4>
          <Link href="/features/">Features</Link>
          <Link href="/solutions/">Solutions</Link>
          <Link href="/pricing/">Pricing</Link>
          <Link href="/resources/">Resources</Link>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#">Documentation</a>
          <a href="#">Guides</a>
          <a href="#">Contact us</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>
        <div>
          <h4>Legal</h4>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/cookies/">Cookie Policy</Link>
          <Link href="/dpa/">DPA</Link>
        </div>
      </div>
      <div className="wrap copyline">
        <span>© 2026 Kanbanify. All rights reserved.</span>
        <span>Made for high-performing teams</span>
      </div>
    </footer>
  );
}
