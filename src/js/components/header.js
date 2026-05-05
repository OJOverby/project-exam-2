import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation } from "./styled/navigation.js";
import { PalmSVG } from "./svg/palm.js";
import { useAuthStore } from "../store/authStore.js";

export function Header() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const isVenueManager = user?.venueManager === true;

  function handleSearch(event) {
    event.preventDefault();

    const query = search.trim();
    if (!query) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
    setSearch("");
    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <Navigation>
      <div className="navContainer">
        <div className="titleContainer">
          <Link to="/" onClick={closeMenu}>
            <PalmSVG />
            <h1>Holidaze</h1>
          </Link>
        </div>
        <form onSubmit={handleSearch} className="searchForm">
          <input
            type="search"
            placeholder="Search venues"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <button
          className="menuButton"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <nav className={menuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/venues" onClick={closeMenu}>
                Venues
              </Link>
            </li>

            {user ? (
              <>
                {isVenueManager && (
                  <li>
                    <Link to="/newvenue" onClick={closeMenu}>
                      New Venue
                    </Link>
                  </li>
                )}

                <li>
                  <Link
                    to={isVenueManager ? "/managerprofile" : "/profile"}
                    onClick={closeMenu}
                  >
                    {isVenueManager ? "Manager Profile" : "Profile"}
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" onClick={closeMenu}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </Navigation>
  );
}
