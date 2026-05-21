import type { Metadata } from "next";
import { MarketingPage } from "@/components/MarketingPage";

export const metadata: Metadata = {
  title: "Sign up free",
  description: "Create your free Kanbanify workspace. No credit card required.",
  alternates: {
    canonical: "/signup/",
  },
  openGraph: {
    title: "Sign up free - Kanbanify",
    description: "Create your free Kanbanify workspace. No credit card required.",
    url: "/signup/",
  },
};

export default function SignupPage() {
  return <MarketingPage pageKey="signup" includeFooter={false} />;
}
