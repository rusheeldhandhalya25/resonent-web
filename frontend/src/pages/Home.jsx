import React from "react";
import AppButton from "../components/buttons/AppButtons";
import Homefirst from "../assets/images/homefirst.png";
import Homesecond from "../assets/images/homesecond.png";
import HardwareDesign from "../assets/icons/hardware_design_icon.svg";
import FirmwareDevelopment from "../assets/icons/firmware_development_icon.svg";
import CloudWeb from "../assets/icons/cloud_web_icon.svg";
import MobileApp from "../assets/icons/mobile_app_icon.svg";
import ExpertisePillBackground from "../assets/images/expertisepillsbackground.jpg";
import PowerIcon from "../assets/icons/power_expertise_pills.svg";
import SafetyIcon from "../assets/icons/code_expertise_pills.svg";
import FpgaIcon from "../assets/icons/graph_expertise_pills.svg";
import { useState, useEffect } from "react";
import ProfileCard from "../components/cards/ProductCard.jsx";
import OurProcess from "../components/our-process/OurProcess";
import ProjectCard from "../components/cards/ProjectCard";
import factoryImg from "../assets/images/project_img_1.png";
import compImg from "../assets/images/project_img_2.png";
import graphImg from "../assets/images/project_img_4.png";
import labImg from "../assets/images/project_img_3.png";
import Mediverse from "../assets/images/mediverse_1.png";
import Syncworks from "../assets/images/syncworks_1.png";
import Storeedge from "../assets/images/storeedge_1.png";
import user1Img from "../assets/images/user_1.png";
import user2Img from "../assets/images/user_2.png";
import TestimonialCard from "../components/cards/Testimonialscard";
import ContactForm from "../components/ContactForm";
import ContactImg from "../assets/images/contactus_image.png";
import ExpertiseCard from "../components/ExpertiseCard";
import BlogCard from "../components/cards/BlogCard";
import Calender  from "../assets/icons/calender.svg";

import Aboutus from "../components/AboutUs.jsx";

/* ---------------- HERO SECTION ---------------- */

