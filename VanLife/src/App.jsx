import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import VanInfo from "./pages/VanInfo/VanInfo";
import "./server";
import Dashboard from "./pages/Host/Dashboard";
import HostLayout from "./pages/Host/HostLayout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanInfo />} />
          <Route path="/host" element={<HostLayout />}>
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="/host/:id" element={<DashboardMenu />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
