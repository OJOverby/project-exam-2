import { registerHandler } from "../api/registerHandler.js";
import { FormWrapper } from "../components/styled/formWrapper.js";

export function RegisterUser() {
  return (
    <FormWrapper>
    <form onSubmit={registerHandler(false)}>
      <h2>Register User</h2>

      <input name="username" type="text" placeholder="Username" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <textarea name="bio" placeholder="Bio"></textarea>

      <input name="avatarUrl" type="url" placeholder="Avatar URL" />
      <input name="avatarAlt" type="text" placeholder="Avatar alt text" />

      <button type="submit">Register User</button>
    </form>
    </FormWrapper>
  );
}