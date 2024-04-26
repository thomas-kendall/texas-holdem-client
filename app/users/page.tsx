"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { User } from "@/models/user";
import UsersList from "@/components/users-list";
import LogoutButton from "@/components/logout-button";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Users</h1>
        <LogoutButton />
        <UsersList users={users} />
      </div>
    </main>
  );
}
