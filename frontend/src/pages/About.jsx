
import ExpertiseCard from "../components/ExpertiseCard.jsx";
import Aboutus from "../components/common/AboutUs.jsx";
import TimelineItem from "../components/TimelineItem.jsx";
import AboutProductCard from "../components/cards/AboutProductCard.jsx";
import imageAssets from "../assets/index.js";
import First from "./About/FirstParagraph.jsx";
import StatusBar from "../components/common/StatusBar.jsx";
import MissionVision from "./About/MissionVision.jsx";
import OurStory from "./About/OurStory.jsx";
import Ecosystem from "./About/EcoSystem.jsx";
import FounderCard from "./About/FounderCard.jsx";
import OurPartner from "./About/OurPartner.jsx";


const About = () => {
  return (
    <div className="bg-backgroundClr flex flex-col gap-20">
      <First />
      <StatusBar />
      <Aboutus image={  imageAssets.Homesecond}
              title="Who we are"
              descriptions={[
                "Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment.",
                "Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment."
              ]}
              showButton={false}/>
                  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-20 max-w-[1200px] mx-auto ">
              <MissionVision
                title="Mission"
                descriptions="Simplify IoT product development and make innovation scalable."
              />

              <MissionVision
                title="Vision"
                descriptions="Leading global partner for intelligent and sustainable IoT."
              />
            </div>





            <div>
              <h3 className="font-heading text-textDefaultClr font-6 text-3xl md:text-4xl flex items-center justify-center mb-10 mt-5 text-center">
                Values
              </h3>
              <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-20 ">

                <ExpertiseCard icon={imageAssets.HardwareDesign}
                                title="Integrity"
                                description="We create fresh ideas that turn technology challenges into solutions"/>
                
                <ExpertiseCard icon={imageAssets.FirmwareDevelopment}
                                title="Innovation"
                                description="We create fresh ideas that turn technology challenges into solutions"/>
                
                <ExpertiseCard icon={imageAssets.CloudWeb}
                                title="Collaboration"
                                description="Working together to achieve smarter solutions and shared success always"/>
                
                <ExpertiseCard icon={imageAssets.MobileApp}
                                title="Sustainability"
                                description="Smart engineering for a cleaner planet with lasting positive impact"/>

              </div>
            </div>

            <OurStory />

            <Ecosystem />
            <FounderCard />
            <OurPartner />
    </div>
  );
};

export default About;
