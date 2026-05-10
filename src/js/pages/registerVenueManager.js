import { useState } from "react";
import { registerHandler } from "../api/registerHandler.js";
import { FormWrapper } from "../components/styled/formWrapper.js";

export function RegisterVenueManager() {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <FormWrapper>
      <form onSubmit={registerHandler(true, setError, setIsSubmitting)}>
        <h2>Register As Venue Manager</h2>

        {error && <p className="errorMessage">{error}</p>}

        <div className="fieldGroup">
          <label htmlFor="managerUsername">Username</label>
          <input id="managerUsername" name="username" type="text" required />
        </div>

        <div className="fieldGroup">
          <label htmlFor="managerEmail">Email</label>
          <input
            id="managerEmail"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="fieldGroup">
          <label htmlFor="managerPassword">Password</label>
          <input
            id="managerPassword"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
        </div>

        <div className="fieldGroup">
          <label htmlFor="managerBio">Bio</label>
          <textarea id="managerBio" name="bio" />
        </div>

        <div className="fieldGroup">
          <label htmlFor="managerAvatarUrl">Avatar URL</label>
          <input id="managerAvatarUrl" name="avatarUrl" type="url" />
        </div>

        <div className="fieldGroup">
          <label htmlFor="managerAvatarAlt">Avatar alt text</label>
          <input id="managerAvatarAlt" name="avatarAlt" type="text" />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Register Venue Manager"}
        </button>
      </form>
    </FormWrapper>
  );
}
