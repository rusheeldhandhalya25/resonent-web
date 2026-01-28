import React from "react";
import AppButton from "../components/buttons/AppButtons";
import Homefirst from "../assets/images/homefirst.png";
import Homesecond from "../assets/images/homesecond.png";
import HardwareDesign from "../assets/images/icons/hardware_design_icon.Svg";
import FirmwareDevelopment from "../assets/images/icons/firmware_development_icon.svg"
import CloudWeb from "../assets/images/icons/cloud_web_icon.svg";
import MobileApp from "../assets/images/icons/mobile_app_icon.svg";
import ExpertisePillBackground from "../assets/images/expertisepillsbackground.jpg";
import PowerIcon from "../assets/images/icons/power_expertise_pills.svg";
import SafetyIcon from "../assets/images/icons/code_expertise_pills.svg";
import FpgaIcon from "../assets/images/icons/graph_expertise_pills.svg";
import { useState , useEffect  } from "react";
import ProfileCard from "../components/card/ProfileCard"
import OurProcess from "../components/ourprocess/OurProcess";
import ProjectCard from "../components/card/ProjectCard";
import factoryImg from "../assets/images/project_img_1.png"
import compImg from "../assets/images/project_img_2.png"
import graphImg from "../assets/images/project_img_4.png"
import labImg from "../assets/images/project_img_3.png"
import Mediverse from "../assets/images/mediverse_1.png";
import Syncworks from "../assets/images/syncworks_1.png";
import Storeedge from "../assets/images/storeedge_1.png";

/* ---------------- HERO SECTION ---------------- */

const Herosection = () => {
  return (
    <section className="bg-backgroundClr text-textDefaultClr">
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-4
          py-14
          lg:py-20
          grid
          grid-cols-1
          lg:grid-cols-[60%_40%]
          gap-10
          items-center
          text-center
          lg:text-left
        "
      >
        {/* TEXT */}
        <div>
          <h1 className="font-heading font-5 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            We build the future of
            <br />
            connected products
          </h1>

          <p className="mt-4 font-body text-14 sm:text-16 text-textDisableClr max-w-xl mx-auto lg:mx-0">
            We design smart hardware, software, and cloud systems that help
            companies build reliable connected products and bring their
            technology ideas to life easily.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <AppButton variant="primary" size="sm" rounded="full">
              Start your project
            </AppButton>

            <AppButton variant="secondary" size="sm" rounded="full" className="px-8">
              See our work
            </AppButton>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-[240px] sm:w-[300px] lg:w-[400px] p-3 bg-cardClr border border-lightOutlineClr rounded-[32px]">
            <img
              src={Homefirst}
              alt="Connected Product"
              className="w-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
};




/* ---------------- STATS BAR (ABC) ---------------- */




const Stat = ({ title, desc }) => (
  <div className="flex flex-col leading-tight">
    <h4 className="font-6 text-[12px] sm:text-[16px] lg:text-[20px]">
      {title}
    </h4>
    <p className="text-textDisableClr text-[9px] sm:text-[12px] lg:text-[16px]">
      {desc}
    </p>
  </div>
);

const ABC = () => {
  return (
    <div
      className="
        max-w-[1200px]
        mx-2
        sm:mx-4
        md:mx-6
        lg:mx-auto
        mt-12
        mb-8
        bg-cardClr
        rounded-full
        grid
        grid-cols-4
        items-center
        text-center
        px-3
        sm:px-5
        lg:px-10
        py-2
        sm:py-3
        lg:py-5
        gap-1.5
        sm:gap-3
        lg:gap-6
        font-body
      "
    >
      <Stat title="15+" desc="Years of Experience" />
      <Stat title="25+" desc="IoT Projects Executed" />
      <Stat title="19,500+" desc="Devices Delivered" />
      <Stat title="10+" desc="Industries Serving" />
    </div>
  );
};

/* ---------------- ABOUT US ---------------- */

const Aboutus = () => {
  return (
    <section className="bg-backgroundClr py-14 lg:py-20">
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-4
          grid
          grid-cols-1
          lg:grid-cols-[40%_60%]
          gap-10
          items-center
        "
      >
        {/* IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={Homesecond}
            alt="group"
            className="w-[700px] h-[450px] rounded-2xl"
          />
        </div>

        {/* TEXT */}
        <div className="text-center lg:text-left">
          <h3 className="font-heading text-32 sm:text-36 lg:text-40 font-6">
            Who we are
          </h3>

          <p className="mt-4 text-14 sm:text-16 font-body text-textDisableClr leading-relaxed">
            Resonent Technolabs is a complete IoT innovation partner, seamlessly
            integrating electronic design, embedded firmware development, and
            cloud engineering within a single ecosystem. We specialize in
            turning conceptual ideas into robust, production-ready IoT solutions
            that meet industry standards and compliance requirements. From
            prototype to mass manufacturing, our multidisciplinary team ensures
            every product is intelligent, scalable, and reliable for real-world
            deployment.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <AppButton variant="primary" size="sm" rounded="full">
              About us
            </AppButton>
          </div>
        </div>
      </div>
    </section>
  );
};


/* Our expertise */

const ExpertiseCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundImage: isHovered
      ? "none"
      : "linear-gradient(0deg, #002556, #002556), linear-gradient(240.05deg, rgba(4, 47, 105, 0.3) 0.05%, rgba(53, 144, 242, 0.3) 21.74%, rgba(53, 144, 242, 0.3) 73.07%, rgba(4, 47, 105, 0.3) 101.64%)",
    backgroundColor: isHovered ? "#1B86F8" : "transparent",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <div
      className="rounded-2xl p-6 flex flex-col items-center text-center group"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={icon} alt={`${title} logo`} className="w-8 h-8 mb-4" />
      <p className="font-body font-6 text-lg text-textDefaultClr group-hover:text-white">
        {title}
      </p>
      <p className="font-body font-2 text-sm text-textDisableClr mt-2 group-hover:text-white">
        {description}
      </p>
    </div>
  );
};

