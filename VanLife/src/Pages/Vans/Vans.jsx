import { useEffect, useState } from "react";
import VansWrapper from "./VansWrapper";

function Vans() {
  const [vans, setVans] = useState([]);

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
                const { id, imageUrl, name, price, type, description } = item;
                return (
                  <div key={id} className="vanCard">
                    <div className="cardTop">
                      <img src={imageUrl} alt={name} />
                    </div>

                    <div className="cardBottom">
                      <div className="head">
                        <h4
                          className="title"
                          style={{ display: "inline-block" }}>
                          {name}
                        </h4>

                        <span className="price">
                          ${price}<br/><span className="highlight">/day</span>
                        </span>
                      </div>

                      <div className="btn tag">{type}</div>
                    </div>
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
