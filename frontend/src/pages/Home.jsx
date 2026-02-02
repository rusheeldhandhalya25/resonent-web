import imageAssets from "../assets/index.js";
import OurProcess from "../components/our-process/OurProcess";
import Aboutus from "../components/common/AboutUs.jsx";
import HeroSection from "./Home/HeroSection.jsx";
import StatusBar from "../components/common/StatusBar.jsx";
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
      <Aboutus image={imageAssets.Homesecond}
                title="Who we are"
                descriptions={[
                  "Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment."
                ]}
                buttonText="About us"
                buttonLink="/about"
                showButton={true}/>


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
