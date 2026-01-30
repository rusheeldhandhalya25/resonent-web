import React from "react";
import Homesecond from "../assets/images/homesecond.png";
import ExpertiseCard from "../components/ExpertiseCard.jsx";
import Aboutus from "../components/AboutUs.jsx";
import { ABC } from "./Home";
import HardwareDesign from "../assets/icons/hardware_design_icon.svg";
import FirmwareDevelopment from "../assets/icons/firmware_development_icon.svg";
import CloudWeb from "../assets/icons/cloud_web_icon.svg";
import MobileApp from "../assets/icons/mobile_app_icon.svg";
import TimelineItem from "../components/TimelineItem.jsx";
import AboutProductCard from "../components/cards/AboutProductCard.jsx";
import PeopleTech from "../assets/images/peopletech_ecosystem.png"
import SmartERP from "../assets/images/smarterp.png"
import WaariWater from "../assets/images/waariwater.png"
import PramitiRecycling from "../assets/images/pramitirecycling.png"
import Nirvah from "../assets/images/nirvah.png";
import CEOImage from "../assets/images/ceoimg.png";
import PatternImage from "../assets/images/pattern.png"
import Skoda from "../assets/svg/partners/skoda.svg";
import Kia from "../assets/svg/partners/kia.svg";
import Swiggy from "../assets/svg/partners/swiggy.svg"
import Nokia from "../assets/svg/partners/nokia.svg";
import Intel from "../assets/svg/partners/intel.svg";
import Mahindra from "../assets/svg/partners/mahindra.svg";
import Oppo from "../assets/svg/partners/oppo.svg";
import Fila from "../assets/svg/partners/fila.svg";




const First = () => {
  return (
    <div className="bg-backgroundClr flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="text-3xl sm:text-4xl lg:text-60 font-heading font-6 text-center text-textDefaultClr mt-[8rem] lg:mt-[13rem] max-w-[900px] leading-tight">
        Engineering the
        <br />
        Connected Future
      </div>

      <p className="font-body text-sm sm:text-[14px] text-center text-textDisableClr max-w-[750px] font-5 mt-4">
        From circuit to cloud, Resonent Technolabs delivers complete IoT product design Hardware, Firmware, Cloud & Mobile Apps all engineered for performance, scalability, and compliance.
      </p>
    </div>
  );
};

// pills in about page

const Pills = ({ title, descriptions }) => {
  const style = {
    backgroundColor: "#002556",
    backgroundImage: `linear-gradient(
      240.05deg,
      rgba(4,47,105,0.35) 0.05%,
      rgba(53,144,242,0.35) 21.74%,
      rgba(53,144,242,0.35) 73.07%,
      rgba(4,47,105,0.35) 101.64%
    )`,
  };

  return (
    <div
      style={style} className="w-full max-w-full sm:max-w-[520px] lg:max-w-[700px] rounded-3xl md:rounded-full px-4 sm:px-6 lg:px-10 py-6 sm:py-8 flex flex-col items-center justify-center gap-4">
      {/* TITLE PILL */}
      <div className="text-xs sm:text-smlg:text-base font-body font-6 text-textDefaultClr bg-tagClr rounded-full px-5 py-2 border border-textDefaultClr/20">
        {title}
      </div>

      {/* DESCRIPTION */}
      <div
        className="
          font-heading
          font-6
          text-center
          text-textDisableClr
          text-base
          sm:text-xl
          lg:text-2xl
          leading-snug
        "
      >
        {descriptions}
      </div>


    </div>
  );
};


