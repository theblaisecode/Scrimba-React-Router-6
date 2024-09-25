import { useOutletContext } from "react-router";

function HostVanPhotosPage() {
  const { currentVan } = useOutletContext();

  return (
    <>
      <img src={currentVan.imageUrl} alt="" className="host-van-detail-image" />
    </>
  );
}

export default HostVanPhotosPage;
