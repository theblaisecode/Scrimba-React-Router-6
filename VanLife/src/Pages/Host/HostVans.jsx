import { Outlet } from "react-router";

function HostVans() {
  return (
    <>
      <Outlet />
      <h1>This is the HostVans Page</h1>
    </>
  );
}

export default HostVans;
