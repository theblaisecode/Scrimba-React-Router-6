import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import VansWrapper from "./VansWrapper";

function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  async function getVans() {
    try {
      const res = await fetch("/api/vans");
      const data = await res.json();
      setVans(data.vans);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVans();
  }, []);

  console.log(vans);

  return (
    <VansWrapper>
      <div className="allVans">
        <div className="container">
          <div className="vansContent">
            <div className="contentTop">
              <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>

              <div className="vanFilter">
                {vans.map((vanType) => {
                  const { id, type } = vanType;
                  return (
                    <div key={id} className="btn vanTypes">
                      {type}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="contentBottom">
              {vans.map((item) => {
                const { id, imageUrl, name, price, type } = item;
                return (
                  <div key={id} className="vanCard">
                    <Link
                      to={`/vans/${id}`}
                      aria-label={`View details for ${name},  priced at ${price} per day`}>
                      <div className="cardTop">
                        <img src={imageUrl} alt={name} />
                      </div>

                      <div className="cardBottom">
                        <div className="head">
                          <p
                            className="title"
                            style={{ display: "inline-block" }}>
                            {name}
                          </p>

                          <p className="price">
                            ${price}
                            <br />
                            <span className="highlight">/day</span>
                          </p>
                        </div>

                        <div className={`btn ${type} selected`}>{type}</div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </VansWrapper>
  );
}

export default Vans;
