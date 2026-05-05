import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { registerVenue } from "../../api/registerVenue.js";
import { useAuthStore } from "../../store/authStore.js";
import { FormWrapper } from "../../components/styled/formWrapper.js";

export function NewVenue() {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  const [error, setError] = useState("");

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  if (!user.venueManager) {
    return <Navigate to="/profile" replace />;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const form = event.target;

    const venueData = {
      name: form.name.value,
      description: form.description.value,
      media: form.imageUrl.value
        ? [
            {
              url: form.imageUrl.value,
              alt: form.imageAlt.value || form.name.value,
            },
          ]
        : [],
      price: Number(form.price.value),
      maxGuests: Number(form.maxGuests.value),
      meta: {
        wifi: form.wifi.checked,
        parking: form.parking.checked,
        breakfast: form.breakfast.checked,
        pets: form.pets.checked,
      },
      location: {
        address: form.address.value,
        city: form.city.value,
        zip: form.zip.value,
        country: form.country.value,
        continent: form.continent.value,
        lat: 0,
        lng: 0,
      },
      token,
    };

    try {
      const response = await registerVenue(venueData);
      console.log("Venue created:", response);

      navigate(`/venue/${response.data.id}`);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <h2>Register New Venue</h2>

        <input name="name" type="text" placeholder="Venue name" required />

        <textarea
          name="description"
          placeholder="Description"
          required
        ></textarea>

        <input name="imageUrl" type="url" placeholder="Image URL" />
        <input name="imageAlt" type="text" placeholder="Image alt text" />

        <input
          name="price"
          type="number"
          min="0"
          placeholder="Price per night"
          required
        />

        <input
          name="maxGuests"
          type="number"
          min="1"
          placeholder="Max guests"
          required
        />

        <label>
          <input name="wifi" type="checkbox" />
          Wifi
        </label>

        <label>
          <input name="parking" type="checkbox" />
          Parking
        </label>

        <label>
          <input name="breakfast" type="checkbox" />
          Breakfast
        </label>

        <label>
          <input name="pets" type="checkbox" />
          Pets allowed
        </label>

        <input name="address" type="text" placeholder="Address" />
        <input name="city" type="text" placeholder="City" />
        <input name="zip" type="text" placeholder="Zip code" />
        <input name="country" type="text" placeholder="Country" />
        <input name="continent" type="text" placeholder="Continent" />
        <button type="submit">Create Venue</button>

        {error && <p>{error}</p>}
      </form>
    </FormWrapper>
  );
}
