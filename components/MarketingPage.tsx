import { referencePages, type MarketingPageKey } from "@/data/reference-pages";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { CookieBanner } from "@/components/client/CookieBanner";
import { PageInteractions } from "@/components/client/PageInteractions";

type MarketingPageProps = {
  pageKey: MarketingPageKey;
  includeFooter?: boolean;
};

export function MarketingPage({ pageKey, includeFooter = true }: MarketingPageProps) {
  return (
    <>
      <SiteHeader />
      <main
        className="main-shell"
        dangerouslySetInnerHTML={{ __html: referencePages[pageKey] }}
      />
      {includeFooter ? <Footer /> : null}
      <CookieBanner />
      <PageInteractions />
    </>
  );
}
