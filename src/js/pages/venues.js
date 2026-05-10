import { useState, useMemo } from "react";
import { Range } from "react-range";
import { Link } from "react-router-dom";
import { useApi } from "../api/useApi.js";
import { api } from "../api/api.js";
import { Card } from "../components/styled/card.js";
import { Container } from "../components/styled/container.js";
import { StarSVG } from "../components/svg/star.js";
import { Loading } from "../components/styled/loading.js";
import {
  VenuesLayout,
  FilterPanel,
  ResultsGrid,
  EmptyState,
} from "../components/styled/venuesLayout.js";

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

const isTrue = (value) =>
  value === true || value === "true" || value === 1 || value === "1";

const PRICE_MIN = 0;
const PRICE_MAX = 10000;

const AMENITIES = ["breakfast", "wifi", "pets", "parking"];

export function Venues() {
  const { data, isLoading, isError } = useApi(api);
  const venues = useMemo(() => data?.data ?? [], [data]);

  const [minRating, setMinRating] = useState(0);
  const [priceRange, setPriceRange] = useState([PRICE_MIN, PRICE_MAX]);
  const [amenities, setAmenities] = useState({
    breakfast: false,
    wifi: false,
    pets: false,
    parking: false,
  });

  const filteredVenues = useMemo(() => {
    const [minPrice, maxPrice] = priceRange;

    return venues.filter((venue) => {
      const price = Number(venue.price ?? 0);
      const rating = Number(venue.rating ?? 0);
      const meta = venue.meta || {};

      const matchesRating = rating >= minRating;
      const matchesPrice = price >= minPrice && price <= maxPrice;

      const matchesAmenities = AMENITIES.every((key) => {
        return !amenities[key] || isTrue(meta[key]);
      });

      return matchesRating && matchesPrice && matchesAmenities;
    });
  }, [venues, minRating, priceRange, amenities]);

  const resetFilters = () => {
    setMinRating(0);
    setPriceRange([PRICE_MIN, PRICE_MAX]);
    setAmenities({
      breakfast: false,
      wifi: false,
      pets: false,
      parking: false,
    });
  };

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
        <EmptyState>Something went wrong while loading venues.</EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <VenuesLayout>
        <FilterPanel aria-label="Venue filters">
          <div className="filterHeader">
            <h1>Venues</h1>
            <p>{filteredVenues.length} stays found</p>
          </div>

          <div className="filterGroup">
            <label htmlFor="minimum-rating">Minimum rating</label>
            <select
              id="minimum-rating"
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
            >
              <option value={0}>All ratings</option>
              <option value={1}>1+ stars</option>
              <option value={2}>2+ stars</option>
              <option value={3}>3+ stars</option>
              <option value={4}>4+ stars</option>
              <option value={5}>5 stars</option>
            </select>
          </div>

          <div className="filterGroup">
            <label>
              Price range
              <span>
                {priceRange[0]} - {priceRange[1]}
              </span>
            </label>

            <div className="rangeWrapper">
              <Range
                step={50}
                min={PRICE_MIN}
                max={PRICE_MAX}
                values={priceRange}
                onChange={setPriceRange}
                renderTrack={({ props, children }) => (
                  <div {...props} className="rangeTrack" style={props.style}>
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div {...props} className="rangeThumb" style={props.style} />
                )}
              />

              <div className="rangeLabels">
                <span>{PRICE_MIN}</span>
                <span>{PRICE_MAX}</span>
              </div>
            </div>
          </div>

          <fieldset className="filterGroup">
            <legend>Amenities</legend>

            {AMENITIES.map((key) => (
              <label className="checkboxLabel" key={key}>
                <input
                  type="checkbox"
                  checked={amenities[key]}
                  onChange={(e) =>
                    setAmenities((prev) => ({
                      ...prev,
                      [key]: e.target.checked,
                    }))
                  }
                />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            ))}
          </fieldset>

          <button className="resetButton" type="button" onClick={resetFilters}>
            Reset filters
          </button>
        </FilterPanel>

        <section aria-label="Venue results">
          {filteredVenues.length > 0 ? (
            <ResultsGrid>
              {filteredVenues.map((venue) => (
                <Card key={venue.id}>
                  <img
                    src={venue.media?.[0]?.url || "/images/placeholder.jpeg"}
                    alt={venue.media?.[0]?.alt || venue.name}
                  />

                  <div className="cardContent">
                    <Link className="titleLink" to={`/venue/${venue.id}`}>
                      <h2>{venue.name}</h2>
                    </Link>

                    <p className="location">
                      {venue.location?.city}, {venue.location?.country}
                    </p>

                    <Stars rating={venue.rating} />
                  </div>

                  <div className="priceRow">
                    <div className="price">
                      <strong>{venue.price},-</strong>
                      <span>per night</span>
                    </div>

                    <Link className="buttonLink" to={`/venue/${venue.id}`}>
                      View more
                    </Link>
                  </div>
                </Card>
              ))}
            </ResultsGrid>
          ) : (
            <EmptyState>
              No venues match your filters. Tiny tragedy. Try widening the
              search.
            </EmptyState>
          )}
        </section>
      </VenuesLayout>
    </Container>
  );
}
