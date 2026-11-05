"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const { createUser, setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signup = () => {
    if (!username || !password) return;
    if (password !== passwordVerify) return;
    // Added to the user list too, so this account can sign back in later.
    setCurrentUser(createUser({ ...emptyUser, username, password }));
    router.push("/account/profile");
  };
  return (
    <div id="wd-signup-screen" className="wd-form">
      <h1 className="mb-2 text-2xl font-semibold">Sign up</h1>

      <input
        id="wd-username"
        placeholder="username"
        className="wd-form-field mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-form-field mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        id="wd-password-verify"
        placeholder="verify password"
        type="password"
        className="wd-form-field mb-2"
        value={passwordVerify}
        onChange={(e) => setPasswordVerify(e.target.value)}
      />

      <button
        type="button"
        id="wd-signup-btn"
        className="wd-btn wd-btn-save mb-2 w-full"
        onClick={signup}
      >
        Sign up
      </button>

      <Link id="wd-signin-link" href="/account/signin">
        Sign in
      </Link>
    </div>
  );
}
