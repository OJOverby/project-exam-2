import { useState } from "react";
import { registerHandler } from "../api/registerHandler.js";
import { FormWrapper } from "../components/styled/formWrapper.js";

export function RegisterUser() {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <FormWrapper>
      <form onSubmit={registerHandler(false, setError, setIsSubmitting)}>
        <h2>Register User</h2>

        {error && <p className="errorMessage">{error}</p>}

        <div className="fieldGroup">
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" required />
        </div>

        <div className="fieldGroup">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="fieldGroup">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
        </div>

        <div className="fieldGroup">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>

        <div className="fieldGroup">
          <label htmlFor="avatarUrl">Avatar URL</label>
          <input id="avatarUrl" name="avatarUrl" type="url" />
        </div>

        <div className="fieldGroup">
          <label htmlFor="avatarAlt">Avatar alt text</label>
          <input id="avatarAlt" name="avatarAlt" type="text" />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Register User"}
        </button>
      </form>
    </FormWrapper>
  );
}