const OurStory = () => {
  return (
    <section
      className="relative mx-20 mt-9 rounded-3xl overflow-hidden"
      style={{
        backgroundColor: "#002556",
        backgroundImage: `
          linear-gradient(
            240.05deg,
            rgba(4,47,105,0.35) 0%,
            rgba(53,144,242,0.35) 50%,
            rgba(4,47,105,0.35) 100%
          )
        `,
      }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div className="flex flex-col gap-10">
          <h2 className="font-heading text-40 font-6 text-textDefaultClr">
            Our Story
          </h2>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-12">
          <TimelineItem
            year="2018"
            title="Founded"
            description="Company started with a vision to simplify IoT innovation."
          />
          <TimelineItem
            year="2020"
            title="Expansion"
            description="Expanded into embedded systems and cloud platforms."
          />
          <TimelineItem
            year="2022"
            title="Global Reach"
            description="Delivered solutions across multiple industries worldwide."
          />
          <TimelineItem
            year="2024"
            title="Innovation"
            description="Leading intelligent and sustainable IoT solutions."
          />
        </div>
      </div>

      {/* SVG */}
      <svg
        className="absolute bottom-0 left-0 w-[600px] opacity-70 pointer-events-none"
        viewBox="0 0 772 505"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M..." fill="#9AADC4" />
      </svg>
    </section>
  );
};


// ------ecosystem --------

const Ecosystem = () => {
  return (
    <section className="mt-12">
      <h2 className="text-32 sm:text-36 lg:text-40 text-textDefaultClr font-heading font-6 text-center mb-8">
        Ecosystem
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          px-4
          sm:px-6
          lg:px-20
        "
      >
        <AboutProductCard
          logo={PeopleTech}
          title="PeopleTech"
          description="PeopleTech is a smart workforce management solution that tracks attendance, improves communication, and boosts productivity. It helps companies manage employees easily with real-time data, secure access, and simple automation tools."
        />

        <AboutProductCard
          logo={SmartERP}
          title="SmartERP"
          description="SmartERP is an intelligent business management system that connects finance, sales, inventory, and operations. It automates tasks, improves decision-making, and gives real-time data for efficient and smooth business growth."
        />

        <AboutProductCard
          logo={WaariWater}
          title="Waari Water"
          description="Waari Water is a smart water management system that monitors usage, detects leaks, and ensures clean supply. It helps save water, reduce costs, and protect resources using real-time data everywhere."
        />

        {/* LAST ROW (2 cards centered automatically) */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AboutProductCard
            logo={PramitiRecycling}
            title="Pramiti Recycling"
            description="Pramiti Recycling is a smart waste management solution that tracks materials, increases recycling efficiency, and reduces environmental impact. It supports safe disposal and promotes sustainability through real-time monitoring and automated processes."
          />

          <AboutProductCard
            logo={Nirvah}
            title="Nirvah"
            description="Nirvaah is a smart logistics and delivery management solution that tracks shipments in real time, reduces delays, automates workflows, and improves supply chain efficiency for faster, reliable business operations."
          />
        </div>
      </div>
    </section>
  );
};


// -------- about CEO card --------

const FounderCard = () => {
  const style = {
    backgroundColor: "#002556",
    backgroundImage: `
      linear-gradient(
        240.05deg,
        rgba(4, 47, 105, 0.35) 0.05%,
        rgba(53, 144, 242, 0.35) 100.74%,
        rgba(53, 144, 242, 0.35) 20.07%,
        rgba(4, 47, 105, 0.35) 101.64%
      )
    `,
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-20 mt-12">
      <div
        style={style}
        className="relative w-full max-w-7xl rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 items-start">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={CEOImage}
              alt="Founder"
              className="
                rounded-xl
                w-[180px]
                h-[180px]
                sm:w-[200px]
                sm:h-[200px]
                lg:w-[230px]
                lg:h-[230px]
                object-cover
              "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-textDefaultClr flex flex-col justify-between">
            <p className="
              font-body
              font-4
              text-sm
              sm:text-base
              lg:text-lg
              leading-relaxed
              mb-6
              text-justify
            ">
              Rushabh Shah guides Resonent with deep technical insight, ensuring innovation, reliability, and smooth execution across every IoT project while supporting clients worldwide with complete product design, engineering excellence, and long-term technology vision.
            </p>

            <div>
              <h4 className="font-heading text-lg sm:text-xl font-6">
                – Rushabh Shah
              </h4>
              <p className="text-sm sm:text-base text-textDisableClr mt-1">
                Founder & Managing Director
              </p>
            </div>
          </div>
        </div>

        {/* BACKGROUND PATTERN */}
        <img
          src={PatternImage}
          alt=""
          className="
            absolute
            bottom-0
            right-0
            w-[160px]
            h-[160px]
            sm:w-[200px]
            sm:h-[200px]
            lg:w-[250px]
            lg:h-[250px]
            opacity-30
            sm:opacity-50
            lg:opacity-100
            pointer-events-none
          "
        />
      </div>
    </div>
  );
};





// -------------our Partner --------------------------

const logos = [Skoda, Swiggy, Kia, Nokia, Intel, Mahindra, Oppo, Fila];

const OurPartner = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-20">
      
      {/* Heading */}
      <h2 className="text-28 sm:text-32 lg:text-40 font-heading font-6 text-textDefaultClr text-center mb-10">
        Our Partners
      </h2>

      {/* Logos Grid */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-8
          gap-y-10
          gap-x-6
          items-center
          justify-items-center
        "
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="group flex items-center justify-center"
          >
            <img
              src={logo}
              alt="partner logo"
              className="
                h-10
                sm:h-12
                md:h-14
                lg:h-16
                opacity-60
                transition
                duration-300
                ease-in-out
                group-hover:opacity-100
                group-hover:brightness-0
                group-hover:invert
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};






// ---------------------------------------------------------------------?
const About = () => {
  return (
    <div className="bg-backgroundClr flex flex-col gap-10">
      <First />
      <ABC />
      <Aboutus image={Homesecond}
              title="Who we are"
              descriptions={[
                "Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment.",
                "Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment."
              ]}
              showButton={false}/>
                  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-20 max-w-[1200px] mx-auto ">
              <Pills
                title="Mission"
                descriptions="Simplify IoT product development and make innovation scalable."
              />

              <Pills
                title="Vision"
                descriptions="Leading global partner for intelligent and sustainable IoT."
              />
            </div>

            <div>
              <h3 className="font-heading text-textDefaultClr font-6 text-3xl md:text-4xl flex items-center justify-center mb-10 mt-5 text-center">
                Values
              </h3>
              <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-20 ">

                <ExpertiseCard icon={HardwareDesign}
                                title="Integrity"
                                description="We create fresh ideas that turn technology challenges into solutions"/>
                
                <ExpertiseCard icon={FirmwareDevelopment}
                                title="Innovation"
                                description="We create fresh ideas that turn technology challenges into solutions"/>
                
                <ExpertiseCard icon={CloudWeb}
                                title="Collaboration"
                                description="Working together to achieve smarter solutions and shared success always"/>
                
                <ExpertiseCard icon={MobileApp}
                                title="Sustainability"
                                description="Smart engineering for a cleaner planet with lasting positive impact"/>

              </div>
            </div>

            <OurStory />

            <Ecosystem />
            <FounderCard />
            <OurPartner />
    </div>
  );
};

export default About;
