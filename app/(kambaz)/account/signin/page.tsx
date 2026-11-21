"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAccountContext } from "../AccountContext";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      setCurrentUser(user);
      router.push("/dashboard");
    } catch (e) {
      setError(
        axios.isAxiosError(e)
          ? (e.response?.data?.message ?? e.message)
          : "Unable to sign in",
      );
    }
  };
  return (
    <div id="wd-signin-screen" className="wd-form">
      <h1 className="mb-2 text-2xl font-semibold">Sign in</h1>
      {error && (
        <p id="wd-signin-error" className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800">
          {error}
        </p>
      )}

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