const Ourexpertise = () => {
  const expertiseData = [
    {
      icon: HardwareDesign,
      title: "Hardware Design",
      description: "PCB, schematic, MCU/SoC/FPGA, ATEX-safe circuits",
    },
    {
      icon: FirmwareDevelopment,
      title: "Firmware Development",
      description: "RTOS, OTA, low-power, communication stacks",
    },
    {
      icon: CloudWeb,
      title: "Cloud & Web",
      description: "MQTT, REST APIs, multi-tenant dashboards, analytics",
    },
    {
      icon: MobileApp,
      title: "Mobile Apps",
      description: "Flutter & native apps with BLE/NFC integrations",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-16 mb-8">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="font-heading font-6 text-textDefaultClr text-3xl sm:text-4xl lg:text-[45px]">
          Our Expertise
        </h1>
        <p className="font-body font-1 text-textDisableClr text-sm sm:text-base leading-relaxed">
          Building powerful embedded solutions with smart hardware, intelligent
          software, and cloud integration.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {expertiseData.map((expertise) => (
          <ExpertiseCard
            key={expertise.title}
            icon={expertise.icon}
            title={expertise.title}
            description={expertise.description}
          />
        ))}
      </div>
    </section>
  );
};




/* expertise pills */
const ExpertisePills = () => {
  const expertiseData = [
    {
      title: "Hardware Design",
      subtitle: "We build smart and reliable hardware for real-world use.",
      pills: [
        { icon: PowerIcon, text: "Power Electronics & Control Systems" },
        { icon: SafetyIcon, text: "Intrinsic Safety (ATEX, IEC 60079)" },
        { icon: FpgaIcon, text: "FPGA & AI Edge Devices" },
      ],
    },
    {
      title: "Firmware Development",
      subtitle: "Building reliable firmware for smarter connected devices.",
      pills: [
        { icon: FirmwareDevelopment, text: "RTOS & embedded OS" },
        { icon: SafetyIcon, text: "OTA updates & device lifecycle management" },
        { icon: FpgaIcon, text: "Edge AI and sensor integration" },
      ],
    },
    {
      title: "Cloud & Web",
      subtitle: "Delivering fast, secure, and reliable web experiences.",
      pills: [
        { icon: CloudWeb, text: "MQTT and REST APIs" },
        { icon: SafetyIcon, text: "Multi-tenant dashboards" },
        { icon: FpgaIcon, text: "Predictive analytics & data visualization" },
      ],
    },
    {
      title: "Mobile Apps",
      subtitle: "Crafting intutive mobile experience for everyday users.",
      pills: [
        { icon: MobileApp, text: "Flutter,Android & iOS apps" },
        { icon: SafetyIcon, text: "BLE/NFC based device pairing" },
        { icon: FpgaIcon, text: "Real-time control and data insights" },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % expertiseData.length);
    }, 2000); // Rotate every 3 seconds

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const backgroundStyle = {
    backgroundImage: `
      linear-gradient(
        250.91deg,
        #002556ED -7.76%,
        #1B86F8ED 16.68%,
        #1B86F8ED 74.53%,
        #002556ED 106.73%
      ),
      linear-gradient(0deg, #00000033, #00000033),
      url(${ExpertisePillBackground})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="my-2">
      <div className="relative w-full max-w-[1200px] mx-auto h-[350px] sm:h-[300px]">
        {expertiseData.map((expertise, index) => (
          <div
            key={index}
            style={{
              ...backgroundStyle,
              opacity: currentIndex === index ? 1 : 0,
              transition: "opacity 1000ms ease-in-out",
            }}
                          className="
                          absolute inset-0
                          shadow-expertisePill
                          rounded-3xl sm:rounded-full
                          px-4 sm:px-8 md:px-16 lg:px-20
                          py-8 sm:py-12
                          flex
                          flex-col
                          items-center
                          justify-center
                          text-textDefaultClr
                        "          >
            {/* Title */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-5 text-center mb-1.5">
              {expertise.title}
            </div>

            {/* Subtitle */}
            <div className="text-xs sm:text-sm lg:text-base font-body font-1 text-center text-textDisableClr mb-4 sm:mb-8">
              {expertise.subtitle}
            </div>

            {/* Bottom Pills */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              {expertise.pills.map((pill, pillIndex) => (
                <div
                  key={pillIndex}
                  className="flex items-center gap-2 px-3 sm:px-5 py-2 rounded-full bg-[#EDF6FF33]"
                >
                  <img src={pill.icon} alt="icon" className="w-4 h-4" />
                  <span className="text-[8px] sm:text-[13px] font-body">
                    {pill.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        {expertiseData.map((_, idx) => (
          <div
            key={idx}
            className={`inline-block h-2 w-2 rounded-md cursor-pointer mx-1 ${
              currentIndex === idx ? "bg-primaryDefaultClr" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};



{/* feature project */}

const FeatureProject = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-12">
      <div className="font-heading font-6 text-40 flex items-center justify-center mb-20">
        featured products
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
       <div className="flex flex-col gap-5">
         <ProjectCard
          tag="Product Design"
          year="2021"
          title="Smart Factory Gateway"
          description="A smart device that connects factory machines to the internet and software systems. It collects machine data in real time, sends alerts, and helps improve productivity."
          image={factoryImg}
        />


         <ProjectCard
          tag="Product Design"
          year="2021"
          title="ATEX Gas Sensor Node"
          description="A safe and certified device that detects dangerous gases in industrial areas. It is designed for hazardous zones and sends real-time alerts to protect workers and equipment. It helps prevent accidents and keeps the environment safe."
          image={compImg}
        />

       </div>
      <div className="flex flex-col mt-1 md:mt-20 gap-5">
          <ProjectCard
          tag="Product Design"
          year="2021"
          title="AI-Edge Vending Controller"
          description="A smart controller that uses AI to run vending machines smoothly. It works on the edge, so it makes decisions quickly without depending on the internet. It helps manage stock, payments, and machine health in real time for better customer service and lower maintenance costs."
          image={labImg}
        />

        <ProjectCard
          tag="Product Design"
          year="2021"
          title="Smart Energy Meter"
          description="A device that measures electricity use in real time. It helps track power consumption, reduce waste, and save money. It can send data automatically for billing and monitoring, making energy management easier and smarter."
          image={graphImg}
        />
      </div>

      </div>
    </section>
  );
};


{/* Our Products */}

const OurProduct = () => {
  return(
    <div>
      <div className="font-heading font-6 text-40 flex items-center justify-center mb-10 my-7 ">
            Our Products
      </div>

      <div className="flex flex-row gap-5 items-center justify-center  ">
        <ProfileCard logo={Mediverse} 
                     title="Mediverse"
                     description="MediVerse is a digital product that connects healthcare devices, doctors, and patients in one smart platform. It helps track health data, supports faster decisions, improves remote monitoring, and keeps information secure for better, reliable, and overall smarter medical care every day."
                     buttonText="view product"/>

        <ProfileCard logo={Syncworks} 
                     title="SyncWorks"
                     description="Syncworks is a smart platform that connects machines, sensors, and software to improve industrial operations. It collects real-time data, reduces downtime, and increases productivity. With secure cloud integration and easy control, businesses can manage equipment smarter and make faster decisions anywhere, anytime."
                     buttonText="view product"/>

        <ProfileCard logo={Storeedge} 
                     title="Storeedge"
                     description="StoreEdge is a smart warehouse management solution that tracks inventory in real time, reduces human errors, and speeds up operations. It supports seamless order processing, quick product locating, and secure data handling to help businesses improve efficiency, save time, and grow smoothly."
                     buttonText="view product"/>

        

      </div>
    </div>
  )
}

/* ---------------- HOME ---------------- */

const Home = () => {
  return (
    <div className="bg-backgroundClr text-textDefaultClr min-h-full">
      <Herosection />
      <ABC />
      <Aboutus />
      <Ourexpertise />
      <ExpertisePills />

      <OurProcess />
      <FeatureProject />
      <OurProduct />
    </div>
  );
};

export default Home;
