import type { Metadata } from "next";
import { MarketingPage } from "@/components/MarketingPage";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, templates, and stories to help your team get more out of Kanbanify.",
  alternates: {
    canonical: "/resources/",
  },
  openGraph: {
    title: "Resources - Kanbanify",
    description:
      "Guides, templates, and stories to help your team get more out of Kanbanify.",
    url: "/resources/",
  },
};

export default function ResourcesPage() {
  return <MarketingPage pageKey="resources" />;
}
