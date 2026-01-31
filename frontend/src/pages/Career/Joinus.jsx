import imageAssets from "../../assets";
import ExpertiseCard from "../../components/ExpertiseCard";

const JoinUs = () => {
    return(
       <div className="bg-backgroundClr flex flex-col gap-5 items-center justify-center mt-20">
            <h2 className="font-heading font-6 text-40 text-textDefaultClr items-center justify-center">            
                Why Jion Us
            </h2>

            <p className="font-body font-5 text-19 text-textDisableClr items-center text-center justify-center">
                Discover the opportunities,growth and impact that define our culture .
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-20">
                <ExpertiseCard icon={imageAssets.HardwareDesign}
                                title="End to End Exposure"
                                description="Work across complete product development lifecycle"/>

                <ExpertiseCard icon={imageAssets.FirmwareDevelopment}
                                title="R&D Innovation"
                                description="Create new ideas through  hands on experimentation"/>

                <ExpertiseCard icon={imageAssets.CloudWeb}
                                title="Growth Opportunities "
                                description="Advance your skills with continues career learning "/>
                
                <ExpertiseCard icon={imageAssets.MobileApp}
                                title="Social impact"
                                description="Build technology that positively impacts communities"/>
            </div>
       </div>     
    );
};

export default JoinUs;