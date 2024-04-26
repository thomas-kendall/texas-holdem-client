"use client";

import styles from "./page.module.css";
import LogoutButton from "@/components/logout-button";

export default function Dashboard() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Dashboard</h1>
        <LogoutButton />
      </div>
    </main>
  );
}
