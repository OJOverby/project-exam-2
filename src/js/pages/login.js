import { useState } from "react";
import { loginHandler } from "../api/loginHandler.js";
import { FormWrapper } from "../components/styled/formWrapper.js";
import { useNavigate, Link } from "react-router-dom";

export function LoginUser() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <FormWrapper>
      <form
        onSubmit={loginHandler(navigate, setError, setIsSubmitting)}
        noValidate
      >
        <div className="formHeader">
          <h1>Log in</h1>
        </div>

        {error && <p className="errorMessage">{error}</p>}

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
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        <div className="authLinks">
          <p>
            Don’t have an account? <Link to="/registeruser">Register</Link>
          </p>

          <p>
            Want to host? <Link to="/registerManager">Become a host</Link>
          </p>
        </div>
      </form>
    </FormWrapper>
  );
}
