import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore.js";
import { Navigate } from "react-router-dom";
import { getUserBookings } from "../api/getUserBookings.js";
import { updateAvatar } from "../api/updateAvatar.js";
import { ProfileWrapper } from "../components/styled/profileWrapper.js";

export function Profile() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [avatarModalOpen, setAvatarModalOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(user?.avatar?.url || "");
  const [avatarAlt, setAvatarAlt] = useState(user?.avatar?.alt || "");

  useEffect(() => {
    if (!user?.name || !token) {
      setLoading(false);
      return;
    }

    async function loadBookings() {
      try {
        setLoading(true);

        const data = await getUserBookings({
          name: user.name,
          token,
        });

        setBookings(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, [user?.name, token]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  function handleLogout() {
    clearAuth();
  }

  async function handleAvatarUpdate(event) {
    event.preventDefault();
    setError("");

    try {
      const updatedUser = await updateAvatar({
        name: user.name,
        avatar: {
          url: avatarUrl,
          alt: avatarAlt || "Profile picture",
        },
        token,
      });

      useAuthStore.getState().setAuth({
        ...user,
        avatar: updatedUser.avatar,
        accessToken: token,
      });

      setAvatarModalOpen(false);
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
          <h2>My Profile</h2>

          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <button type="button" onClick={() => setAvatarModalOpen(true)}>
            Change avatar
          </button>

          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="bookingsHeader">
        <h3>My bookings</h3>
      </div>

      {loading && <p className="message">Loading bookings...</p>}

      {error && <p className="message error">{error}</p>}

      {!loading && bookings.length === 0 && (
        <p className="message">You have no bookings yet.</p>
      )}

      {!loading && bookings.length > 0 && (
        <div className="bookingsGrid">
          {bookings.map((booking) => (
            <div className="bookingCard" key={booking.id}>
              <h4>{booking.venue?.name || "Venue"}</h4>

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

              {booking.venue?.price && (
                <p>
                  <strong>Price per night:</strong> {booking.venue.price} NOK
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {avatarModalOpen && (
        <div className="modalOverlay">
          <div className="modal">
            <button
              className="closeButton"
              type="button"
              onClick={() => setAvatarModalOpen(false)}
            >
              ×
            </button>

            <h3>Update avatar</h3>

            <form onSubmit={handleAvatarUpdate}>
              <input
                type="url"
                placeholder="Avatar image URL"
                value={avatarUrl}
                onChange={(event) => setAvatarUrl(event.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Avatar alt text"
                value={avatarAlt}
                onChange={(event) => setAvatarAlt(event.target.value)}
              />

              <button type="submit">Save avatar</button>
            </form>
          </div>
        </div>
      )}
    </ProfileWrapper>
  );
}
