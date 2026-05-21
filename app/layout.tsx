import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://kanbanify.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kanbanify - Boards, chat & calls in one workspace",
    template: "%s - Kanbanify",
  },
  description:
    "Kanbanify pairs flexible Kanban boards with encrypted team chat and one-click video. Plan, talk and ship without leaving the board.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Kanbanify",
    title: "Kanbanify - Boards, chat & calls in one workspace",
    description:
      "Plan on boards, talk in chat and calls, log time as you go, and turn work into reports that write themselves.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
