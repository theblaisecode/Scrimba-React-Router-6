import { Link } from "react-router-dom";
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
            <Link to="/host" aria-label="Link to Host Page">
              Host
            </Link>
            
            <Link to="/" aria-label="Link to Home Page">
              Home
            </Link>
            
            <Link to="/about" aria-label="Link to About Page">
              About
            </Link>

            <Link to="/vans" aria-label="Link to Vans Page">
              Vans
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
