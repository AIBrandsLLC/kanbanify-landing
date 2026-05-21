import type { Metadata } from "next";
import { MarketingPage } from "@/components/MarketingPage";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Link tasks to the chats and meetings that shaped them, log time, and get per-person and per-sprint reports automatically.",
  alternates: {
    canonical: "/features/",
  },
  openGraph: {
    title: "Features - Kanbanify",
    description:
      "Link tasks to the chats and meetings that shaped them, log time, and get per-person and per-sprint reports automatically.",
    url: "/features/",
  },
};

export default function FeaturesPage() {
  return <MarketingPage pageKey="features" />;
}
