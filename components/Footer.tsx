import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.group}>
          <div className={styles.row}>
            <Link href="/work">Work</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/legal">Legal</Link>
          </div>
        </div>

        <div className={`${styles.group} ${styles.center}`}>
          <div className={styles.row}>
            <a href={site.socials.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={site.socials.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.socials.soundcloud} target="_blank" rel="noreferrer">
              SoundCloud
            </a>
          </div>
        </div>

        <div className={`${styles.group} ${styles.right}`}>
          <div className={styles.row}>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
