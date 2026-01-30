import ServicesCard from "../components/ServicesCard";
import HardwareDesign from "../assets/icons/hardware_design_icon.svg"
import FirmwareDevelopment from "../assets/icons/firmware_development_icon.svg"

const First = () => {
  return (
    <div className="bg-backgroundClr flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="text-3xl sm:text-4xl lg:text-60 font-heading font-6 text-center text-textDefaultClr mt-[6rem] lg:mt-[13rem] max-w-[900px] leading-tight">
       IoT Solutions That Power
        <br />
        the Connected
        <br />
         World
      </div>

      <p className="font-body text-sm sm:text-[14px] text-center text-textDisableClr max-w-[750px] font-5 mt-4">
        From circuit to cloud, Resonent Technolabs delivers complete IoT product design Hardware, Firmware, Cloud & Mobile Apps all engineered for performance, scalability, and compliance.
      </p>
    </div>
  );
};

const OurService = () => {
  return (
    <section className="bg-backgroundClr px-4 sm:px-6 lg:px-20 py-20">
      <div className="flex flex-col gap-24">

        <ServicesCard
          step="01"
          variant="odd"
          HeadIcon={HardwareDesign}
          Heading="Hardware Design"
          Description="Our hardware design team builds industrial-grade electronics engineered for performance, safety, and reliability..."
          Round1="Power Electronics & Control Systems"
          Round2="Intrinsic Safety (ATEX, IEC 60079)"
          Round3="FPGA & AI Edge Devices"
        />

        <ServicesCard
          step="02"
          variant="even"
          HeadIcon={FirmwareDevelopment}
          Heading="Firmware Development"
          Description="Our firmware development team builds secure, reliable, and optimized embedded software..."
          Round1="FreeRTOS & Embedded OS"
          Round2="OTA & Device Lifecycle"
          Round3="Low Power Optimization"
        />

      </div>
    </section>
  );
};



const Services = () =>{
  return(
    <div>
          <First />
          <OurService />
    </div>
  )
}
export default Services;