import type { Metadata } from "next";
import { MarketingPage } from "@/components/MarketingPage";

export const metadata: Metadata = {
  title: "Kanbanify - Boards, chat & calls in one workspace",
  description:
    "Plan on boards, talk in chat and calls, log time as you go, and turn tasks into reports that write themselves.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kanbanify - Boards, chat & calls in one workspace",
    description:
      "Plan on boards, talk in chat and calls, log time as you go, and turn tasks into reports that write themselves.",
    url: "/",
  },
};

export default function HomePage() {
  return <MarketingPage pageKey="home" />;
}
