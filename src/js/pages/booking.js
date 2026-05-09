import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BookingWrapper } from "../components/styled/bookingWrapper.js";
import { bookVenue } from "../api/bookVenue.js";
import { getVenue } from "../api/getVenue.js";
import { useAuthStore } from "../store/authStore.js";
import { getExcludedDates, isRangeAvailable } from "../utils/bookingDates.js";

function formatDate(date) {
  if (!date) return "Not selected";

  return new Date(date).toLocaleDateString();
}

function getNextDay(date) {
  if (!date) return new Date();

  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + 1);

  return nextDay;
}

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
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!id || !token) {
      setLoading(false);
      return;
    }

    async function loadVenue() {
      try {
        setLoading(true);
        setError("");

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
  }, [venue?.bookings]);

  const minCheckOutDate = useMemo(() => {
    return getNextDay(dateFrom);
  }, [dateFrom]);

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

    if (!dateFrom || !dateTo) {
      setError("Please select check-in and check-out dates.");
      return;
    }

    if (dateTo <= dateFrom) {
      setError("Check-out must be after check-in.");
      return;
    }

    if (!isRangeAvailable(dateFrom, dateTo, excludedDates)) {
      setError("Selected dates are not available.");
      return;
    }

    if (venue?.maxGuests && Number(guests) > venue.maxGuests) {
      setError(`This venue allows a maximum of ${venue.maxGuests} guests.`);
      return;
    }

    try {
      setSubmitting(true);

      await bookVenue({
        dateFrom: dateFrom.toISOString(),
        dateTo: dateTo.toISOString(),
        guests: Number(guests),
        venueId: id,
        token,
      });

      navigate("/profile", {
        state: { message: "Booking created successfully." },
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return (
      <BookingWrapper>
        <div className="messageCard">Loading venue availability...</div>
      </BookingWrapper>
    );
  }

  return (
    <BookingWrapper>
      <div className="bookingHeader">
        <p className="eyebrow">Booking</p>
        <h1>Book your stay</h1>
        <p>
          {venue?.name
            ? `Confirm your dates for ${venue.name}.`
            : "Confirm your stay details."}
        </p>
      </div>

      <div className="bookingLayout">
        <form className="bookingForm" onSubmit={handleSubmit}>
          <div>
            <h2>Stay details</h2>
            <p className="helperText">Booked dates are unavailable.</p>
          </div>

          <div className="fieldGroup">
            <label htmlFor="check-in">Check-in</label>
            <DatePicker
              id="check-in"
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
          </div>

          <div className="fieldGroup">
            <label htmlFor="check-out">
              Check-out
              {!dateFrom && <span>Select check-in first</span>}
            </label>

            <DatePicker
              id="check-out"
              selected={dateTo}
              onChange={(date) => setDateTo(date)}
              minDate={minCheckOutDate}
              excludeDates={excludedDates}
              placeholderText="Select check-out date"
              dateFormat="yyyy-MM-dd"
              disabled={!dateFrom}
            />
          </div>

          <div className="fieldGroup">
            <label htmlFor="guests">
              Guests
              {venue?.maxGuests && <span>Max {venue.maxGuests}</span>}
            </label>

            <input
              id="guests"
              name="guests"
              type="number"
              min="1"
              max={venue?.maxGuests || 1}
              value={guests}
              onChange={(event) => setGuests(Number(event.target.value))}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button
            className="button primary"
            type="submit"
            disabled={!dateFrom || !dateTo || submitting}
          >
            {submitting ? "Booking..." : "Book now"}
          </button>

          <Link className="buttonLink secondary" to={`/venue/${id}`}>
            Back to venue
          </Link>
        </form>

        <aside className="summaryCard" aria-label="Booking summary">
          {venue?.media?.[0]?.url ? (
            <img
              className="venueImage"
              src={venue.media[0].url}
              alt={venue.media[0].alt || venue.name}
            />
          ) : (
            <div className="imageFallback">No image available</div>
          )}

          <div className="summaryContent">
            <div>
              <h2>{venue?.name || "Venue"}</h2>

              {venue?.location && (
                <p className="location">
                  {venue.location.city}, {venue.location.country}
                </p>
              )}
            </div>

            <div className="summaryRows">
              <div className="summaryRow">
                <span>Check-in</span>
                <strong>{formatDate(dateFrom)}</strong>
              </div>

              <div className="summaryRow">
                <span>Check-out</span>
                <strong>{formatDate(dateTo)}</strong>
              </div>

              <div className="summaryRow">
                <span>Guests</span>
                <strong>{guests}</strong>
              </div>

              <div className="summaryRow">
                <span>Nights</span>
                <strong>{numberOfNights}</strong>
              </div>

              <div className="summaryRow">
                <span>Price per night</span>
                <strong>{Number(venue?.price || 0)} NOK</strong>
              </div>

              <div className="summaryRow total">
                <span>Total</span>
                <strong>{totalPrice} NOK</strong>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </BookingWrapper>
  );
}
