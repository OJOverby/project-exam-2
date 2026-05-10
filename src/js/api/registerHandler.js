import { Register } from "../api/register.js";

export function registerHandler(venueManager, setError, setIsSubmitting) {
  return async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const user = {
      name: form.username.value.trim(),
      email: form.email.value.trim(),
      password: form.password.value,
      bio: form.bio.value.trim(),
      venueManager,
    };

    if (form.avatarUrl.value.trim()) {
      user.avatar = {
        url: form.avatarUrl.value.trim(),
        alt: form.avatarAlt.value.trim() || `${user.name}'s avatar`,
      };
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await Register(user);
      console.log("Registered:", response);
    } catch (error) {
      setError("Registration failed. Please check your details and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
}
