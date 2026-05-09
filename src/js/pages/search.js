import { useSearchParams, Link } from "react-router-dom";
import { useApi } from "../api/useApi.js";
import { Card } from "../components/styled/card.js";
import { Container } from "../components/styled/container.js";
import { StarSVG } from "../components/svg/star.js";
import { Loading } from "../components/styled/loading.js";
import { ResultsGrid, EmptyState } from "../components/styled/venuesLayout.js";
import { SearchHeader } from "../components/styled/searchHeader.js";

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

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() || "";

  const searchUrl = query
    ? `https://v2.api.noroff.dev/holidaze/venues/search?q=${encodeURIComponent(
        query,
      )}`
    : null;

  const { data, isLoading, isError } = useApi(searchUrl);
  const venues = data?.data ?? [];

  if (!query) {
    return (
      <Container>
        <EmptyState>
          <h1>No search term</h1>
          <p>Search for a destination or venue to find matching stays.</p>
          <Link className="buttonLink primary" to="/venues">
            Browse venues
          </Link>
        </EmptyState>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <EmptyState>
          <Loading aria-label="Loading search results" role="status">
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
        <EmptyState>
          <h1>Something went wrong</h1>
          <p>We could not load search results right now.</p>
          <Link className="buttonLink primary" to="/venues">
            Browse venues
          </Link>
        </EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <SearchHeader>
        <p className="eyebrow">Search results</p>
        <h1>Results for “{query}”</h1>
        <p>
          {venues.length === 1
            ? "1 stay found"
            : `${venues.length} stays found`}
        </p>
      </SearchHeader>

      {venues.length === 0 ? (
        <EmptyState>
          <h2>No venues found</h2>
          <p>Try a different destination, venue name, or category.</p>
          <Link className="buttonLink primary" to="/venues">
            Browse all venues
          </Link>
        </EmptyState>
      ) : (
        <ResultsGrid>
          {venues.map((venue) => (
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
                  View
                </Link>
              </div>
            </Card>
          ))}
        </ResultsGrid>
      )}
    </Container>
  );
}
