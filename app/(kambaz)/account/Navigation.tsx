"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();

  return (
    <div id="wd-account-navigation" className="list-group wd">
      <Link
        href="/account/signin"
        className={`list-group-item ${
          pathname === "/account/signin" ? "active" : ""
        }`}
      >
        Signin
      </Link>

      <Link
        href="/account/signup"
        className={`list-group-item ${
          pathname === "/account/signup" ? "active" : ""
        }`}
      >
        Signup
      </Link>

      <Link
        href="/account/profile"
        className={`list-group-item ${
          pathname === "/account/profile" ? "active" : ""
        }`}
      >
        Profile
      </Link>
    </div>
  );
}
