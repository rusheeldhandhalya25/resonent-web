import React from "react";
import AppButton from "../components/buttons/AppButtons";
import Homefirst from "../assets/images/homefirst.png";
import Homesecond from "../assets/images/homesecond.png";
import HardwareDesign from "../assets/images/icons/hardware_design_icon.Svg"

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

            <AppButton variant="secondary" size="sm" rounded="full">
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
              className="w-full rounded-[24px]"
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


const Ourexpertise = () => {
  return (
    <div className="flex flex-col gap-4">
       <div>
          <h1 className="font-heading text-[45px] text-textDefaultClr font-6 flex items-center justify-center">
              Our Expertise
          </h1>

          <p className="font-body text-16 text-textDisableClr font-1 flex items-center justify-center">
            Building powerful embedded solutions with smart hardware, intelligent software, and cloud integration.
          </p>
       </div>

      <div className="font-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10">

        <div className="bg-cardClr rounded-xl flex items-center justify-center mx-2 my-3 px-3 py-3">
            <img src={HardwareDesign} alt="Hardware design logo" className="w-[40px] h-[40px]" />
        </div>

        <div className="bg-cardClr rounded-xl flex items-center justify-center mx-2 my-3 px-3 py-3">
            grid-2 
        </div>

        <div className="bg-cardClr rounded-xl flex items-center justify-center mx-2 my-3 px-3 py-3">
            grid-3 
        </div>

        <div className="bg-cardClr rounded-xl flex items-center justify-center mx-2 my-3 px-3 py-3">
            grid-4 
        </div>

      </div>
    </div>
  )
};
/* ---------------- HOME ---------------- */

const Home = () => {
  return (
    <div className="bg-backgroundClr text-textDefaultClr min-h-full">
      <Herosection />
      <ABC />
      <Aboutus />
      <Ourexpertise />
    </div>
  );
};

export default Home;
