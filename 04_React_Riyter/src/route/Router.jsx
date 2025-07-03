import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Company from "../pages/Company";
import Gallery from "../pages/Gallery";
import Footer from "../pages/Footer";

export const Router = () => {
  return (
    <div>
        <>
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/company" element={<Company />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/footer" element={<Footer />} />
        </Routes>
        </>
    </div>
  )
}
