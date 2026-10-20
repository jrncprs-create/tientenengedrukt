import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joep — Tientenengedrukt",
  description: "Portfolio van Joep — styling, design en visual work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
