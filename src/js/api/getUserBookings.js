import { API_KEY } from "./api-key";

export async function getUserBookings({ name, token }) {
  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/holidaze/profiles/${name}/bookings?_venue=true`,
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
      throw new Error(data.errors?.[0]?.message || "Failed to fetch bookings");
    }

    return data.data;
  } catch (error) {
    console.error("Get profile bookings error:", error);
    throw error;
  }
}
