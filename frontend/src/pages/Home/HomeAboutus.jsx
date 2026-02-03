import Aboutus from "../../components/common/AboutUs";
import imageAssets from "../../assets";



function HomeAboutus() {
  return (
     <section className="relative overflow-hidden">
      
      <div className="relative z-10">
        {/* Vertical SVG left */}
        <img
          src={imageAssets.Home_About_1}
          alt=""
          className="absolute top-[-20%] left-[15%] h-full object-contain z-0 block"
        />

        {/* Vertical SVG right */}
        <img
          src={imageAssets.Home_About_2}
          alt=""
          className="absolute top-[20%] right-[-10%] h-full object-contain z-0 block"
        />
        <div className=" px-4 py-16  mx-5 md:mx-10 lg:mx-20">
           <Aboutus
          image={imageAssets.Homesecond}
          title="Who we are"
          descriptions={["Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment."]}
          buttonText="About Us"
        />
        </div>
      </div>

    </section>
  )
}

export default HomeAboutus