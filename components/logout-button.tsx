"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LogoutButton() {
  const { data: session } = useSession();

  if (!session) {
    return <></>;
  }

  return (
    <>
      Signed in as {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
}
