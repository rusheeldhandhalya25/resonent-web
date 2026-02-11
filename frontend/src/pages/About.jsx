import Aboutus from "../components/common/AboutUs.jsx";
import TimelineItem from "../components/TimelineItem.jsx";
import AboutProductCard from "../components/cards/AboutProductCard.jsx";

import First from "./About/FirstParagraph.jsx";
import StatusBar from "../components/common/StatusBar.jsx";
import MissionVision from "./About/MissionVision.jsx";
import OurStory from "./About/OurStory.jsx";
import Ecosystem from "./About/EcoSystem.jsx";
import FounderCard from "./About/FounderCard.jsx";
import OurPartner from "./About/OurPartner.jsx";
import AboutUs from "./About/AboutUs.jsx";
import Value from "./About/Value.jsx";
import OurTeam from "./About/OurTeam.jsx";

const About = () => {
  return (
    <div className="bg-backgroundClr flex flex-col gap-20">
      <First />
      <StatusBar />
      <AboutUs />

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
