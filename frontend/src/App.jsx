import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";
import MediVerse from "./pages/client-project/MediVerse";
import HealthySnackBlog from "./pages/Blogs/HealthySnackBlog";

import {
  Home,
  About,
  Services,
  OurProduct,
  Career,
  ClientProject,
  Blogs,
} from "./pages/navbarIndex.js";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<OurProduct />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<ClientProject />} />
        <Route path="/mediverse" element={<MediVerse />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/healthy-snack" element={<HealthySnackBlog />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
