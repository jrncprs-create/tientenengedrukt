import Image from "next/image";
import Header from "./Header";
import styles from "./Hero.module.css";

const HERO_SRC = "/images/placeholders/hero.svg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Header variant="overlay" />
      <Image
        className={styles.media}
        src={HERO_SRC}
        alt="Hero"
        fill
        priority
        sizes="100vw"
      />
    </section>
  );
}
