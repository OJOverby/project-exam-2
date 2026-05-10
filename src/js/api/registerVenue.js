import { API_KEY } from "./api-key";

export async function registerVenue({
  name,
  description,
  media = [],
  price,
  maxGuests,
  meta = {
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
  },
  location = {},
  token,
}) {
  const body = {
    name,
    description,
    media,
    price: Number(price),
    maxGuests: Number(maxGuests),
    meta,
    location: {
      address: location.address || "",
      city: location.city || "",
      zip: location.zip || "",
      country: location.country || "",
      continent: location.continent || "",
      lat: Number(location.lat || 0),
      lng: Number(location.lng || 0),
    },
  };

  const response = await fetch("https://v2.api.noroff.dev/holidaze/venues", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Noroff-API-Key": API_KEY,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors?.[0]?.message || "Creating venue failed");
  }

  return data;
}
