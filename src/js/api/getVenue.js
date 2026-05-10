import { API_KEY } from "./api-key";

export async function getVenue(id) {
  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/holidaze/venues/${id}?_bookings=true`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Noroff-API-Key": API_KEY,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors?.[0]?.message || "Failed to fetch venue");
    }

    return data.data;
  } catch (error) {
    console.error("Get venue error:", error);
    throw error;
  }
}
