import imageAssets from "../../assets/index.js";
import ServicesCard from "../../components/ServicesCard.jsx";

const OurService = () => {
  return (
    <section className="bg-backgroundClr px-4 sm:px-6 lg:px-20 py-8 pt-20 lg:pt-32   ">
      <div className="flex flex-col gap-8 lg:gap-20">
        <ServicesCard
          step="01"
          variant="odd"
          HeadIcon={imageAssets.hardwareDesign}
          Heading="Hardware Design"
          Description="Our hardware design team builds industrial-grade electronics engineered for performance, safety, and reliability. We design PCB layouts, power systems, ATEX-safe circuits, and advanced MCU/SoC/FPGA architectures for complex IoT devices. With strong expertise in control systems, intrinsic safety, and real-world testing, we convert ideas into efficient, compliant, and production-ready hardware solutions suited for demanding environments."
          Round1="Power Electronics & Control Systems"
          Round2="Intrinsic Safety (ATEX, IEC 60079)"
          Round3="FPGA & AI Edge Devices"
        />

        <ServicesCard
          step="02"
          variant="even"
          HeadIcon={imageAssets.firmwareDevelopment}
          Heading="Firmware Development"
          Description="Our firmware development team builds secure, reliable, and optimized embedded software for modern IoT devices. We work with FreeRTOS and low-power architectures, enabling OTA updates, real-time processing, and seamless communication through BLE, GSM, LoRa, and secure protocols. With strong focus on stability, safety, and field performance, we ensure every device operates efficiently across its complete lifecycle."
          Round1="FreeRTOS & embedded OS"
          Round2="OTA updates & device lifecycle "
          Round3="Edge AI and sensor integration"
        />

        <ServicesCard
          step="03"
          variant="odd"
          HeadIcon={imageAssets.cloudWeb}
          Heading="Cloud & Web"
          Description="Our cloud and web engineering team builds secure, scalable platforms for real-time IoT data processing. We design MQTT and REST APIs, multi-tenant dashboards, and analytics systems using NodeJS, ReactJS, and AWS. With strong focus on performance, reliability, and data visualization, we enable seamless device connectivity, smart insights, and efficient remote monitoring across large IoT deployments."
          Round1="MQTT and REST APIs"
          Round2="Multi-tenant dashboards "
          Round3="Predictive analytics & data visualization"
        />
        <ServicesCard
          step="04"
          variant="even"
          HeadIcon={imageAssets.mobileApp}
          Heading="Mobile Application"
          Description="We build modern mobile applications that connect seamlessly with IoT devices using BLE, NFC, and real-time communication. Our team develops Flutter, Android, and iOS apps designed for smooth user experiences, secure data handling, and reliable device control. With intuitive interfaces and strong backend integration, our apps enable effortless monitoring, configuration, and management of connected products."
          Round1="Flutter, Android & iOS apps"
          Round2="BLE/NFC based device pairing "
          Round3="Real-time control and data insights"
        />
      </div>
    </section>
  );
};
export default OurService;
