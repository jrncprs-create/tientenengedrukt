import type { Metadata } from "next";
import { HkuPortfolioPage } from "@/components/hku/HkuPortfolioPage";
import { getSiteSettingsWithFallback } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Joep Cuypers - HKU toelatingsportfolio",
  description:
    "Toelatingsportfolio voor Associate degree Digital Media aan de HKU. Vijf projecten met proces, onderzoek, iteraties en reflectie.",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function HkuPage() {
  const siteSettings = await getSiteSettingsWithFallback();

  return <HkuPortfolioPage siteSettings={siteSettings} />;
}
