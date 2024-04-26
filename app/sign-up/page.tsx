"use client";

import { useState } from "react";
import styles from "./page.module.css";
import LogoutButton from "@/components/logout-button";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    fetch("/api/users/sign-up", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    }).then((response) => {
      setIsSubmitting(false);
      router.push("/dashboard");
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Sign Up</h1>
        <LogoutButton />
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </form>
    </main>
  );
}
