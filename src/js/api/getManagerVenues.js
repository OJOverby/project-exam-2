import { API_KEY } from "./api-key";

export async function getManagerVenues({ name, token }) {
  const response = await fetch(
    `https://v2.api.noroff.dev/holidaze/profiles/${name}/venues?_bookings=true`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": API_KEY,
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.errors?.[0]?.message || "Failed to fetch manager venues",
    );
  }

  return data.data;
}
