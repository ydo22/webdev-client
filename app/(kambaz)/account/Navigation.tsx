"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

const LABELS: Record<string, string> = {
  signin: "Signin",
  signup: "Signup",
  profile: "Profile",
};

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useAccountContext();
  const links = currentUser ? ["profile"] : ["signin", "signup"];

  return (
    <div id="wd-account-navigation" className="list-group wd">
      {links.map((link) => (
        <Link
          key={link}
          href={`/account/${link}`}
          className={`list-group-item ${
            pathname === `/account/${link}` ? "active" : ""
          }`}
        >
          {LABELS[link]}
        </Link>
      ))}
    </div>
  );
}
