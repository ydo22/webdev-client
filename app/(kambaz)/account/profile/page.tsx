import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="wd-form">
      <h1 className="mb-2 text-2xl font-semibold">Profile</h1>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-username">
          Username
        </label>
        <input
          id="wd-username"
          defaultValue="alice"
          placeholder="username"
          className="wd-form-field"
        />
      </div>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-password">
          Password
        </label>
        <input
          id="wd-password"
          defaultValue="123"
          placeholder="password"
          type="password"
          className="wd-form-field"
        />
      </div>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-firstname">
          First Name
        </label>
        <input
          defaultValue="Alice"
          placeholder="First Name"
          id="wd-firstname"
          className="wd-form-field"
        />
      </div>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-lastname">
          Last Name
        </label>
        <input
          defaultValue="Wonderland"
          placeholder="Last Name"
          id="wd-lastname"
          className="wd-form-field"
        />
      </div>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-dob">
          Date of Birth
        </label>
        <input
          defaultValue="2000-01-01"
          type="date"
          id="wd-dob"
          className="wd-form-field"
        />
      </div>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-email">
          Email
        </label>
        <input
          defaultValue="alice@wonderland"
          type="email"
          id="wd-email"
          className="wd-form-field"
        />
      </div>

      <div className="wd-form-grid">
        <label className="wd-form-grid-label" htmlFor="wd-role">
          Role
        </label>
        <select
          defaultValue="FACULTY"
          id="wd-role"
          className="wd-form-field"
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>

      <div className="wd-form-actions">
        <Link
          id="wd-signout-btn"
          href="/account/signin"
          className="wd-btn wd-btn-cancel"
        >
          Sign out
        </Link>

        <button type="button" className="wd-btn wd-btn-save">
          Save
        </button>
      </div>
    </div>
  );
}