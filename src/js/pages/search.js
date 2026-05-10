import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useApi } from "../api/useApi.js";
import { Card } from "../components/styled/card.js";
import { Container } from "../components/styled/container.js";
import { StarSVG } from "../components/svg/star.js";
import { Loading } from "../components/styled/loading.js";
import {
  VenuesLayout,
  ResultsGrid,
  EmptyState,
} from "../components/styled/venuesLayout.js";
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

  const [page, setPage] = useState(1);
  const limit = 30;

  const searchUrl = useMemo(() => {
    if (!query) {
      return null;
    }

    const url = new URL("https://v2.api.noroff.dev/holidaze/venues/search");
    url.searchParams.set("q", query);

    return url.toString();
  }, [query]);

  const { data, isLoading, isError } = useApi(searchUrl, 100);
  const venues = useMemo(() => data?.data ?? [], [data]);

  const totalPages = Math.ceil(venues.length / limit) || 1;

  const paginatedVenues = useMemo(() => {
    const start = (page - 1) * limit;
    const end = start + limit;

    return venues.slice(start, end);
  }, [venues, page, limit]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  function scrollToResultsTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function goToPreviousPage() {
    setPage((prev) => Math.max(prev - 1, 1));
    scrollToResultsTop();
  }

  function goToNextPage() {
    setPage((prev) => Math.min(prev + 1, totalPages));
    scrollToResultsTop();
  }

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
          {venues.length} {venues.length === 1 ? "stay" : "stays"} found
        </p>
      </SearchHeader>

      <VenuesLayout className="searchResultsLayout">
        <section aria-label="Search results">
          {paginatedVenues.length === 0 ? (
            <EmptyState>
              <h2>No venues found</h2>
              <p>Try a different destination, venue name, or category.</p>
              <Link className="buttonLink primary" to="/venues">
                Browse all venues
              </Link>
            </EmptyState>
          ) : (
            <>
              <div className="resultsHeader">
                <div>
                  <h2>Matching venues</h2>
                  <p>
                    Showing {paginatedVenues.length}{" "}
                    {paginatedVenues.length === 1 ? "result" : "results"} on
                    page {page} of {totalPages}
                  </p>
                </div>
              </div>

              <ResultsGrid>
                {paginatedVenues.map((venue) => (
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

              {venues.length > limit && (
                <nav
                  className="pagination"
                  aria-label="Search result pagination"
                >
                  <button
                    type="button"
                    disabled={page === 1 || isLoading}
                    onClick={goToPreviousPage}
                  >
                    Previous page
                  </button>

                  <span className="pageStatus" aria-live="polite">
                    Page {page} of {totalPages}
                  </span>

                  <button
                    type="button"
                    disabled={isLoading || page >= totalPages}
                    onClick={goToNextPage}
                  >
                    Next page
                  </button>
                </nav>
              )}
            </>
          )}
        </section>
      </VenuesLayout>
    </Container>
  );
}