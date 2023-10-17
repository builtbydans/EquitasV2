import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Equitas V2 Home</p>
      <h1 className={styles.title}>
        <Link href="/pages/auth">Login</Link>
      </h1>
    </main>
  );
}
