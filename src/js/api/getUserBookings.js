export async function getUserBookings({ name, token }) {
  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/holidaze/profiles/${name}/bookings?_venue=true`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Noroff-API-Key": "6210f1ec-be4c-46be-93de-91c4626474fe",
          Authorization: `Bearer ${token}`
        }
      }
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