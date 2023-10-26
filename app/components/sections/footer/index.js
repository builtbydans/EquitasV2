import styles from "./footer.module.css";
import { Container } from "@mui/material";
import Link from "next/link";
4;
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <div className={styles.footerItems}>
          <div>
            <Link className={styles.title} href="/">
              Equitas
            </Link>
            <p>
              We are helping companies to not just digitise their interviews,
              but optimise them.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul style={{ listStyle: "none" }}>
              <li>About</li>
              <li>Pricing</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
          </div>
          <div>
            <h4>Headquarters</h4>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
