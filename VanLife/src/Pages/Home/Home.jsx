import { Link } from "react-router-dom";
import HomeWrapper from "./HomeWrapper";

function Home() {
  return (
    <HomeWrapper>
      <div className="container">
        <div className="heroContent">
          <h1 className="title">
            You got the travel plans, we got the travel vans.
          </h1>

          <p className="description">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>

          <Link to="vans" className="btn" style={{ border: "none" }}>
            Find your van
          </Link>
        </div>
      </div>
    </HomeWrapper>
  );
}

export default Home;
