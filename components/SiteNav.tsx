"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteNav() {
  const pathname = usePathname();
  const isHkuPage = pathname === "/hku" || pathname.startsWith("/hku/");
  const cvHref = isHkuPage ? "/hku#cv" : "/#cv";
  const contactHref = isHkuPage ? "/hku#cv" : "/#contact";

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <Link href="/" className="nav-logo">
        JOEP CUYPERS
      </Link>

      <div className="nav-links">
        <Link href="/#work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/hku" className="nav-link-hku">
          HKU portfolio
        </Link>
        <Link href={cvHref}>CV</Link>
        <Link href={contactHref}>Contact</Link>
      </div>
    </nav>
  );
}
