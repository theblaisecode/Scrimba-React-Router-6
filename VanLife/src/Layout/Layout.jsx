import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
