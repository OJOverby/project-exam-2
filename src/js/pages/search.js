import { useSearchParams, Link } from "react-router-dom";
import { useApi } from "../api/useApi.js";
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

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const searchUrl = query
    ? `https://v2.api.noroff.dev/holidaze/venues/search?q=${encodeURIComponent(query)}`
    : null;

  const { data, isLoading, isError } = useApi(searchUrl);

  const venues = data?.data ?? [];

  if (!query) {
    return <p>Please enter a search term.</p>;
  }

  if (isLoading) {
    return <div>Loading search results...</div>;
  }

  if (isError) {
    return <div>Error loading search results.</div>;
  }

  return (
    <section>
      <h2>Search results for "{query}"</h2>

      {venues.length === 0 ? (
        <p>No venues found.</p>
      ) : (
        <Container>
          {venues.map((venue) => (
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
      )}
    </section>
  );
}
