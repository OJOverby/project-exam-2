import { useMemo, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { registerVenue } from "../../api/registerVenue.js";
import { useAuthStore } from "../../store/authStore.js";
import { FormWrapper } from "../../components/styled/formWrapper.js";

const amenities = [
  ["wifi", "Wifi"],
  ["parking", "Parking"],
  ["breakfast", "Breakfast"],
  ["pets", "Pets allowed"],
];

export function NewVenue() {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [preview, setPreview] = useState({
    name: "",
    description: "",
    imageUrl: "",
    imageAlt: "",
    price: "",
    maxGuests: "",
    city: "",
    country: "",
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
  });

  const selectedAmenities = useMemo(() => {
    return amenities.filter(([key]) => preview[key]);
  }, [preview]);

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  if (!user.venueManager) {
    return <Navigate to="/profile" replace />;
  }

  function updatePreview(event) {
    const { name, value, type, checked } = event.target;

    setPreview((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const form = event.target;

    const venueData = {
      name: form.name.value.trim(),
      description: form.description.value.trim(),
      media: form.imageUrl.value
        ? [
            {
              url: form.imageUrl.value.trim(),
              alt: form.imageAlt.value.trim() || form.name.value.trim(),
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
        address: form.address.value.trim(),
        city: form.city.value.trim(),
        zip: form.zip.value.trim(),
        country: form.country.value.trim(),
        continent: form.continent.value.trim(),
        lat: 0,
        lng: 0,
      },
      token,
    };

    try {
      setSubmitting(true);

      const response = await registerVenue(venueData);
      navigate(`/venue/${response.data.id}`);
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <FormWrapper className="venueFormPage">
      <div className="formHeader">
        <p className="eyebrow">Manager</p>
        <h1>Create a new venue</h1>
        <p>Add the details guests need before booking your stay.</p>
      </div>

      <div className="venueFormLayout">
        <form className="venueForm" onSubmit={handleSubmit}>
          <section className="formSection">
            <h2>Basic details</h2>

            <div className="fieldGroup">
              <label htmlFor="name">Venue name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={preview.name}
                onChange={updatePreview}
                required
              />
            </div>

            <div className="fieldGroup">
              <label htmlFor="description">
                Description
                <span>{preview.description.length}/1000</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={preview.description}
                onChange={updatePreview}
                maxLength="1000"
                required
              />
            </div>
          </section>

          <section className="formSection">
            <h2>Image</h2>

            <div className="fieldGroup">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="url"
                value={preview.imageUrl}
                onChange={updatePreview}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="fieldGroup">
              <label htmlFor="imageAlt">Image alt text</label>
              <input
                id="imageAlt"
                name="imageAlt"
                type="text"
                value={preview.imageAlt}
                onChange={updatePreview}
                placeholder="Cozy cabin near a lake"
              />
              <p className="helperText">
                Describe the image for accessibility.
              </p>
            </div>
          </section>

          <section className="formSection twoColumn">
            <div className="fieldGroup">
              <label htmlFor="price">Price per night</label>
              <input
                id="price"
                name="price"
                type="number"
                min="0"
                value={preview.price}
                onChange={updatePreview}
                required
              />
            </div>

            <div className="fieldGroup">
              <label htmlFor="maxGuests">Max guests</label>
              <input
                id="maxGuests"
                name="maxGuests"
                type="number"
                min="1"
                value={preview.maxGuests}
                onChange={updatePreview}
                required
              />
            </div>
          </section>

          <section className="formSection">
            <h2>Amenities</h2>

            <div className="amenitiesGrid">
              {amenities.map(([key, label]) => (
                <label className="amenityOption" key={key}>
                  <input
                    name={key}
                    type="checkbox"
                    checked={preview[key]}
                    onChange={updatePreview}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </section>

          <section className="formSection">
            <h2>Location</h2>

            <div className="fieldGroup">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                value={preview.address || ""}
                onChange={updatePreview}
              />
            </div>

            <div className="twoColumn">
              <div className="fieldGroup">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={preview.city}
                  onChange={updatePreview}
                  required
                />
              </div>

              <div className="fieldGroup">
                <label htmlFor="zip">Zip code</label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  value={preview.zip || ""}
                  onChange={updatePreview}
                />
              </div>
            </div>

            <div className="twoColumn">
              <div className="fieldGroup">
                <label htmlFor="country">Country</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  value={preview.country}
                  onChange={updatePreview}
                  required
                />
              </div>

              <div className="fieldGroup">
                <label htmlFor="continent">Continent</label>
                <input
                  id="continent"
                  name="continent"
                  type="text"
                  value={preview.continent || ""}
                  onChange={updatePreview}
                />
              </div>
            </div>
          </section>

          {error && <p className="errorMessage">{error}</p>}

          <div className="formActions">
            <button
              className="button primary"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Creating..." : "Create venue"}
            </button>

            <Link className="buttonLink secondary" to="/managerprofile">
              Cancel
            </Link>
          </div>
        </form>

        <aside className="previewCard" aria-label="Venue preview">
          {preview.imageUrl ? (
            <img
              src={preview.imageUrl}
              alt={preview.imageAlt || preview.name || "Venue preview"}
            />
          ) : (
            <div className="imageFallback">Image preview</div>
          )}

          <div className="previewContent">
            <p className="eyebrow">Preview</p>

            <h2>{preview.name || "Your venue name"}</h2>

            <p className="previewLocation">
              {[preview.city, preview.country].filter(Boolean).join(", ") ||
                "City, Country"}
            </p>

            <p className="previewDescription">
              {preview.description ||
                "Your venue description will appear here."}
            </p>

            <div className="previewMeta">
              <span>{preview.maxGuests || 1} guests</span>
              <strong>{preview.price || 0},- per night</strong>
            </div>

            {selectedAmenities.length > 0 && (
              <div className="previewAmenities">
                {selectedAmenities.map(([key, label]) => (
                  <span key={key}>{label}</span>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>
    </FormWrapper>
  );
}
