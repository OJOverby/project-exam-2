import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore.js";
import { Navigate } from "react-router-dom";
import { getUserBookings } from "../api/getUserBookings.js";

export function Profile() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

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
          token
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

  return (
    <section>
      <h2>My Profile</h2>

      {user.avatar?.url && (
        <img
          src={user.avatar.url}
          alt={user.avatar.alt || "Profile picture"}
          width="150"
        />
      )}

      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <button onClick={handleLogout}>Logout</button>

      <h3>My bookings</h3>

      {loading && <p>Loading bookings...</p>}

      {error && <p>{error}</p>}

      {!loading && bookings.length === 0 && (
        <p>You have no bookings yet.</p>
      )}

      {!loading &&
        bookings.map((booking) => (
          <div key={booking.id}>
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
    </section>
  );
}