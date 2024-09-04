import { Link, useParams } from "react-router-dom";
import VanInfoWrapper from "./VanInfoWrapper";
import { useEffect, useState } from "react";

function VanInfo() {
  const params = useParams();
  const [vanInfo, setVanInfo] = useState(null);

  async function getVanInfo() {
    try {
      const res = await fetch(`/api/vans/${params.id}`);
      const data = await res.json();
      console.log(data);
      setVanInfo(data.vans);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVanInfo();
  }, [params.id]);

  console.log(vanInfo);
  return (
    <VanInfoWrapper>
      <div className="vanInfo">
        <div className="container">
          <Link to="/vans" className="back">
            Back to all vans
          </Link>
          {vanInfo ? (
            <div className="vanInfoContent">
              <div className="contentTop">
                <img src={vanInfo.imageUrl} alt={`Image of ${vanInfo.name}`} />
              </div>

              <div className="contentBottom">
                <div className={`tag ${vanInfo.type} selected`}>
                  {vanInfo.type}
                </div>

                <h2 className="title" style={{ display: "inline-block" }}>
                  {vanInfo.name}
                </h2>

                <p className="price">
                  ${vanInfo.price}
                  <span className="highlight">/day</span>
                </p>

                <p className="description">{vanInfo.description}</p>

                <button className="btn">Rent this van</button>
              </div>
            </div>
          ) : (
            <div className="vanInfo">
              <div className="loading"></div>
            </div>
          )}
        </div>
      </div>
    </VanInfoWrapper>
  );
}

export default VanInfo;
