import Link from "next/link";

export function SiteNav() {
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
        <Link href="/#cv">CV</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
}
