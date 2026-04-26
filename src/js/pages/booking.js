import { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BookingWrapper } from "../components/styled/bookingWrapper.js";
import { bookVenue } from "../api/bookVenue.js";
import { getVenue } from "../api/getVenue.js";
import { useAuthStore } from "../store/authStore.js";
import { getExcludedDates, isRangeAvailable } from "../utils/bookingDates.js";

export function Booking() {
  const navigate = useNavigate();
  const { id } = useParams();

  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);

  const [venue, setVenue] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || !token) {
      setLoading(false);
      return;
    }

    async function loadVenue() {
      try {
        setLoading(true);
        const venueData = await getVenue(id);
        setVenue(venueData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadVenue();
  }, [id, token]);

  const excludedDates = useMemo(() => {
    return getExcludedDates(venue?.bookings);
  }, [venue]);

  const numberOfNights = useMemo(() => {
    if (!dateFrom || !dateTo || dateTo <= dateFrom) return 0;

    const timeDifference = dateTo.getTime() - dateFrom.getTime();
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  }, [dateFrom, dateTo]);

  const totalPrice = useMemo(() => {
    const price = Number(venue?.price || 0);
    return price * numberOfNights;
  }, [venue?.price, numberOfNights]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!dateFrom || !dateTo) {
      setError("Please select check-in and check-out dates");
      return;
    }

    if (dateTo <= dateFrom) {
      setError("Check-out must be after check-in");
      return;
    }

    if (!isRangeAvailable(dateFrom, dateTo, excludedDates)) {
      setError("Selected dates are not available");
      return;
    }

    if (venue?.maxGuests && Number(guests) > venue.maxGuests) {
      setError(`This venue allows a maximum of ${venue.maxGuests} guests`);
      return;
    }

    try {
      const response = await bookVenue({
        dateFrom: dateFrom.toISOString(),
        dateTo: dateTo.toISOString(),
        guests: Number(guests),
        venueId: id,
        token,
      });

      console.log("Booking created:", response);
      setSuccess("Booking created successfully");
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  }

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return <p>Loading venue availability...</p>;
  }

  return (
    <BookingWrapper>
      <div className="bookingCard">
        <h2>Book venue</h2>

        {venue && (
          <div className="venueInfo">
            <p>
              <strong>{venue.name}</strong>
            </p>
            <p>Max guests: {venue.maxGuests}</p>
            <p>Price per night: {Number(venue.price)} NOK</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label>Check-in</label>
          <DatePicker
            selected={dateFrom}
            onChange={(date) => {
              setDateFrom(date);
              setDateTo(null);
            }}
            minDate={new Date()}
            excludeDates={excludedDates}
            placeholderText="Select check-in date"
            dateFormat="yyyy-MM-dd"
          />

          <label>Check-out</label>
          <DatePicker
            selected={dateTo}
            onChange={(date) => setDateTo(date)}
            minDate={dateFrom || new Date()}
            excludeDates={excludedDates}
            placeholderText="Select check-out date"
            dateFormat="yyyy-MM-dd"
            disabled={!dateFrom}
          />

          <label htmlFor="guests">Guests</label>
          <input
            id="guests"
            name="guests"
            type="number"
            min="1"
            max={venue?.maxGuests || 1}
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
            required
          />

          {venue && (
            <div className="priceBox">
              <p>Nights: {numberOfNights}</p>
              <p className="totalPrice">
                <strong>Total price: {totalPrice} NOK</strong>
              </p>
            </div>
          )}

          <button type="submit" disabled={!dateFrom || !dateTo}>
            Book now
          </button>
        </form>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </BookingWrapper>
  );
}