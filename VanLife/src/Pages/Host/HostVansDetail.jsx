import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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
      <Link to=".." className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      
      <div>
        <img src={currentVan.imageUrl} width={150} />
        <h2>{currentVan.name}</h2>
        <p>{currentVan.price}</p>
        <p>{currentVan.type}</p>
      </div>
    </>
  );
}

export default HostVansDetail;
