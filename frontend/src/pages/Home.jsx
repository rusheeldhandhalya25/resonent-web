
import OurProcess from "../components/our-process/OurProcess";
import HeroSection from "./Home/HeroSection.jsx";
import StatusBar from "../components/common/StatusBar.jsx";
import HomeAboutus from "./Home/HomeAboutus.jsx";
import OurExpertise from "./Home/OurExpertise.jsx";
import FeatureProject from "./Home/FeatureProject.jsx";
import OurProduct from "./Home/OurProduct.jsx";
import Testimonials from "./Home/Testimonials.jsx";
import BlogSection from "./Home/Blogs.jsx";
import ContactUs from "./Home/ContactUs.jsx";


/* ---------------- HOME ---------------- */

const Home = () => {
  return (
    <div className="bg-backgroundClr text-textDefaultClr min-h-full flex flex-col 
     ">
      
      <HeroSection />
      <StatusBar />
      <HomeAboutus />


      <OurExpertise />
      <OurProcess />
      <FeatureProject />
      <OurProduct />
      <Testimonials />
      <BlogSection />
      <ContactUs />
      
    </div>
  );
};

export default Home;
