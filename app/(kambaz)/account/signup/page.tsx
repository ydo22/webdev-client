import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign Up</h1>

      <input
        id="wd-username"
        placeholder="username"
      />

      <input
        id="wd-password"
        placeholder="password"
        type="password"
      />

      <input
        id="wd-password-verify"
        placeholder="verify password"
        type="password"
      />

      <Link id="wd-signup-link" href="/account/profile">
        Sign up
      </Link>

      <Link id="wd-signin-btn" href="/account/signin">
        Sign in
      </Link>
    </div>
  );
}