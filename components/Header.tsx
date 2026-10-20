import Link from "next/link";
import styles from "./Header.module.css";

type HeaderProps = {
  variant?: "overlay" | "light";
};

export default function Header({ variant = "overlay" }: HeaderProps) {
  const className =
    variant === "light"
      ? `${styles.header} ${styles.static}`
      : styles.header;

  return (
    <header className={className}>
      <nav className={styles.nav} aria-label="Main">
        <Link className={styles.link} href="/work">
          Work
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
      </nav>
    </header>
  );
}
