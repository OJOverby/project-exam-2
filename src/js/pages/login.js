import { loginHandler } from "../api/loginHandler.js";
import { FormWrapper } from "../components/styled/formWrapper.js";
import { useNavigate } from "react-router-dom";


export function LoginUser() {
    const navigate = useNavigate();

  return (
    <FormWrapper>
      <form onSubmit={loginHandler(navigate)}>
        <h2>Login</h2>

        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />

        <button type="submit">Login</button>
      </form>
    </FormWrapper>
  );
}