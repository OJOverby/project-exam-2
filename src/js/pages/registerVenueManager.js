import { registerHandler } from "../api/registerHandler.js";

export function RegisterVenueManager() {
  return (
    <form onSubmit={registerHandler(true)}>
      <h2>Register As Venue Manager</h2>

      <input name="username" type="text" placeholder="Username" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <textarea name="bio" placeholder="Bio"></textarea>

      <input name="avatarUrl" type="url" placeholder="Avatar URL" />
      <input name="avatarAlt" type="text" placeholder="Avatar alt text" />

      <button type="submit">Register Venue Manager</button>
    </form>
  );
}