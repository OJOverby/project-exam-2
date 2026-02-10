import { Link } from "react-router-dom";
import { Navigation } from "./styled/navigation.js";


export function Header() {
 

  return (
<Navigation>
      <Link to="/">
        <h1>Holidaze</h1>
      </Link>
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
        </ul>
      </nav>
    </Navigation>
  );
}
