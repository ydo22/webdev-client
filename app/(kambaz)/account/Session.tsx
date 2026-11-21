"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useAccountContext } from "./AccountContext";
import * as client from "./client";

// After a refresh, ask the server who is signed in (the session cookie
// survives even though Context was cleared).
export default function Session({
  children,
}: {
  children: ReactNode;
}) {
  const [pending, setPending] = useState(true);
  const { setCurrentUser } = useAccountContext();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const currentUser = await client.profile();
        setCurrentUser(currentUser);
      } catch {
        setCurrentUser(null);
      } finally {
        setPending(false);
      }
    };
    fetchProfile();
  }, [setCurrentUser]);

  if (pending) {
    return null;
  }
  return children;
}
