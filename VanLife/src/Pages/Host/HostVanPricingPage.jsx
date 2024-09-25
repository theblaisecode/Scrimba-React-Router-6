import { useOutletContext } from "react-router";

function HostVanPricingPage() {
  const { currentVan } = useOutletContext();

  return (
    <>
      <h3 className="host-van-price">
        ${currentVan.price} <span>/day</span>
      </h3>
    </>
  );
}

export default HostVanPricingPage;
