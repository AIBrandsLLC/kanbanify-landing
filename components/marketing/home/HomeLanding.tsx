import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/client/CookieBanner";
import { PageInteractions } from "@/components/client/PageInteractions";
import { Hero } from "@/components/marketing/home/Hero";
import { LogoStrip } from "@/components/marketing/home/LogoStrip";
import { Stats } from "@/components/marketing/home/Stats";
import { Scrollytelling } from "@/components/marketing/home/Scrollytelling";
import { Capabilities } from "@/components/marketing/home/Capabilities";
import { Security } from "@/components/marketing/home/Security";
import { Testimonial } from "@/components/marketing/home/Testimonial";
import { Pricing } from "@/components/marketing/home/Pricing";
import { Faq } from "@/components/marketing/home/Faq";
import { FinalCta } from "@/components/marketing/home/FinalCta";
import { VideoModal } from "@/components/marketing/home/VideoModal";

export function HomeLanding() {
  return (
    <>
      <SiteHeader />
      <main className="main-shell">
        <Hero />
        <LogoStrip />
        <Stats />
        <Scrollytelling />
        <Capabilities />
        <Security />
        <Testimonial />
        <Pricing />
        <Faq />
        <FinalCta />
        <VideoModal />
      </main>
      <Footer />
      <CookieBanner />
      <PageInteractions />
    </>
  );
}
