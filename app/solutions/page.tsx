import type { Metadata } from "next";
import { MarketingPage } from "@/components/MarketingPage";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "How engineering, product, marketing, and agency teams use Kanbanify to plan, talk, and ship in one place.",
  alternates: {
    canonical: "/solutions/",
  },
  openGraph: {
    title: "Solutions - Kanbanify",
    description:
      "How engineering, product, marketing, and agency teams use Kanbanify to plan, talk, and ship in one place.",
    url: "/solutions/",
  },
};

export default function SolutionsPage() {
  return <MarketingPage pageKey="solutions" />;
}
