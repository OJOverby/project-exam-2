import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "./styled/navigation.js";
import { PalmSVG } from "./svg/palm.js";
import { useAuthStore } from "../store/authStore.js";

export function Header() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const isVenueManager = user?.venueManager === true;
  const profilePath = isVenueManager ? "/managerprofile" : "/profile";

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearch(params.get("q") || "");
  }, [location.search]);

  function handleSearch(event) {
    event.preventDefault();

    const query = search.trim();
    if (!query) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <Navigation>
      <div className="navContainer">
        <Link className="logoLink" to="/" onClick={closeMenu}>
          <PalmSVG />
          <span className="logoText">Holidaze</span>
        </Link>

        <form onSubmit={handleSearch} className="searchForm desktopSearch">
          <label htmlFor="header-search" className="srOnly">
            Search venues
          </label>

          <input
            id="header-search"
            type="search"
            placeholder="Search venues"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button type="submit" className="searchButton">
            <img src="/svg/search.svg" alt="Search" />
          </button>
        </form>

        <button
          className="menuButton"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>

        <nav
          id="main-navigation"
          className={menuOpen ? "open" : ""}
          aria-label="Main navigation"
        >
          <form onSubmit={handleSearch} className="searchForm mobileSearch">
            <label htmlFor="mobile-header-search" className="srOnly">
              Search venues
            </label>

            <input
              id="mobile-header-search"
              type="search"
              placeholder="Search venues"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <button type="submit" className="searchButton">
              <img src="/svg/search.svg" alt="Search" />
            </button>
          </form>

          <ul>
            <li>
              <NavLink to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/venues" onClick={closeMenu}>
                Venues
              </NavLink>
            </li>

            {user ? (
              <>
                {isVenueManager && (
                  <li>
                    <NavLink to="/newvenue" onClick={closeMenu}>
                      New Venue
                    </NavLink>
                  </li>
                )}

                <li>
                  <NavLink
                    className="profileLink"
                    to={profilePath}
                    onClick={closeMenu}
                  >
                    <span
                      className="navAvatar profileAvatar"
                      aria-hidden="true"
                    >
                      {user.avatar?.url ? (
                        <img src={user.avatar.url} alt="" />
                      ) : (
                        user.name?.charAt(0).toUpperCase()
                      )}
                    </span>

                    <span className="profileText">Profile</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login" onClick={closeMenu}>
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </Navigation>
  );
}
