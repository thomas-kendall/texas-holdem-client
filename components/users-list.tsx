"use client";

import { User } from "../models/user";

interface UsersListProps {
  users: User[];
}

export default function UsersList(props: UsersListProps) {
  const { users } = props;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.email}>
          {user.email} ({user.roles.join(", ")})
        </li>
      ))}
    </ul>
  );
}
