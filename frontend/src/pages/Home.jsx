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
import ProductCard from "../components/card/ProfileCard";
import OurProcess from "../components/ourprocess/OurProcess";

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
            className="w-full max-w-[420px] rounded-2xl"
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

const Ourexpertise = () => {
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
        {/* Card 1 */}
        <div className="bg-cardClr rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-primaryDefaultClr group">
          <img
            src={HardwareDesign}
            alt="Hardware design logo"
            className="w-8 h-8 mb-4"
          />
          <p className="font-body font-6 text-lg text-textDefaultClr group-hover:text-white">
            Hardware Design
          </p>
          <p className="font-body font-2 text-sm text-textDisableClr mt-2 group-hover:text-white">
            PCB, schematic, MCU/SoC/FPGA, ATEX-safe circuits
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-cardClr rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-primaryDefaultClr group">
          <img
            src={FirmwareDevelopment}
            alt="Firmware development logo"
            className="w-8 h-8 mb-4"
          />
          <p className="font-body font-6 text-lg text-textDefaultClr group-hover:text-white">
            Firmware Development
          </p>
          <p className="font-body font-2 text-sm text-textDisableClr mt-2 group-hover:text-white">
            RTOS, OTA, low-power, communication stacks
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-cardClr rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-primaryDefaultClr group">
          <img
            src={CloudWeb}
            alt="Cloud and web logo"
            className="w-8 h-8 mb-4"
          />
          <p className="font-body font-6 text-lg text-textDefaultClr group-hover:text-white">
            Cloud & Web
          </p>
          <p className="font-body font-2 text-sm text-textDisableClr mt-2 group-hover:text-white">
            MQTT, REST APIs, multi-tenant dashboards, analytics
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-cardClr rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-primaryDefaultClr group">
          <img
            src={MobileApp}
            alt="Mobile app logo"
            className="w-8 h-8 mb-4"
          />
          <p className="font-body font-6 text-lg text-textDefaultClr group-hover:text-white">
            Mobile Apps
          </p>
          <p className="font-body font-2 text-sm text-textDisableClr mt-2 group-hover:text-white">
            Flutter & native apps with BLE/NFC integrations
          </p>
        </div>
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
    <div className="my-20">
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
      <div className="flex flex-row gap-3 items-center justify-center">
        <ProductCard
        logo={Homefirst}
        title="Synworks"
        description="Synworks is a smart platform that connects machines, sensors, and software to improve industrial operations."
      />
      <ProductCard
        logo={Homefirst}
        title="Synworks"
        description="Synworks is a smart platform that connects machines, sensors, and software to improve industrial operations."
      /><ProductCard
        logo={Homefirst}
        title="Synworks"
        description="Synworks is a smart platform that connects machines, sensors, and software to improve industrial operations."
      />
      <ProductCard
        logo={Homefirst}
        title="Synworks"
        description="Synworks is a smart platform that connects machines, sensors, and software to improve industrial operations."
      />

      </div>
    </div>
  );
};

export default Home;
