import { API_KEY } from "./api-key";

export async function deleteVenue({ id, token }) {
  const response = await fetch(
    `https://v2.api.noroff.dev/holidaze/venues/${id}`,
    {
      method: "DELETE",
      headers: {
        API_KEY,
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.errors?.[0]?.message || "Failed to delete venue");
  }

  return true;
}
