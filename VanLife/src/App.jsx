import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Vans from "./Pages/Vans/Vans";
import logo from "./img/logo.png";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <div id="logo">
          <Link
            to="/"
            aria-label="Link to Home Page"
            style={{ border: "none" }}>
            <img src={logo} alt="VanLife logo" />
          </Link>
        </div>

        <div className="pageNav">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
