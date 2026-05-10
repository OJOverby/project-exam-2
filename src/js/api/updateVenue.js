import { API_KEY } from "./api-key";

export async function updateVenue({ id, venueData, token }) {
  const response = await fetch(
    `https://v2.api.noroff.dev/holidaze/venues/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": API_KEY,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(venueData),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors?.[0]?.message || "Failed to update venue");
  }

  return data.data;
}
