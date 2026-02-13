const MissionVision = ({ title, descriptions }) => {
  return (
    <div
      className="
        w-full
        lg:max-w-[900px]
        mx-auto
        rounded-3xl md:rounded-full
        px-6 sm:px-10 lg:px-16
        py-6 sm:py-16
        flex flex-col items-center justify-center gap-4
        bg-backgroundClr
        bg-newExpertiseGradient
      "
    >
      {/* TITLE PILL */}
      <div className="
        text-20 sm:text-24
        font-body font-6
        text-textDefaultClr
        bg-textDefaultClr/20
        rounded-full
        px-12 py-2
        border border-textDefaultClr/20
      ">
        {title}
      </div>

      {/* DESCRIPTION */}
      <div
        className="
          font-heading
          text-30
          md:text-40
          lg:text-[45px]
          leading-tight
          font-6
          text-center
          text-textDefaultClr/80
          max-w-[800px]
        "
      >
        {descriptions}
      </div>
    </div>
  );
};

export default MissionVision;
