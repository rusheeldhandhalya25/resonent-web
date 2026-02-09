import TeamCard from "../../components/common/TeamCard";
import imageAssets from "../../assets";

const team = [
  {
    name: "Jerome Bell",
    role: "UI/UX Designer",
    image: imageAssets.aboutTeamOne,
    avatar: imageAssets.aboutTeamProfileLogo,
  },
  {
    name: "Jerome Bell",
    role: "Backend Developer",
    image: imageAssets.aboutTeamTwo,
    avatar: imageAssets.aboutTeamProfileLogo,
  },
  {
    name: "Jerome Bell",
    role: "Frontend Developer",
    image: imageAssets.aboutTeamThree,
    avatar: imageAssets.aboutTeamProfileLogo,
  },
  {
    name: "Jerome Bell",
    role: "Frontend Developer",
    image: imageAssets.aboutTeamFour,
    avatar: imageAssets.aboutTeamProfileLogo,
  },
];

const OurTeam = () => {
  return (
    <section className="py-16 bg-backgroundClr">
      <h2 className="text-center text-3xl font-heading font-6 text-white mb-10">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-20 max-w-xs sm:max-w-xl lg:max-w-none mx-auto">
        {team.map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
