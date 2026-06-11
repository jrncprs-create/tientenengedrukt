import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joep Cuypers — Portfolio 2026",
  description:
    "Portfolio van Joep Cuypers: art direction, visual concepts and production for events, campaigns and branded spaces.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={geistSans.variable}>
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
