import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function HostLayout() {
  return (
    <div className="container">
      <div className="innerNav">
        <Link to="/host/dashboard" aria-label="Link to Host Page">
          Dashboard
        </Link>

        <Link to="/host/income" aria-label="Link to Home Page">
          Income
        </Link>

        <Link to="/host/reviews" aria-label="Link to About Page">
          Reviews
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default HostLayout;
