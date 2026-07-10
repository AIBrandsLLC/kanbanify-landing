import type { Metadata } from "next";
import Link from "next/link";
import { CookieBanner } from "@/components/client/CookieBanner";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "This page is on the way. Explore the rest of Kanbanify in the meantime.",
  alternates: {
    canonical: "/coming-soon/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ComingSoonPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-hero" style={{ minHeight: "60vh" }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="d" />
            Coming soon
          </span>
          <h1>This page is on the way.</h1>
          <p className="sub">
            We haven&apos;t published this one yet. Explore the product, pricing, or docs in the
            meantime — or head back home.
          </p>
          <div className="cta-row">
            <Link href="/" className="btn btn-primary">
              Back to home
            </Link>
            <Link href="/features/" className="btn btn-ghost">
              Explore features
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
