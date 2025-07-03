import { Routes, Route } from "react-router-dom";
import Home    from "../pages/Home";
import About   from "../pages/About";
import Company from "../pages/Company";
import Gallery from "../pages/Gallery";
import Footer  from "../pages/Footer";
import Edrt    from "../pages/Edit";    
import Edrt2   from "../pages/Edrt2";

export const Router = () => {
  return (
    <Routes>
      <Route path="/home"    element={<Home />}    />
      <Route path="/about"   element={<About />}   />
      <Route path="/company" element={<Company />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/footer"  element={<Footer />}  />
      <Route path="/edit/:id" element={<Edrt />}    />
      <Route path="/edit2"   element={<Edrt2 />}   />
    </Routes>
  );
};