const Herosection = () => {
  return (
    <section className="bg-backgroundClr text-textDefaultClr">
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-4
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

            <AppButton
              variant="secondary"
              size="sm"
              rounded="full"
              className="px-8"
            >
              See our work
            </AppButton>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-[240px] sm:w-[300px] lg:w-[400px] p-3 bg-cardClr border border-lightOutlineClr rounded-[32px]">
            <img src={Homefirst} alt="Connected Product" className="w-full " />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- STATS BAR (ABC) ---------------- */

const Stat = ({ title, desc }) => (
  <div className="flex flex-col leading-tight">
    <h4 className="font-6 text-textDefaultClr text-[12px] sm:text-[16px] lg:text-[20px]">
      {title}
    </h4>
    <p className="text-textDisableClr text-[9px] sm:text-[12px] lg:text-[16px]">
      {desc}
    </p>
  </div>
);

export const ABC = () => {
  const style = {
    backgroundColor: "#002556",
    backgroundImage: `
    linear-gradient(
      240.05deg,
      rgba(4, 47, 105, 0.35) 0.05%,
      rgba(53, 144, 242, 0.35) 21.74%,
      rgba(53, 144, 242, 0.35) 73.07%,
      rgba(4, 47, 105, 0.35) 101.64%
    )
  `,
  };
  return (
    <div
      style={style}
      className="
        max-w-[1200px]
        mx-2
        sm:mx-4
        md:mx-6
        lg:mx-auto
        mt-12
        mb-8
       
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


/* Our expertise */

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
    <section className="w-full px-4 sm:px-6 lg:px-20 py-16">
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
        {expertiseData.map((item) => (
          <ExpertiseCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
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
                        "
          >
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

{
  /* feature project */
}

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

{
  /* Our Products */
}

const OurProduct = () => {
  return (
    <div className="px-4 py-16">
      <div className="font-heading font-6 text-3xl md:text-4xl flex items-center justify-center mb-10 text-center">
        Our Products
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <ProfileCard
          logo={Mediverse}
          title="Mediverse"
          description="MediVerse is a digital product that connects healthcare devices, doctors, and patients in one smart platform. It helps track health data, supports faster decisions, improves remote monitoring, and keeps information secure for better, reliable, and overall smarter medical care every day."
          buttonText="view product"
        />

        <ProfileCard
          logo={Syncworks}
          title="SyncWorks"
          description="Syncworks is a smart platform that connects machines, sensors, and software to improve industrial operations. It collects real-time data, reduces downtime, and increases productivity. With secure cloud integration and easy control, businesses can manage equipment smarter and make faster decisions anywhere, anytime."
          buttonText="view product"
        />

        <ProfileCard
          logo={Storeedge}
          title="Storeedge"
          description="StoreEdge is a smart warehouse management solution that tracks inventory in real time, reduces human errors, and speeds up operations. It supports seamless order processing, quick product locating, and secure data handling to help businesses improve efficiency, save time, and grow smoothly."
          buttonText="view product"
        />
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full bg-backgroundClr py-16 sm:py-20">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="font-heading font-6 text-3xl sm:text-4xl text-center mb-12">
          Testimonials
        </h2>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            place-items-center
          "
        >
          <TestimonialCard
            rating={4}
            title="The Marketing Strategy They Created For My Startup Boosted Our Online Visibility And Brought In More Qualified Leads Than I Expected."
            name="Noah Davis"
            role="Software Engineer"
            image={user1Img}
          />

          <TestimonialCard
            rating={4}
            title="The Branding Service Gave My Clothing Line A Fresh And Modern Look, Making It More Appealing To Customers."
            name="Ethan Hernandez"
            role="Financial Analyst"
            image={user2Img}
          />

          <TestimonialCard
            rating={4}
            title="The Team’s Development Skills Helped Create A Campaign Dashboard That Streamlined My Work And Boosted Results."
            name="Lucas Green"
            role="Digital Marketer"
            image={user1Img}
          />

          <TestimonialCard
            rating={4}
            title="Their Website Design Exceeded My Expectations. It’s Clean, Professional, And Perfectly Tailored To My Services."
            name="Mia Moore"
            role="Event Planner"
            image={user2Img}
          />
        </div>
      </div>
    </section>
  );
};

/* Blog page  */


/* Blog data */
const blogs = [
  {
    id: 1,
    title: "The Best Exercises For Fat Burn",
    excerpt:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises...",
    image: compImg,
    date: "26 July, 2025",
  },
  {
    id: 2,
    title: "Healthy And Satisfying Snacks",
    excerpt:
      "Are weight loss myths slowing you down? Let’s clear them up so you can focus on what actually works...",
    image: graphImg,
    date: "26 July, 2025",
  },

  {
    id: 3,
    title: "The Best Exercises For Fat Burn",
    excerpt:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises...",
    image: compImg,
    date: "26 July, 2025",
  },
  {
    id: 4,
    title: "Healthy And Satisfying Snacks",
    excerpt:
      "Are weight loss myths slowing you down? Let’s clear them up so you can focus on what actually works...",
    image: graphImg,
    date: "26 July, 2025",
  },
];


const Blog = () => {
  return (
    <section className="w-full bg-backgroundClr px-4 sm:px-6 lg:px-24 py-16">
      <h2 className="text-center font-heading font-7 text-40 text-textDefaultClr mb-12">
        Blogs
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-5">
        {/* LEFT BIG BLOG */}
        <div className="relative rounded-2xl overflow-hidden border border-lightOutlineClr hover:border-primaryDefaultClr transition-all duration-300 group">
          <img
            src={factoryImg}
            alt="blog image"
            className="w-full h-[30rem] object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-backgroundClr/45 via-backgroundClr/55 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8 max-w-[560px] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-textDisableClr text-16">
              <img src={Calender} className="w-4 h-4" />
              <span className="text-[0.7rem]">{blogs[1].date}</span>
            </div>

            <h3 className="font-body font-7 text-[0.9rem] leading-tight text-textDefaultClr">
              {blogs[1].title}
            </h3>

            <p className="font-body text-[0.8rem] text-textDisableClr  ">
             Are weight loss myths slowing you down? Let’s clear them up so you can focus on what actually works. Misinformation about weight loss is everywhere. You’ve probably heard advice like “just eat less” or “carbs are bad”, but how much of it is actually true?
            </p>
          </div>
        </div>

        {/* RIGHT BLOG LIST */}
        <div className="flex flex-col gap-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};



/* contact us  */

const ContactUs = () => {
  const style = {
    backgroundColor: "#002556",
    backgroundImage: `
    linear-gradient(
      240.05deg,
      rgba(4, 47, 105, 0.35) 0.05%,
      rgba(53, 144, 242, 0.35) 21.74%,
      rgba(53, 144, 242, 0.35) 73.07%,
      rgba(4, 47, 105, 0.35) 101.64%
    )
  `,
  };

  return (
    <section
      style={style}
      className="px-4 sm:px-6 py-8 md:py-12 lg:py-16 mx-4 sm:mx-8 md:mx-12 lg:mx-20 rounded-xl mt-20 mb-20"
    >
      <div className="font-heading font-6 text-3xl md:text-4xl flex items-center justify-center mt-7 mb-10">
        Contact Us
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className=" lg:block">
          <img
            src={ContactImg}
            alt="contact image"
            className="rounded-2xl h-full w-full"
          />
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

/* ---------------- HOME ---------------- */

const Home = () => {
  return (
    <div className="bg-backgroundClr text-textDefaultClr min-h-full flex flex-col gap-10  ">
      <Herosection />
      <ABC />
      <Aboutus image={Homesecond}
                title="Who we are"
                descriptions={[
                  "Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment."
                ]}
                buttonText="About us"
                buttonLink="/about"
                showButton={true}/>


      <Ourexpertise />
      <ExpertisePills />

      <OurProcess />
      <FeatureProject />
      <OurProduct />
      <Testimonials />
      <Blog />
      <ContactUs />
      
    </div>
  );
};

export default Home;
