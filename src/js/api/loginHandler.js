import { Login } from "../api/login.js";
import { useAuthStore } from "../store/authStore.js";

export function loginHandler(navigate) {
  return async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const user = {
      email: form.email.value,
      password: form.password.value
    };

    try {
      const response = await Login(user);

      console.log("Logged in:", response);

      useAuthStore.getState().setAuth(response.data);
      navigate("/");

    } catch (error) {
      console.error(error);
    }
  };
}