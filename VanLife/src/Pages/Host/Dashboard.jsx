import { Outlet } from "react-router";

function Dashboard() {
  return (
    <>
      <Outlet />
      <h1>This is the Dashboard Page</h1>
    </>
  );
}

export default Dashboard;
