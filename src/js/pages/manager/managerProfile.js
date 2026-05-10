import { useEffect, useMemo, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore.js";
import { getManagerVenues } from "../../api/getManagerVenues.js";
import { deleteVenue } from "../../api/deleteVenue.js";
import { updateVenue } from "../../api/updateVenue.js";
import { ProfileWrapper } from "../../components/styled/profileWrapper.js";
import { updateAvatar } from "../../api/updateAvatar.js";

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function ManagerProfile() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const [avatarModalOpen, setAvatarModalOpen] = useState(false);
  const setAuth = useAuthStore((state) => state.setAuth);
  const [avatarUrl, setAvatarUrl] = useState(user?.avatar?.url || "");
  const [avatarAlt, setAvatarAlt] = useState(user?.avatar?.alt || "");
  const [avatarError, setAvatarError] = useState("");

  const [venues, setVenues] = useState([]);
  const [editingVenueId, setEditingVenueId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const stats = useMemo(() => {
    const totalBookings = venues.reduce(
      (sum, venue) => sum + (venue.bookings?.length || 0),
      0,
    );

    const estimatedRevenue = venues.reduce((sum, venue) => {
      const venueBookings = venue.bookings || [];
      return sum + venueBookings.length * Number(venue.price || 0);
    }, 0);

    return {
      totalVenues: venues.length,
      totalBookings,
      estimatedRevenue,
    };
  }, [venues]);

  useEffect(() => {
    if (!user?.name || !token) {
      setLoading(false);
      return;
    }

    async function loadVenues() {
      try {
        setLoading(true);
        setError("");

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

  async function handleAvatarUpdate(event) {
    event.preventDefault();
    setAvatarError("");

    try {
      const updatedUser = await updateAvatar({
        name: user.name,
        avatar: {
          url: avatarUrl,
          alt: avatarAlt || "Profile picture",
        },
        token,
      });

      setAuth({
        ...user,
        avatar: updatedUser.avatar,
        accessToken: token,
      });

      setAvatarModalOpen(false);
    } catch (error) {
      setAvatarError(error.message);
    }
  }

  async function handleDeleteVenue(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this venue?",
    );

    if (!confirmed) return;

    try {
      setError("");
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
        <button
          className="button ghost profileLogout"
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button>
        {user.avatar?.url ? (
          <img
            className="profileAvatar"
            src={user.avatar.url}
            alt={user.avatar.alt || "Profile picture"}
          />
        ) : (
          <div className="avatarFallback">
            {user.name?.charAt(0).toUpperCase()}
          </div>
        )}

        <div className="profileInfo">
          <p className="eyebrow">Manager profile</p>
          <h1>My Manager Profile</h1>

          <p>
            <strong>Manager name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <div className="profileActions">
            <button
              className="button secondary"
              type="button"
              onClick={() => setAvatarModalOpen(true)}
            >
              Change avatar
            </button>
          </div>
        </div>
      </div>

      <div className="statsGrid">
        <div className="statCard">
          <span>Total venues</span>
          <strong>{stats.totalVenues}</strong>
        </div>

        <div className="statCard">
          <span>Total bookings</span>
          <strong>{stats.totalBookings}</strong>
        </div>

        <div className="statCard">
          <span>Estimated revenue</span>
          <strong>{stats.estimatedRevenue}</strong>
        </div>
      </div>

      <div className="sectionHeader">
        <div>
          <h2>My venues</h2>
          <p>Review, edit and manage your listed stays.</p>
        </div>

        <Link className="buttonLink primary" to="/newvenue">
          Create venue
        </Link>
      </div>

      {loading && <p className="message">Loading venues...</p>}

      {error && <p className="message error">{error}</p>}

      {!loading && venues.length === 0 && (
        <div className="emptyState">
          <h3>No venues yet</h3>
          <p>Create your first venue and start accepting bookings.</p>
          <Link className="buttonLink primary" to="/newvenue">
            Create your first venue
          </Link>
        </div>
      )}

      {!loading && venues.length > 0 && (
        <div className="bookingsGrid">
          {venues.map((venue) => (
            <article className="bookingCard venueManagementCard" key={venue.id}>
              {editingVenueId === venue.id ? (
                <form
                  className="editForm"
                  onSubmit={(event) => handleUpdateVenue(event, venue.id)}
                >
                  <label>
                    Venue name
                    <input
                      name="name"
                      type="text"
                      defaultValue={venue.name}
                      required
                    />
                  </label>

                  <label>
                    Description
                    <textarea
                      name="description"
                      defaultValue={venue.description}
                      required
                    />
                  </label>

                  <label>
                    Price per night
                    <input
                      name="price"
                      type="number"
                      min="0"
                      defaultValue={venue.price}
                      required
                    />
                  </label>

                  <label>
                    Max guests
                    <input
                      name="maxGuests"
                      type="number"
                      min="1"
                      defaultValue={venue.maxGuests}
                      required
                    />
                  </label>

                  <div className="cardActions">
                    <button className="button primary" type="submit">
                      Save changes
                    </button>

                    <button
                      className="button ghost"
                      type="button"
                      onClick={() => setEditingVenueId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  {venue.media?.[0]?.url && (
                    <img
                      className="venueThumb"
                      src={venue.media[0].url}
                      alt={venue.media[0].alt || venue.name}
                    />
                  )}

                  <div className="venueCardHeader">
                    <div>
                      <h3>{venue.name}</h3>
                      <p>{venue.bookings?.length || 0} bookings</p>
                    </div>
                  </div>

                  <div className="detailsList">
                    <div className="detailRow">
                      <span>Price</span>
                      <strong>{venue.price},- per night</strong>
                    </div>

                    <div className="detailRow">
                      <span>Max guests</span>
                      <strong>{venue.maxGuests}</strong>
                    </div>
                  </div>

                  <div className="cardActions">
                    <Link
                      className="buttonLink secondary"
                      to={`/venue/${venue.id}`}
                    >
                      View venue
                    </Link>

                    <button
                      className="button secondary"
                      type="button"
                      onClick={() => setEditingVenueId(venue.id)}
                    >
                      Edit venue
                    </button>

                    <button
                      className="button danger"
                      type="button"
                      onClick={() => handleDeleteVenue(venue.id)}
                    >
                      Delete
                    </button>
                  </div>

                  <details className="venueBookings">
                    <summary>Bookings for this venue</summary>

                    {!venue.bookings || venue.bookings.length === 0 ? (
                      <p>No bookings for this venue yet.</p>
                    ) : (
                      <div className="managerBookingsList">
                        {venue.bookings.map((booking) => (
                          <div key={booking.id} className="managerBooking">
                            <p>
                              <strong>Customer:</strong>{" "}
                              {booking.customer?.name || "Unknown customer"}
                            </p>

                            <p>
                              <strong>From:</strong>{" "}
                              {formatDate(booking.dateFrom)}
                            </p>

                            <p>
                              <strong>To:</strong> {formatDate(booking.dateTo)}
                            </p>

                            <p>
                              <strong>Guests:</strong> {booking.guests}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </details>
                </>
              )}
            </article>
          ))}
        </div>
      )}
      {avatarModalOpen && (
        <div className="modalOverlay">
          <div className="modal" role="dialog" aria-modal="true">
            <button
              className="closeButton"
              type="button"
              aria-label="Close avatar modal"
              onClick={() => setAvatarModalOpen(false)}
            >
              ×
            </button>

            <h2>Update avatar</h2>

            {avatarError && <p className="message error">{avatarError}</p>}

            <form onSubmit={handleAvatarUpdate}>
              <label>
                Avatar image URL
                <input
                  type="url"
                  value={avatarUrl}
                  onChange={(event) => setAvatarUrl(event.target.value)}
                  required
                />
              </label>

              <label>
                Avatar alt text
                <input
                  type="text"
                  value={avatarAlt}
                  onChange={(event) => setAvatarAlt(event.target.value)}
                />
              </label>

              <button className="button primary" type="submit">
                Save avatar
              </button>
            </form>
          </div>
        </div>
      )}
    </ProfileWrapper>
  );
}
