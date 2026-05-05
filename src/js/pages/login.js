import { loginHandler } from "../api/loginHandler.js";
import { FormWrapper } from "../components/styled/formWrapper.js";
import { useNavigate, Link } from "react-router-dom";

export function LoginUser() {
  const navigate = useNavigate();

  return (
    <FormWrapper>
      <form onSubmit={loginHandler(navigate)}>
        <h2>Login</h2>

        <input name="email" type="email" placeholder="Email" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">Login</button>

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
