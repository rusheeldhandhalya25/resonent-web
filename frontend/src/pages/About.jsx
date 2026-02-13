import First from "./about/FirstParagraph.jsx";
import StatusBar from "../components/common/StatusBar.jsx";
import MissionVision from "./about/MissionVision.jsx";
import OurStory from "./about/OurStory.jsx";
import Ecosystem from "./about/EcoSystem.jsx";
import FounderCard from "./about/FounderCard.jsx";
import OurPartner from "./about/OurPartner.jsx";
import AboutUs from "./about/AboutUs.jsx";
import Value from "./about/Value.jsx";
import OurTeam from "./about/OurTeam.jsx";

const About = () => {
  return (
    <div className="bg-backgroundClr flex flex-col gap-20">
      <First />
      <StatusBar />
      <AboutUs />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto ">
        <MissionVision
          title="Mission"
          descriptions="Simplify IoT product development and Make Innovation scalable."
        />

        <MissionVision
          title="Vision"
          descriptions="Leading global partner for intelligent and sustainable IoT."
        />
      </div>

      <Value />
      <OurStory />
      <OurTeam />
      <Ecosystem />
      <FounderCard />
      <OurPartner />
    </div>
  );
};

export default About;
