import Link from "next/link";
import { CookieBanner } from "@/components/client/CookieBanner";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="page-hero" style={{ minHeight: "60vh" }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="d" />
            404
          </span>
          <h1>Page not found.</h1>
          <p className="sub">The page you are looking for may have moved.</p>
          <div className="cta-row">
            <Link href="/" className="btn btn-primary">
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
