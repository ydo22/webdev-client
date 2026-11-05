"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

// dob is an extra field on this form; users.json doesn't have it.
type ProfileDraft = User & { dob?: string };

export default function Profile() {
  const { currentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/account/signin");
  }, [currentUser, router]);

  if (!currentUser) return null;
  // Keyed by user so the local draft starts over when a different user signs in.
  return <ProfileForm key={currentUser._id} user={currentUser} />;
}

function ProfileForm({ user }: { user: User }) {
  const { setCurrentUser, updateUser } = useAccountContext();
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileDraft>(user);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  return (
    <div id="wd-profile-screen" className="wd-form">
      <h1 className="mb-2 text-2xl font-semibold">Profile</h1>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-username">
          Username
        </label>
        <input
          id="wd-username"
          placeholder="username"
          className="wd-form-field"
          value={profile.username}
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        />
      </div>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-password">
          Password
        </label>
        <input
          id="wd-password"
          placeholder="password"
          type="password"
          className="wd-form-field"
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        />
      </div>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-firstname">
          First Name
        </label>
        <input
          placeholder="First Name"
          id="wd-firstname"
          className="wd-form-field"
          value={profile.firstName}
          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        />
      </div>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-lastname">
          Last Name
        </label>
        <input
          placeholder="Last Name"
          id="wd-lastname"
          className="wd-form-field"
          value={profile.lastName}
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        />
      </div>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-dob">
          Date of Birth
        </label>
        <input
          type="date"
          id="wd-dob"
          className="wd-form-field"
          value={profile.dob ?? ""}
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
        />
      </div>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-email">
          Email
        </label>
        <input
          type="email"
          id="wd-email"
          className="wd-form-field"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
      </div>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-role">
          Role
        </label>
        <select
          id="wd-role"
          className="wd-form-field"
          value={profile.role}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>

      <div className="wd-form-actions">
        <button
          type="button"
          id="wd-signout-btn"
          className="wd-btn wd-btn-cancel"
          onClick={signout}
        >
          Sign out
        </button>

        <button
          type="button"
          className="wd-btn wd-btn-save"
          onClick={() => updateUser(profile)}
        >
          Save
        </button>
      </div>
    </div>
  );
}
