import styles from "./nav.module.css";
import Link from "next/link";
import { Menu } from "@mui/material";
import Button from "../../ui/button";

const Nav = () => {
  return (
    <nav className={styles.navMain}>
      <div className={styles.navInner}>
        <div>
          <Link className={styles.title} href="/">
            Equitas
          </Link>
        </div>
        <div className={styles.navRight}>
          <ul className={styles.navMenu}>
            <Link href="/about">About</Link>
            <Link href="/about">Pricing</Link>
            <Link href="/about">Docs</Link>
            <Link href="/about">Support</Link>
            <Button label="Sign Up" />
            <Button label="Log In" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
