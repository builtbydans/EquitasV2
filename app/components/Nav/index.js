import styles from "./nav.module.css";
import Link from "next/link";
import { Menu, Button } from "@mui/material";

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
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>Product</li>
            <li>Pricing</li>
            <li>About</li>
            <Button variant="contained">Sign Up</Button>
            <Button variant="contained">Log In</Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
