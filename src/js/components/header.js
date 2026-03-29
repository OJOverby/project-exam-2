import { Link } from "react-router-dom";
import { Navigation } from "./styled/navigation.js";
import { PalmSVG } from "./svg/palm.js";


export function Header() {
 

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
            <Link to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to="/venues">
              Venues
            </Link>
          </li>
          <li>
            <Link to="/registeruser">
              Register
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </Navigation>
  );
}
