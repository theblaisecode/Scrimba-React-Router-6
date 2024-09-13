import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

function HostLayout() {
  return (
    <div className="container">
      <nav className="innerNav">
        <NavLink
          to="/host"
          aria-label="Link to Host Page"
          className={({ isActive }) => (isActive ? "activeStyle" : null)}>
          Dashboard
        </NavLink>

        <NavLink
          to="/host/income"
          aria-label="Link to Home Page"
          className={({ isActive }) => (isActive ? "activeStyle" : null)}>
          Income
        </NavLink>

        <NavLink
          to="/host/reviews"
          aria-label="Link to About Page"
          className={({ isActive }) => (isActive ? "activeStyle" : null)}>
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default HostLayout;
