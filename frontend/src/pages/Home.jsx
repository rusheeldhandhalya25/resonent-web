import React from "react";
import { useState, useEffect } from "react";
import Calender  from "../assets/icons/calender.svg";

import Homefirst from "../assets/images/homefirst.png";
import Homesecond from "../assets/images/homesecond.png";
import ExpertisePillBackground from "../assets/images/expertisepillsbackground.jpg";
import factoryImg from "../assets/images/project_img_1.png";
import compImg from "../assets/images/project_img_2.png";
import graphImg from "../assets/images/project_img_4.png";
import labImg from "../assets/images/project_img_3.png";
import Mediverse from "../assets/images/mediverse_1.png";
import Syncworks from "../assets/images/syncworks_1.png";
import Storeedge from "../assets/images/storeedge_1.png";
import user1Img from "../assets/images/user_1.png";
import user2Img from "../assets/images/user_2.png";
import ContactImg from "../assets/images/contactus_image.png";

import HardwareDesign from "../assets/icons/hardware_design_icon.svg";
import FirmwareDevelopment from "../assets/icons/firmware_development_icon.svg";
import CloudWeb from "../assets/icons/cloud_web_icon.svg";
import MobileApp from "../assets/icons/mobile_app_icon.svg";
import PowerIcon from "../assets/icons/power_expertise_pills.svg";
import SafetyIcon from "../assets/icons/code_expertise_pills.svg";
import FpgaIcon from "../assets/icons/graph_expertise_pills.svg";


import TestimonialCard from "../components/cards/Testimonialscard";
import ContactForm from "../components/ContactForm";

import ExpertiseCard from "../components/ExpertiseCard";
import BlogCard from "../components/cards/BlogCard";
import AppButton from "../components/buttons/AppButtons";
import ProfileCard from "../components/cards/ProductCard.jsx";
import OurProcess from "../components/our-process/OurProcess";
import ProjectCard from "../components/cards/ProjectCard";

import Aboutus from "../components/common/AboutUs.jsx";


import HeroSection from "./Home/HeroSection.jsx";
import StatusBar from "../components/common/StatusBar.jsx";
import OurExpertise from "./Home/OurExpertise.jsx";
import FeatureProject from "./Home/FeatureProject.jsx";
/* ---------------- HERO SECTION ---------------- */



/* Our expertise */



{
  /* feature project */
}



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
          title="MediVerse"
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
          title="StoreEdge"
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
      
      <HeroSection />
      <StatusBar />
      <Aboutus image={Homesecond}
                title="Who we are"
                descriptions={[
                  "Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment."
                ]}
                buttonText="About us"
                buttonLink="/about"
                showButton={true}/>


      <OurExpertise />
      {/* <ExpertisePills /> */}

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
