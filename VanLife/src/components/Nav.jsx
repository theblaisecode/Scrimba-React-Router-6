import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";

function Nav() {
  return (
    <header>
      <div className="container">
        <nav>
          <div id="logo">
            <Link
              to="/"
              aria-label="Link to Home Page"
              style={{ border: "none" }}>
              <img src={logo} alt="VanLife logo" />
            </Link>
          </div>

          <div className="pageNav">
            <NavLink
              to="/host"
              aria-label="Link to Host Page"
              className={({ isActive }) => (isActive ? "activeStyle" : null)}>
              Host
            </NavLink>

            <NavLink
              to="/"
              aria-label="Link to Home Page"
              className={({ isActive }) => (isActive ? "activeStyle" : null)}>
              Home
            </NavLink>

            <NavLink
              to="/about"
              aria-label="Link to About Page"
              className={({ isActive }) => (isActive ? "activeStyle" : null)}>
              About
            </NavLink>

            <NavLink
              to="/vans"
              aria-label="Link to Vans Page"
              className={({ isActive }) => (isActive ? "activeStyle" : null)}>
              Vans
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
