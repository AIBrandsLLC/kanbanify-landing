import type { Metadata } from "next";
import { MarketingPage } from "@/components/MarketingPage";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing. Start free, upgrade when your team grows. Compare Free, Team and Organisation plans.",
  alternates: {
    canonical: "/pricing/",
  },
  openGraph: {
    title: "Pricing - Kanbanify",
    description:
      "Simple, transparent pricing. Start free, upgrade when your team grows. Compare Free, Team and Organisation plans.",
    url: "/pricing/",
  },
};

export default function PricingPage() {
  return <MarketingPage pageKey="pricing" />;
}
