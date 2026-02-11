import OurProcess from "../components/our-process/OurProcess";
import HeroSection from "./home/HeroSection.jsx";
import StatusBar from "../components/common/StatusBar.jsx";
import HomeAboutUs from "./home/HomeAboutUs.jsx";
import OurExpertise from "./home/OurExpertise.jsx";
import FeatureProject from "./home/FeatureProject.jsx";
import IndustryWeServe from "./home/IndustryWeServe.jsx";
import OurProduct from "./home/OurProduct.jsx";
import Testimonials from "./home/Testimonials.jsx";
import BlogSection from "./home/Blogs.jsx";
import ContactUs from "./home/ContactUs.jsx";

/* ---------------- HOME ---------------- */

const Home = () => {
  return (
    <div className="bg-backgroundClr text-textDefaultClr min-h-full flex flex-col">
      <HeroSection />
      <StatusBar />
      <HomeAboutUs />
      <OurExpertise />
      <OurProcess />
      <IndustryWeServe />
      <FeatureProject />
      <OurProduct />
      <Testimonials />
      <BlogSection />
      <ContactUs />
    </div>
  );
};

export default Home;
