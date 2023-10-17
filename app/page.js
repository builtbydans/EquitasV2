"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Scorecard from "./components/Scorecard";

export default function Home() {
  return (
    <main className={styles.outer}>
      <div className={styles.inner}>
        <Scorecard
          title="I'm Scorecard 1"
          context="Available"
          btnStyle={{ backgroundColor: "#4176FF" }}
        />
        <Scorecard
          title="I'm Scorecard 2"
          context="Unavailable"
          btnStyle={{ backgroundColor: "#7F8EB7" }}
        />
        <Scorecard
          title="I'm Scorecard 3"
          context="Cancel"
          btnStyle={{ backgroundColor: "#BBC0CB" }}
        />
      </div>
    </main>
  );
}
