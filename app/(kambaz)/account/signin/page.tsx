"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { users, setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signin = () => {
    const user = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    setCurrentUser(user);
    router.push("/dashboard");
  };
  return (
    <div id="wd-signin-screen" className="wd-form">
      <h1 className="mb-2 text-2xl font-semibold">Sign in</h1>

      <input
        id="wd-username"
        placeholder="username"
        className="wd-form-field mb-2"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />

      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-form-field mb-2"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />

      <label htmlFor="wd-ai-signin-note">
        Sample note
      </label>
      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        className="wd-form-field mb-2"
      />

      <button
        type="button"
        id="wd-signin-btn"
        className="wd-btn wd-btn-save mb-2 w-full"
        onClick={signin}
      >
        Sign in
      </button>

      <Link id="wd-signup-link" href="/account/signup">
        Sign up
      </Link>
    </div>
  );
}
