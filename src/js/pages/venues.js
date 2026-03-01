import { useState, useMemo } from "react";
import { Range } from "react-range";
import { useApi } from "../api/useApi.js";
import { api } from "../api/api.js";
import { Link } from "react-router-dom";
import { Card } from "../components/styled/card.js";
import { Container } from "../components/styled/container.js";
import { StarSVG } from "../components/svg/star.js";

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

const isTrue = (v) => v === true || v === "true" || v === 1 || v === "1";

export function Venues() {
  const { data, isLoading, isError } = useApi(api);
  const apiresponse = data?.data ?? [];

  const [minRating, setMinRating] = useState(0);

  const PRICE_MIN = 0;
  const PRICE_MAX = 10000;

  const [priceRange, setPriceRange] = useState([PRICE_MIN, PRICE_MAX]);

  const [amenities, setAmenities] = useState({
    breakfast: false,
    wifi: false,
    pets: false,
    parking: false,
  });

  const filteredVenues = useMemo(() => {
    const [minPrice, maxPrice] = priceRange;

    return apiresponse.filter((venue) => {
      const price = Number(venue.price ?? 0);
      const rating = Number(venue.rating ?? 0);
      const meta = venue.meta || {};

      const matchesRating = rating >= minRating;
      const matchesPrice = price >= minPrice && price <= maxPrice;

      const matchesAmenities =
        (!amenities.breakfast || isTrue(meta.breakfast)) &&
        (!amenities.wifi || isTrue(meta.wifi)) &&
        (!amenities.pets || isTrue(meta.pets)) &&
        (!amenities.parking || isTrue(meta.parking));

      return matchesRating && matchesPrice && matchesAmenities;
    });
  }, [apiresponse, minRating, priceRange, amenities]);

  if (isLoading) return <div>Loading placeholder</div>;
  if (isError) return <div>Error message placeholder</div>;

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div style={{ width: "260px" }}>
        <h3>Filters</h3>

        <div style={{ marginTop: "1rem" }}>
          <label>Minimum Rating</label>
          <select
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            style={{ width: "100%", marginTop: 6 }}
          >
            <option value={0}>All</option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div style={{ marginTop: "1.25rem" }}>
          <label>
            Price: {priceRange[0]} – {priceRange[1]}
          </label>

          <div style={{ marginTop: 12, padding: "0 6px" }}>
            <Range
              step={50}
              min={PRICE_MIN}
              max={PRICE_MAX}
              values={priceRange}
              onChange={setPriceRange}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    borderRadius: 999,
                    background: "#ddd",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: 16,
                    width: 16,
                    borderRadius: 999,
                    background: "#fff",
                    border: "1px solid #999",
                  }}
                />
              )}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                marginTop: 6,
                opacity: 0.8,
              }}
            >
              <span>{PRICE_MIN}</span>
              <span>{PRICE_MAX}</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "1.25rem" }}>
          <h4 style={{ margin: "0 0 8px 0" }}>Amenities</h4>

          {["breakfast", "wifi", "pets", "parking"].map((key) => (
            <label
              key={key}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginTop: 8,
                userSelect: "none",
              }}
            >
              <input
                type="checkbox"
                checked={amenities[key]}
                onChange={(e) =>
                  setAmenities((prev) => ({ ...prev, [key]: e.target.checked }))
                }
              />
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <Container>
        {filteredVenues.map((venue) => (
          <Card key={venue.id}>
            <img
              src={venue.media?.[0]?.url || "/images/placeholder.jpeg"}
              alt={venue.media?.[0]?.alt || "Venue image"}
            />
            <Link to={`/venue/${venue.id}`}>
              <h2>{venue.name}</h2>
            </Link>
            <p>
              {venue.location?.city}, {venue.location?.country}
            </p>
            <p>
              <Stars rating={venue.rating} />
            </p>
            <div>
              <h2>{venue.price},-</h2>
              <Link to={`/venue/${venue.id}`}>
                <button>View</button>
              </Link>
            </div>
          </Card>
        ))}
      </Container>
    </div>
  );
}