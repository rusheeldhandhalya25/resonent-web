import React from "react";
import { useNavigate } from "react-router-dom";
import imageAssets from "../../assets";
import ExpertiseCard from "./../../components/ExpertiseCard";
import { useState } from "react";

function MediVerse() {
  const navigate = useNavigate();

  const logos = [
    imageAssets.skoda,
    imageAssets.swiggy,
    imageAssets.kia,
    imageAssets.nokia,
    imageAssets.intel,
    imageAssets.mahindra,
    imageAssets.oppo,
    imageAssets.fila,
  ];

  return (
    <div className="w-full bg-backgroundClr pb-20 pt-24 lg:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <img
          src={imageAssets.backIcon}
          alt=""
          className="w-[50px] h-[50px] cursor-pointer"
          onClick={() => navigate("/projects")}
        />

        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full shadow-lg sm:h-20 sm:w-20">
            <img
              src={imageAssets.mediverseLogo}
              alt="MediVerse Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <h1 className="mb-4 font-heading text-3xl font-6 text-textDefaultClr sm:text-4xl lg:text-5xl">
            MediVerse
          </h1>

          <p className="max-w-3xl font-body text-sm font-4 leading-relaxed text-textDisableClr sm:text-base lg:text-lg">
            MediVerse is a digital product that connects healthcare devices,
            doctors, and patients in one smart platform. It helps track health
            data, supports faster decisions, improves remote monitoring, and
            keeps information secure for better, reliable, and overall smarter
            medical care every day.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 overflow-hidden rounded-2xl shadow-2xl sm:mt-16">
          <img
            src={imageAssets.factoryImg}
            alt="MediVerse Dashboard"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Content Section */}

        <div className="flex-col gap-2  pt-3 md:pt-20">
          <h2 className="font-heading font-6 text-textDefaultClr text-40 text-start">
            Product Overview
          </h2>

          <p className="font-body font-5 text-textDisableClr text-[14px] text-justify mt-5">
            Resonent Technolabs is a complete IoT innovation partner, seamlessly
            integrating electronic design, embedded firmware development, and
            cloud engineering within a single ecosystem. We specialize in
            turning conceptual ideas into robust, production-ready IoT solutions
            that meet industry standards and compliance requirements. From
            prototype to mass manufacturing, our multidisciplinary team ensures
            every product is intelligent, scalable, and reliable for real-world
            deployment.
          </p>
          <p className="font-body font-5 text-textDisableClr text-[14px] text-justify mt-2">
            MediVerse is a smart healthcare connectivity platform designed to
            seamlessly link medical devices, doctors, and patients in one secure
            digital ecosystem. It enables real-time health monitoring, accurate
            data insights, and faster clinical decisions. With advanced
            tracking, remote care support, and automated alerts, MediVerse
            improves patient outcomes while reducing manual workload for
            healthcare providers. Its strong data security and compliance ensure
            that every interaction remains safe and reliable. MediVerse brings
            intelligence, efficiency, and continuity to everyday medical care.
          </p>
        </div>

        {/* key feature of our program */}

        {/* key feature of our program */}
        <div>
          <h2 className="font-heading font-6 text-textDefaultClr text-40 text-start mt-5 md:mt-20">
            Key Features of Our Program
          </h2>

          {/*
    activeIndex = kono card open chhe
    default 0 => pehlo open
  */}
          {(() => {
            const [activeIndex, setActiveIndex] = useState(0);

            const features = [
              {
                title: "Real Time Data",
                desc: "Real-time health data keeps doctors and patients updated instantly for faster, accurate medical decisions.",
              },
              {
                title: "Remote Alerts",
                desc: "Instant alerts notify caregivers and doctors during critical health conditions.",
              },
              {
                title: "Device Integration",
                desc: "Seamless integration with medical and wearable devices for continuous monitoring.",
              },
            ];

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 items-stretch">
                {/* LEFT SIDE */}
                <div className="flex flex-col gap-4 h-full">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setActiveIndex(index)}
                      className="bg-cardClr rounded-xl p-5 cursor-pointer transition-all duration-300"
                    >
                      <h3 className="font-body font-5 text-textDefaultClr text-16">
                        {item.title}
                      </h3>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
                        }`}
                      >
                        <p className="text-textDisableClr text-[14px] font-body">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* RIGHT SIDE VIDEO */}
                <div className="h-full rounded-xl overflow-hidden">
                  <video
                    className="w-full h-full object-cover rounded-xl"
                    controls
                    poster={imageAssets.factoryImg}
                  >
                    <source src="/demo-video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Technical Specifications Section */}
        <div>
          <h2 className="font-heading font-6 text-textDefaultClr text-40 text-center mt-4 md:mt-10">
            Technical Specifications
          </h2>

          <div className=" items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 md:mt-20">
            <ExpertiseCard
              icon={imageAssets.hardwareDesign}
              title="Blueteeth"
              description="Wireless data exchange with nearby devices."
            />
            <ExpertiseCard
              icon={imageAssets.wifiIcon}
              title="wifi"
              description="High-speed wireless internet for connected devices."
            />
            <ExpertiseCard
              icon={imageAssets.aiIcon}
              title="AI"
              description="Smart machines simulating human learning and decisions."
            />
            <ExpertiseCard
              icon={imageAssets.firmwareDevelopment}
              itle="C+"
              description="Powerful programming language for fast system development."
            />
          </div>
        </div>

        {/* our partner */}
      </div>

      <section className="w-full py-12 px-4 sm:px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-28 sm:text-32 lg:text-40 font-heading font-6 text-textDefaultClr text-center mb-10">
          Security and Compliance
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
            <div key={index} className="group flex items-center justify-center">
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
    </div>
  );
}

export default MediVerse;
