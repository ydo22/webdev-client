"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { emptyUser, useAccountContext } from "../AccountContext";
import * as client from "../client";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [error, setError] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signup = async () => {
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }
    if (password !== passwordVerify) {
      setError("Passwords do not match");
      return;
    }
    try {
      // The server creates the user (assigning its _id) and starts a session.
      const current = await client.signup({ ...emptyUser, username, password });
      setCurrentUser(current);
      router.push("/account/profile");
    } catch (e) {
      setError(
        axios.isAxiosError(e)
          ? (e.response?.data?.message ?? e.message)
          : "Unable to sign up",
      );
    }
  };
  return (
    <div id="wd-signup-screen" className="wd-form">
      <h1 className="mb-2 text-2xl font-semibold">Sign up</h1>
      {error && (
        <p id="wd-signup-error" className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800">
          {error}
        </p>
      )}

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
