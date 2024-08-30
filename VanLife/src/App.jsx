import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import logo from "./img/logo.png";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="container">
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
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
