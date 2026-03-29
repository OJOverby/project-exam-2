import { Register } from "../api/register.js";

export function registerHandler(venueManager) {
  return async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const user = {
      name: form.username.value,
      email: form.email.value,
      password: form.password.value,
      bio: form.bio.value,
      avatar: {
        url: form.avatarUrl.value,
        alt: form.avatarAlt.value
      },
      venueManager
    };

    try {
      const response = await Register(user);
      console.log("Registered:", response);
    } catch (error) {
      console.error(error);
    }
  };
}