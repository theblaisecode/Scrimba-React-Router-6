import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import VanInfo from "./pages/VanInfo/VanInfo";
import logo from "./img/logo.png";
import "./server";

function App() {
  const thisYear = new Date().getFullYear();

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
              <Link to="/about" aria-label="Link to About Page">
                About
              </Link>

              <Link to="/vans" aria-label="Link to Vans Page">
                Vans
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanInfo />} />
      </Routes>

      <footer>
        <div className="container">
          <div className="footerContent">
            <span>
              #VANLIFE &copy; {thisYear} |{" "}
              <a href="https://twitter.com/theblaisecode/" target="_blank">
                TheBlaiseCode
              </a>
            </span>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
