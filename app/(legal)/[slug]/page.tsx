import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CookieBanner } from "@/components/client/CookieBanner";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { getLegalDocument, legalNavItems } from "@/data/legal-docs";
import { LegalRenderer } from "@/components/legal/LegalRenderer";

type LegalPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return legalNavItems.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = getLegalDocument(slug);

  if (!document) {
    return {
      title: "Legal document not found",
    };
  }

  const description = `${document.title} for Kanbanify, including terms, privacy, cookies, and data processing details for users and organisation customers.`;

  return {
    title: document.title,
    description,
    alternates: {
      canonical: `/${document.slug}/`,
    },
    openGraph: {
      title: `${document.title} - Kanbanify`,
      description,
      url: `/${document.slug}/`,
    },
  };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const document = getLegalDocument(slug);

  if (!document) notFound();

  return (
    <>
      <SiteHeader />
      <main className="legal-shell">
        <LegalRenderer document={document} />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
