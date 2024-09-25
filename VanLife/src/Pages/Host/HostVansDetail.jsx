import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";

function HostVansDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="innerNav">
          <NavLink
            to="."
            className={({ isActive }) => (isActive ? "activeStyle" : null)}
            end>
            Details
          </NavLink>

          <NavLink
            to="pricing"
            className={({ isActive }) => (isActive ? "activeStyle" : null)}
            end>
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            className={({ isActive }) => (isActive ? "activeStyle" : null)}
            end>
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ currentVan }} />
      </div>
    </>
  );
}

export default HostVansDetail;
