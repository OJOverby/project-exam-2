import { Link } from "react-router-dom";
import { FooterWrapper } from "./styled/footer.js";

export function Footer() {
  return (
    <FooterWrapper>
      <div className="footerContainer">
        <div className="brand">
          <h2>Holidaze</h2>
          <p>Find your hidden paradise</p>
        </div>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/venues">Venues</Link>
          <Link to="/registeruser">Register</Link>
          <Link to="/registerManager">Become a host</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>

      <div className="bottomBar">
        <p>© {new Date().getFullYear()} Holidaze</p>
      </div>
    </FooterWrapper>
  );
}
