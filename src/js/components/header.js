import { Link } from "react-router-dom";
import { Navigation } from "./styled/navigation.js";
import { PalmSVG } from "./svg/palm.js";
import { useAuthStore } from "../store/authStore.js";

export function Header() {
  const user = useAuthStore((state) => state.user);
  console.log(user);

  return (
    <Navigation>
      <div className="navContainer">
        <div className="titleContainer">
          <Link to="/">
            <PalmSVG />
            <h1>Holidaze</h1>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/venues">Venues</Link>
            </li>
            {user ? (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/registeruser">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </Navigation>
  );
}