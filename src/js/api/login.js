import { API_KEY } from "./api-key";

export async function Login({ email, password }) {
  try {
    const response = await fetch(
      "https://v2.api.noroff.dev/auth/login?_holidaze=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Noroff-API-Key": API_KEY,
        },
        body: JSON.stringify({ email, password }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors?.[0]?.message || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}
