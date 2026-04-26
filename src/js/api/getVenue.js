export async function getVenue(id) {
  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/holidaze/venues/${id}?_bookings=true`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Noroff-API-Key": "6210f1ec-be4c-46be-93de-91c4626474fe"
        }
      }
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