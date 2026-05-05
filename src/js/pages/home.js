import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApi } from "../api/useApi.js";
import { api } from "../api/api.js";
import { Card } from "../components/styled/card.js";
import { Carousel } from "../components/styled/carousel.js";
import { Hero } from "../components/styled/hero.js";
import { HomeSection } from "../components/styled/homeSection.js";
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

export function Home() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useApi(api);
  const apiresponse = data?.data ?? [];
  const [search, setSearch] = useState("");

  const topRated = useMemo(() => {
    return [...apiresponse]
      .sort((a, b) => Number(b.rating ?? 0) - Number(a.rating ?? 0))
      .slice(0, 10);
  }, [apiresponse]);

  function handleSearch(event) {
    event.preventDefault();

    const query = search.trim();

    if (!query) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
  }

  if (isLoading) {
    return <div>Loading placeholder</div>;
  }

  if (isError) {
    return <div>Error message placeholder</div>;
  }

  return (
    <div>
      <Hero>
        <div className="text-container">
          <h2>Find your hidden paradise</h2>
          <p>Discover unique stays, cozy cabins and unforgettable escapes.</p>

          <form onSubmit={handleSearch} className="heroSearch">
            <input
              type="search"
              placeholder="Search destinations or venues"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </Hero>

      <HomeSection>
        <div className="sectionHeader">
          <div>
            <h2>What kind of my paradise are you looking for?</h2>
            <p>Start exploring youu favorite category</p>
          </div>
        </div>

        <div className="categories">
          <Link to="/search?q=beach">Beach</Link>
          <Link to="/search?q=city">City</Link>
          <Link to="/search?q=cabin">Cabins</Link>
          <Link to="/search?q=luxury">Luxury</Link>
        </div>
      </HomeSection>

      <HomeSection>
        <div className="sectionHeader">
          <div>
            <h2>Top rated venues</h2>
            <p>Popular stays loved by guests.</p>
          </div>

          <Link to="/venues">View all venues</Link>
        </div>

        <Carousel>
          {topRated.map((venue) => (
            <Card key={venue.id}>
              <img
                src={venue.media?.[0]?.url || "/images/placeholder.jpeg"}
                alt={venue.media?.[0]?.alt || "Venue image"}
              />

              <Link to={`/venue/${venue.id}`}>
                <h2>{venue.name}</h2>
              </Link>

              <p className="location">
                {venue.location?.city}, {venue.location?.country}
              </p>

              <p className="rating">
                <Stars rating={venue.rating} />
              </p>

              <div className="priceRow">
                <div className="price">
                  <strong>{venue.price},-</strong>
                  <span>per night</span>
                </div>

                <Link to={`/venue/${venue.id}`}>
                  <button>View</button>
                </Link>
              </div>
            </Card>
          ))}
        </Carousel>
      </HomeSection>
    </div>
  );
}
