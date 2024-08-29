import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Vans from "./Pages/Vans/Vans";
import logo from "./img/"

function App() {
  return (
    <>
      <nav>

      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
