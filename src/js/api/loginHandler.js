import { Login } from "../api/login.js";
import { useAuthStore } from "../store/authStore.js";

export function loginHandler(navigate, setError, setIsSubmitting) {
  return async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const user = {
      email: form.email.value.trim(),
      password: form.password.value,
    };

    setError("");
    setIsSubmitting(true);

    try {
      const response = await Login(user);

      useAuthStore.getState().setAuth(response.data);
      navigate("/");
    } catch (error) {
      setError("Login failed. Please check your email and password.");
    } finally {
      setIsSubmitting(false);
    }
  };
}
