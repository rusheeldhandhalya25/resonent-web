const MissionVision = ({ title, descriptions }) => {
  const style = {
    backgroundColor: "#002556",
    backgroundImage: `linear-gradient(
      240.05deg,
      rgba(4,47,105,0.35) 0.05%,
      rgba(53,144,242,0.35) 21.74%,
      rgba(53,144,242,0.35) 73.07%,
      rgba(4,47,105,0.35) 101.64%
    )`,
  };

  return (
    <div
      style={style} className="w-full max-w-full sm:max-w-[520px] lg:max-w-[700px] rounded-3xl md:rounded-full px-4 sm:px-6 lg:px-10 py-6 sm:py-8 flex flex-col items-center justify-center gap-4">
      {/* TITLE PILL */}
      <div className="text-xs sm:text-smlg:text-base font-body font-6 text-textDefaultClr bg-tagClr rounded-full px-5 py-2 border border-textDefaultClr/20">
        {title}
      </div>

      {/* DESCRIPTION */}
      <div
        className="
          font-heading
          font-6
          text-center
          text-textDisableClr
          text-base
          sm:text-xl
          lg:text-2xl
          leading-snug
        "
      >
        {descriptions}
      </div>


    </div>
  );
};
export default MissionVision;