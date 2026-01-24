import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header.jsx";
import {
  Home,
  About,
  Services,
  OurProduct,
  Career,
  ClientProject,
  Blogs,
} from "./pages/index.js";

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
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
