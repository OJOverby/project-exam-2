import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore.js";
import { getManagerVenues } from "../../api/getManagerVenues.js";
import { deleteVenue } from "../../api/deleteVenue.js";
import { updateVenue } from "../../api/updateVenue.js";
import { ProfileWrapper } from "../../components/styled/profileWrapper.js";

export function ManagerProfile() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const [venues, setVenues] = useState([]);
  const [editingVenueId, setEditingVenueId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.name || !token) {
      setLoading(false);
      return;
    }

    async function loadVenues() {
      try {
        setLoading(true);

        const data = await getManagerVenues({
          name: user.name,
          token,
        });

        setVenues(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadVenues();
  }, [user?.name, token]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!user.venueManager) {
    return <Navigate to="/profile" replace />;
  }

  function handleLogout() {
    clearAuth();
  }

  async function handleDeleteVenue(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this venue?",
    );

    if (!confirmed) return;

    try {
      await deleteVenue({ id, token });

      setVenues((currentVenues) =>
        currentVenues.filter((venue) => venue.id !== id),
      );
    } catch (error) {
      setError(error.message);
    }
  }

  async function handleUpdateVenue(event, venueId) {
    event.preventDefault();
    setError("");

    const form = event.target;

    const venueData = {
      name: form.name.value,
      description: form.description.value,
      price: Number(form.price.value),
      maxGuests: Number(form.maxGuests.value),
    };

    try {
      const updatedVenue = await updateVenue({
        id: venueId,
        venueData,
        token,
      });

      setVenues((currentVenues) =>
        currentVenues.map((venue) =>
          venue.id === venueId
            ? {
                ...venue,
                ...updatedVenue,
                bookings: venue.bookings,
              }
            : venue,
        ),
      );

      setEditingVenueId(null);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <ProfileWrapper>
      <div className="profileCard">
        {user.avatar?.url && (
          <img
            className="profileAvatar"
            src={user.avatar.url}
            alt={user.avatar.alt || "Profile picture"}
          />
        )}

        <div className="profileInfo">
          <h2>My Manager Profile</h2>

          <p>
            <strong>Manager Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <Link to="/newvenue">
            <button type="button">Create new venue</button>
          </Link>

          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="bookingsHeader">
        <h3>My venues</h3>
      </div>

      {loading && <p className="message">Loading venues...</p>}

      {error && <p className="message error">{error}</p>}

      {!loading && venues.length === 0 && (
        <p className="message">You have not created any venues yet.</p>
      )}

      {!loading && venues.length > 0 && (
        <div className="bookingsGrid">
          {venues.map((venue) => (
            <div className="bookingCard" key={venue.id}>
              {editingVenueId === venue.id ? (
                <form onSubmit={(event) => handleUpdateVenue(event, venue.id)}>
                  <input
                    name="name"
                    type="text"
                    defaultValue={venue.name}
                    required
                  />

                  <textarea
                    name="description"
                    defaultValue={venue.description}
                    required
                  />

                  <input
                    name="price"
                    type="number"
                    min="0"
                    defaultValue={venue.price}
                    required
                  />

                  <input
                    name="maxGuests"
                    type="number"
                    min="1"
                    defaultValue={venue.maxGuests}
                    required
                  />

                  <button type="submit">Save changes</button>

                  <button type="button" onClick={() => setEditingVenueId(null)}>
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <h4>{venue.name}</h4>

                  <p>
                    <strong>Price:</strong> {venue.price},- per night
                  </p>

                  <p>
                    <strong>Max guests:</strong> {venue.maxGuests}
                  </p>

                  <p>
                    <strong>Bookings:</strong> {venue.bookings?.length || 0}
                  </p>

                  <Link to={`/venue/${venue.id}`}>
                    <button type="button">View venue</button>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setEditingVenueId(venue.id)}
                  >
                    Edit venue
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteVenue(venue.id)}
                  >
                    Delete venue
                  </button>

                  <h5>Bookings for this venue</h5>

                  {!venue.bookings || venue.bookings.length === 0 ? (
                    <p>No bookings for this venue yet.</p>
                  ) : (
                    venue.bookings.map((booking) => (
                      <div key={booking.id} className="managerBooking">
                        <p>
                          <strong>Customer:</strong>{" "}
                          {booking.customer?.name || "Unknown customer"}
                        </p>

                        <p>
                          <strong>From:</strong>{" "}
                          {new Date(booking.dateFrom).toLocaleDateString()}
                        </p>

                        <p>
                          <strong>To:</strong>{" "}
                          {new Date(booking.dateTo).toLocaleDateString()}
                        </p>

                        <p>
                          <strong>Guests:</strong> {booking.guests}
                        </p>
                      </div>
                    ))
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </ProfileWrapper>
  );
}
