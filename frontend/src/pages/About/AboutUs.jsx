import imageAssets from "../../assets";
import Aboutus from "../../components/common/AboutUs.jsx";

import React from 'react'

function AboutUs() {
  return (
    <div className="relative mx-4 sm:mx-8 md:mx-12 lg:mx-20" >

        <img
          src={imageAssets.Home_About_1}
          alt=""
          className="absolute top-[-20%] left-[15%] h-full object-contain z-0 block"
        />

        {/* Vertical SVG right */}
        <img
          src={imageAssets.Home_About_2}
          alt=""
          className="absolute top-[20%] right-[-10%] h-full object-contain z-0 block"
        />

        <Aboutus image={  imageAssets.Homesecond}
              title="Who we are"
              descriptions={[
                "Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment.",
                "Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment."
              ]}
              showButton={false}/>
    </div>
  )
}

export default AboutUs