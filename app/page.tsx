"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import LogoutButton from "@/components/logout-button";
import { User } from "@/models/user";
import { useRouter } from "next/navigation";

// This is the home page for users that have not been authenticated.
export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {
    if (user) {
      if (user.roles.length == 0) {
        router.push("/sign-up");
      } else {
        router.push("/dashboard");
      }
    }
  }, [user]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Loading...</p>
        <LogoutButton />
      </div>
    </main>
  );
}
