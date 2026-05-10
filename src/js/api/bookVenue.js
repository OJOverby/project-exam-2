import { API_KEY } from "./api-key";

export async function bookVenue({ dateFrom, dateTo, guests, venueId, token }) {
  try {
    const response = await fetch(
      "https://v2.api.noroff.dev/holidaze/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Noroff-API-Key": API_KEY,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          dateFrom,
          dateTo,
          guests: Number(guests),
          venueId,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors?.[0]?.message || "Booking failed");
    }

    return data;
  } catch (error) {
    console.error("Create booking error:", error);
    throw error;
  }
}
