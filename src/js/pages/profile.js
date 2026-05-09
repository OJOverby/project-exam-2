import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore.js";
import { Navigate, Link } from "react-router-dom";
import { getUserBookings } from "../api/getUserBookings.js";
import { updateAvatar } from "../api/updateAvatar.js";
import { ProfileWrapper } from "../components/styled/profileWrapper.js";

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function getNights(dateFrom, dateTo) {
  return Math.max(
    1,
    Math.ceil((new Date(dateTo) - new Date(dateFrom)) / (1000 * 60 * 60 * 24)),
  );
}

export function Profile() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const setAuth = useAuthStore((state) => state.setAuth);

  const [bookings, setBookings] = useState([]);
  const [pageError, setPageError] = useState("");
  const [avatarError, setAvatarError] = useState("");
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
        setPageError("");

        const data = await getUserBookings({
          name: user.name,
          token,
        });

        setBookings(data);
      } catch (error) {
        setPageError(error.message);
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
          <p className="eyebrow">Customer profile</p>
          <h1>My Profile</h1>

          <p>
            <strong>Name:</strong> {user.name}
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

      <div className="sectionHeader">
        <div>
          <h2>My bookings</h2>
          <p>Manage your upcoming and previous stays.</p>
        </div>

        <Link className="buttonLink primary" to="/venues">
          Browse venues
        </Link>
      </div>

      {loading && <p className="message">Loading bookings...</p>}

      {pageError && <p className="message error">{pageError}</p>}

      {!loading && bookings.length === 0 && (
        <div className="emptyState">
          <h3>No bookings yet</h3>
          <p>Start exploring venues and plan your next stay.</p>
          <Link className="buttonLink primary" to="/venues">
            Browse venues
          </Link>
        </div>
      )}

      {!loading && bookings.length > 0 && (
        <div className="bookingsGrid">
          {bookings.map((booking) => {
            const nights = getNights(booking.dateFrom, booking.dateTo);
            const total =
              booking.venue?.price && nights
                ? booking.venue.price * nights
                : null;

            const isPast = new Date(booking.dateTo) < new Date();

            return (
              <article className="bookingCard" key={booking.id}>
                <div className="cardHeader">
                  <div>
                    <h3>{booking.venue?.name || "Venue"}</h3>
                    <span className={isPast ? "badge muted" : "badge"}>
                      {isPast ? "Past stay" : "Upcoming"}
                    </span>
                  </div>
                </div>

                <div className="detailsList">
                  <div className="detailRow">
                    <span>From</span>
                    <strong>{formatDate(booking.dateFrom)}</strong>
                  </div>

                  <div className="detailRow">
                    <span>To</span>
                    <strong>{formatDate(booking.dateTo)}</strong>
                  </div>

                  <div className="detailRow">
                    <span>Guests</span>
                    <strong>{booking.guests}</strong>
                  </div>

                  <div className="detailRow">
                    <span>Nights</span>
                    <strong>{nights}</strong>
                  </div>

                  {booking.venue?.price && (
                    <div className="detailRow">
                      <span>Per night</span>
                      <strong>{booking.venue.price} NOK</strong>
                    </div>
                  )}

                  {total && (
                    <div className="detailRow total">
                      <span>Total</span>
                      <strong>{total} NOK</strong>
                    </div>
                  )}
                </div>

                {booking.venue?.id && (
                  <Link
                    className="buttonLink secondary fullWidth"
                    to={`/venue/${booking.venue.id}`}
                  >
                    View venue
                  </Link>
                )}
              </article>
            );
          })}
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
