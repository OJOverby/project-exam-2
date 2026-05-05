import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useApi } from "../api/useApi.js";
import { api } from "../api/api.js";
import { Container } from "../components/styled/container.js";
import { VenueCard } from "../components/styled/venueCard.js";
import { StarSVG } from "../components/svg/star.js";
import { useAuthStore } from "../store/authStore.js";
import { getExcludedDates } from "../utils/bookingDates.js";

function Stars({ rating, max = 5 }) {
  const filled = Math.round(Number(rating) || 0);

  return (
    <span style={{ display: "inline-flex", gap: 4 }}>
      {Array.from({ length: max }).map((_, i) => (
        <StarSVG key={i} fillPercent={i < filled ? 100 : 0} size={18} />
      ))}
    </span>
  );
}

export function Venue() {
  const user = useAuthStore((state) => state.user);
  const params = useParams();

  const productapi = `${api}/${params.id}?_bookings=true`;
  const { data, isLoading, isError } = useApi(productapi);

  const venue = data?.data;

  const excludedDates = useMemo(() => {
    return getExcludedDates(venue?.bookings);
  }, [venue]);

  if (isLoading) {
    return <div>Loading placeholder</div>;
  }

  if (isError) {
    return <div>Error message placeholder</div>;
  }

  return (
    <Container>
      <VenueCard>
        {venue?.media?.[0]?.url && (
          <img
            src={venue.media[0].url}
            alt={venue.media[0].alt || venue.name}
          />
        )}

        <div className="content">
          <h2>{venue?.name}</h2>

          <p className="location">
            {venue?.location?.city}, {venue?.location?.country}
          </p>

          <p>
            <Stars rating={venue?.rating} />
          </p>

          <p className="price">{venue?.price} NOK / night</p>

          <p className="description">{venue?.description}</p>

          <h3>Facilities</h3>

          <div className="facilities">
            <div className="facility">
              <span>Parking</span>
              {venue?.meta?.parking ? (
                <span className="greencheckmark">✔</span>
              ) : (
                <span className="redx">✖</span>
              )}
            </div>

            <div className="facility">
              <span>Breakfast</span>
              {venue?.meta?.breakfast ? (
                <span className="greencheckmark">✔</span>
              ) : (
                <span className="redx">✖</span>
              )}
            </div>

            <div className="facility">
              <span>Wifi</span>
              {venue?.meta?.wifi ? (
                <span className="greencheckmark">✔</span>
              ) : (
                <span className="redx">✖</span>
              )}
            </div>

            <div className="facility">
              <span>Pets</span>
              {venue?.meta?.pets ? (
                <span className="greencheckmark">✔</span>
              ) : (
                <span className="redx">✖</span>
              )}
            </div>
          </div>

          <div className="calendar">
            <h3>Available dates</h3>

            <DatePicker
              inline
              minDate={new Date()}
              excludeDates={excludedDates}
              disabledKeyboardNavigation
            />
          </div>

          <div className="cta">
            {user ? (
              <Link to={`/booking/${venue?.id}`}>
                <button>Book this venue</button>
              </Link>
            ) : (
              <Link to="/login">
                <button>Log in to book</button>
              </Link>
            )}
          </div>
        </div>
      </VenueCard>
    </Container>
  );
}
