import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import VanInfo from "./pages/VanInfo/VanInfo";
import "./server";
import Dashboard from "./pages/Host/Dashboard";
import HostLayout from "./Layout/HostLayout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanInfo />} />

          <Route path="host" element={<HostLayout />}>
            <Route index={true} element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
