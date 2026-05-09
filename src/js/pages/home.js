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
    <span className="stars" aria-label={`${filled} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <StarSVG key={i} fillPercent={i < filled ? 100 : 0} size={18} />
      ))}
    </span>
  );
}

const categories = [
  {
    title: "Beach escapes",
    query: "beach",
    image: "/images/beach.jpg",
  },
  {
    title: "City breaks",
    query: "city",
    image: "/images/city.jpg",
  },
  {
    title: "Cabin stays",
    query: "cabin",
    image: "/images/cabin.jpg",
  },
  {
    title: "Luxury venues",
    query: "luxury",
    image: "/images/luxury.jpg",
  },
];

function VenueCard({ venue }) {
  return (
    <Card>
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
  );
}

export function Home() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useApi(api);
  const venues = useMemo(() => data?.data ?? [], [data]);
  const [search, setSearch] = useState("");

  const topRated = useMemo(() => {
    return [...venues]
      .sort((a, b) => Number(b.rating ?? 0) - Number(a.rating ?? 0))
      .slice(0, 10);
  }, [venues]);

  const recentlyAdded = useMemo(() => {
    return [...venues]
      .sort((a, b) => new Date(b.created) - new Date(a.created))
      .slice(0, 6);
  }, [venues]);

  function handleSearch(event) {
    event.preventDefault();

    const query = search.trim();

    if (!query) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
  }

  if (isLoading) {
    return (
      <HomeSection className="statusMessage">Loading venues...</HomeSection>
    );
  }

  if (isError) {
    return (
      <HomeSection className="statusMessage">
        Something went wrong while loading venues.
      </HomeSection>
    );
  }

  return (
    <>
      <Hero>
        <div className="text-container">
          <h1>Find your hidden paradise</h1>
          <p>Discover unique stays, cozy cabins and unforgettable escapes.</p>

          <form onSubmit={handleSearch} className="heroSearch">
            <label htmlFor="hero-search" className="srOnly">
              Search destinations or venues
            </label>

            <input
              id="hero-search"
              type="search"
              placeholder="Search destinations or venues"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <button type="submit" className="searchButton">
              <img src="/svg/search.svg" alt="Search" />
            </button>
          </form>
        </div>
      </Hero>

      <HomeSection>
        <div className="benefits">
          <div>
            <h3>Unique stays</h3>
            <p>Discover cabins, beach houses, city apartments and more.</p>
          </div>

          <div>
            <h3>Easy booking</h3>
            <p>Compare venues and book your next stay in just a few steps.</p>
          </div>

          <div>
            <h3>Guest-rated</h3>
            <p>Find venues with ratings from real guests.</p>
          </div>
        </div>
      </HomeSection>

      <HomeSection>
        <div className="sectionHeader">
          <div>
            <h2>What kind of stay are you looking for?</h2>
            <p>Explore popular categories and find your next escape.</p>
          </div>
        </div>

        <div className="categoryGrid">
          {categories.map((category) => (
            <Link
              key={category.query}
              to={`/search?q=${category.query}`}
              className="categoryCard"
            >
              <img src={category.image} alt="" />
              <span>{category.title}</span>
            </Link>
          ))}
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

        {topRated.length > 0 ? (
          <Carousel>
            {topRated.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </Carousel>
        ) : (
          <div className="emptyState">No venues available yet.</div>
        )}
      </HomeSection>

      <HomeSection>
        <div className="hostCta">
          <div>
            <h2>Have a place to share?</h2>
            <p>
              List your venue and reach travelers looking for memorable stays.
            </p>
          </div>

          <Link className="buttonLink" to="/registermanager">
            Become a host
          </Link>
        </div>
      </HomeSection>

      <HomeSection>
        <div className="sectionHeader">
          <div>
            <h2>Recently added</h2>
            <p>Fresh stays added by hosts.</p>
          </div>

          <Link to="/venues">Explore more</Link>
        </div>

        {recentlyAdded.length > 0 ? (
          <Carousel>
            {recentlyAdded.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </Carousel>
        ) : (
          <div className="emptyState">No recent venues available yet.</div>
        )}
      </HomeSection>
    </>
  );
}
