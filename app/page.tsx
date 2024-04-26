"use client";

import styles from "./page.module.css";
import LogoutButton from "@/components/logout-button";

// This is the home page for users that have not been authenticated.
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Dashboard</h1>
        <LogoutButton />
      </div>
    </main>
  );
}
