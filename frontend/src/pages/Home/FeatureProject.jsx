import React from "react";
import imageAssets from "../../assets";
import ProjectCard from "../../components/cards/ProjectCard";

const FeatureProject = () => {
  return (
    <section id="our-project"  className="relative w-full px-4 sm:px-6 lg:px-20 py-12 overflow-hidden">

      <img src={imageAssets.homeFeatureProject} 
           alt=""
           className="absolute top-[10%] left-0 w-[150%] -translate-x-1 z-0 block " />

      <img src={imageAssets.homeFeatureProject2} 
           alt=""
           className="absolute bottom-[10%] left-0 w-[150%] -translate-x-1 z-0 block " />

      <div className="font-heading font-6 text-[45px] flex items-center justify-center mb-20">
        featured Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-5">
          <ProjectCard
            tag="Product Design"
            year="2021"
            title="Smart Factory Gateway"
            description="A smart device that connects factory machines to the internet and software systems. It collects machine data in real time, sends alerts, and helps improve productivity."
            image={imageAssets.factoryImg}
          />

          <ProjectCard
            tag="Product Design"
            year="2021"
            title="ATEX Gas Sensor Node"
            description="A safe and certified device that detects dangerous gases in industrial areas. It is designed for hazardous zones and sends real-time alerts to protect workers and equipment. It helps prevent accidents and keeps the environment safe."
            image={imageAssets.gasSensorImg}
          />
        </div>
        <div className="flex flex-col mt-1 md:mt-20 gap-5">
          <ProjectCard
            tag="Product Design"
            year="2021"
            title="AI-Edge Vending Controller"
            description="A smart controller that uses AI to run vending machines smoothly. It works on the edge, so it makes decisions quickly without depending on the internet. It helps manage stock, payments, and machine health in real time for better customer service and lower maintenance costs."
            image={imageAssets.edgeVendingImg}
          />

          <ProjectCard
            tag="Product Design"
            year="2021"
            title="Smart Energy Meter"
            description="A device that measures electricity use in real time. It helps track power consumption, reduce waste, and save money. It can send data automatically for billing and monitoring, making energy management easier and smarter."
            image={imageAssets.smartEnergyImg}
          />
        </div>
      </div>
    </section>
  );
};
export default FeatureProject;