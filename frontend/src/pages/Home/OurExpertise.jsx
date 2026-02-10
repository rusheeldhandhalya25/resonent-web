import React, { useState } from "react";
import ExpertiseCard from "../../components/ExpertiseCard.jsx";
import imageAssets from "../../assets/index.js";

const OurExpertise = () => {
  const expertiseData = [
    {
      icon: imageAssets.hardwareDesign,
      title: "Hardware Design",
      description: "PCB, schematic, MCU/SoC/FPGA, ATEX-safe circuits",
    },
    {
      icon: imageAssets.firmwareDevelopment,
      title: "Firmware Development",
      description: "RTOS, OTA, low-power, communication stacks",
    },
    {
      icon: imageAssets.cloudWeb,
      title: "Cloud & Web",
      description: "MQTT, REST APIs, multi-tenant dashboards, analytics",
    },
    {
      icon: imageAssets.mobileApp,
      title: "Mobile Apps",
      description: "Flutter & native apps with BLE/NFC integrations",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className=" relative w-full px-4 sm:px-6 lg:px-20  pb-6 overflow-hidden">
      <div className="relative z-10">
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
          {expertiseData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.title}
                onMouseEnter={() => setActiveIndex(index)}
                className={`
                cursor-pointer transition-all duration-300
                ${isActive ? "bg-primaryDefaultClr" : "bg-cardGradient"}
                rounded-2xl
              `}
              >
                <ExpertiseCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  className={isActive ? "text-textDefaultClr" : ""}
                />
              </div>
            );
          })}
        </div>

        {/* Pills section */}
        <ExpertisePills activeIndex={activeIndex} />
      </div>

    </section>
  );
};


/* expertise pills */
const ExpertisePills = ({ activeIndex = 0 }) => {
  const expertiseData = [
    {
      title: "Hardware Design",
      subtitle: "We design smart and reliable hardware for real-world use.",
      pills: [
        { icon: imageAssets.powerIcon, text: "Power Electronics & Control Systems" },
        { icon: imageAssets.safetyIcon, text: "Intrinsic Safety (ATEX, IEC 60079)" },
        { icon: imageAssets.fpgaIcon, text: "FPGA & AI Edge Devices" },
      ],
    },
    {
      title: "Firmware Development",
      subtitle: "Building reliable firmware for smarter connected devices.",
      pills: [
        { icon: imageAssets.firmwareDevelopment, text: "RTOS & embedded OS" },
        { icon: imageAssets.safetyIcon, text: "OTA updates & device lifecycle management" },
        { icon: imageAssets.fpgaIcon, text: "Edge AI and sensor integration" },
      ],
    },
    {
      title: "Cloud & Web",
      subtitle: "Delivering fast, secure, and reliable web experiences.",
      pills: [
        { icon: imageAssets.cloudWeb, text: "MQTT and REST APIs" },
        { icon: imageAssets.safetyIcon, text: "Multi-tenant dashboards" },
        { icon: imageAssets.fpgaIcon, text: "Predictive analytics & data visualization" },
      ],
    },
    {
      title: "Mobile Apps",
      subtitle: "Crafting intuitive mobile experience for everyday users.",
      pills: [
        { icon: imageAssets.mobileApp, text: "Flutter, Android & iOS apps" },
        { icon: imageAssets.safetyIcon, text: "BLE/NFC based device pairing" },
        { icon: imageAssets.fpgaIcon, text: "Real-time control and data insights" },
      ],
    },
  ];

  const activeData = expertiseData[activeIndex] || expertiseData[0];

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
      url(${imageAssets.expertisePillBackground})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className=" mt-28 overflow-hidden">
      <div
        style={backgroundStyle}
        className="
          w-full max-w-[1200px] mx-auto
          shadow-none border-none
          rounded-3xl sm:rounded-full
          px-4 sm:px-8 md:px-16 lg:px-20
          py-8 sm:py-12
          flex flex-col items-center justify-center
          text-textDefaultClr
        "
      >
        {/* TITLE */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-5 text-center mb-1.5">
          {activeData.title}
        </div>

        {/* SUBTITLE */}
        <div className="text-xs sm:text-sm lg:text-base font-body font-1 text-center text-textDisableClr mb-6">
          {activeData.subtitle}
        </div>

        {/* PILLS */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          {activeData.pills.map((pill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 sm:px-5 py-2 rounded-full bg-[#EDF6FF33]"
            >
              <img src={pill.icon} alt="" className="w-4 h-4" />
              <span className="text-[8px] sm:text-[13px] font-body">
                {pill.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default  OurExpertise;