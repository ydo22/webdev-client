import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>

      <input
        id="wd-username"
        placeholder="username"
      />

      <input
        id="wd-password"
        placeholder="password"
        type="password"
      />

      <label htmlFor="wd-ai-signin-note">
        Sample note
      </label>
      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
      />

      <Link id="wd-signin-btn" href="/account/profile">
        Sign in
      </Link>

      <Link id="wd-signup-link" href="/account/signup">
        Sign up
      </Link>
    </div>
  );
}