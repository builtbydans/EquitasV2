"use client";

import Nav from "./components/Nav";
import styles from "./styles/home.module.css";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <main className={styles.outer}>
        <Nav />
      </main>
    </Container>
  );
}
