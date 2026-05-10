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
import { Loading } from "../components/styled/loading.js";
import { EmptyState } from "../components/styled/venuesLayout.js";

function Stars({ rating, max = 5 }) {
  const filled = Math.round(Number(rating) || 0);

  return (
    <span className="stars" aria-label={`${filled} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <StarSVG key={i} fillPercent={i < filled ? 100 : 0} size={18} />
      ))}
    </span>
  );
}

export function Venue() {
  const user = useAuthStore((state) => state.user);
  const params = useParams();

  const venueApiUrl = `${api}/${params.id}?_bookings=true`;
  const { data, isLoading, isError } = useApi(venueApiUrl);

  const venue = data?.data;

  const excludedDates = useMemo(() => {
    return getExcludedDates(venue?.bookings);
  }, [venue?.bookings]);

  const facilities = [
    ["Parking", venue?.meta?.parking],
    ["Breakfast", venue?.meta?.breakfast],
    ["Wifi", venue?.meta?.wifi],
    ["Pets", venue?.meta?.pets],
  ];

  if (isLoading) {
    return (
      <Container>
        <EmptyState>
          <Loading aria-label="Loading venues" role="status">
            {Array.from({ length: 20 }).map((_, index) => (
              <span
                key={index}
                style={{ "--i": index + 1 }}
                aria-hidden="true"
              />
            ))}
            <div className="plane" aria-hidden="true" />
          </Loading>
        </EmptyState>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <div>Something went wrong while loading this venue.</div>
      </Container>
    );
  }

  return (
    <Container>
      <VenueCard>
        {venue?.media?.[0]?.url ? (
          <img
            src={venue.media[0].url}
            alt={venue.media[0].alt || venue.name}
          />
        ) : (
          <div className="imageFallback">No image available</div>
        )}

        <div className="content">
          <div className="venueHeader">
            <div className="venueTitle">
              <h1>{venue?.name}</h1>

              <p className="location">
                {venue?.location?.city}, {venue?.location?.country}
              </p>
            </div>

            <Stars rating={venue?.rating} />
          </div>

          <p className="description">{venue?.description}</p>

          <section>
            <h2>Facilities</h2>

            <div className="facilities">
              {facilities.map(([label, available]) => (
                <div className="facility" key={label}>
                  <span>{label}</span>
                  <span className={available ? "available" : "unavailable"}>
                    {available ? "Included" : "Not available"}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="calendar">
            <h2>Available dates</h2>
            <p className="calendarHelp">
              Dates with a line through them are already booked.
            </p>

            <DatePicker
              inline
              minDate={new Date()}
              excludeDates={excludedDates}
              disabledKeyboardNavigation
            />
          </section>

          <div className="bookingPanel">
            <p className="price">{venue?.price} per night</p>

            {user ? (
              <Link className="buttonLink" to={`/booking/${venue?.id}`}>
                Book this venue
              </Link>
            ) : (
              <Link className="buttonLink" to="/login">
                Log in to book
              </Link>
            )}
          </div>
        </div>
      </VenueCard>
    </Container>
  );
}
