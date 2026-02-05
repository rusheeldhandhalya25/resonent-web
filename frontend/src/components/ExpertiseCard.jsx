const ExpertiseCard = ({ icon, title, description, className = "" }) => {
  

  return (
    <div
      className={`
        group
        relative
        w-full
        rounded-2xl
        px-5 py-6
        bg-backgroundClr
        bg-newExpertiseGradient
        sm:px-6 sm:py-7
        lg:px-7 lg:py-8
        flex flex-col items-center text-center
        min-h-[230px]
        transition-all duration-300 ease-in-out
        hover:bg-primaryDefaultClr
        hover:shadow-lg
        hover:-translate-y-1
        z-20
        ${className}
      `}
    >
      {/* ICON */}
      <img
        src={icon}
        alt={title}
        className="
          w-7 h-7
          sm:w-10 sm:h-10
          lg:w-11 lg:h-11
          mb-4
          z-10
          transition-all duration-300
          group-hover:scale-110
          group-hover:brightness-0
          group-hover:invert
        "
      />

      {/* TITLE */}
      <p
        className="
          font-body font-6
          z-10
          text-[15px] sm:text-[16px] lg:text-[18px]
          text-white
          transition-colors duration-300
          group-hover:text-white
        "
      >
        {title}
      </p>

      {/* DESCRIPTION */}
      <p
        className="
          mt-2
          z-10
          font-body
          text-[13px] sm:text-[14px]
          leading-relaxed
          text-[#c7d9ee]
          transition-colors duration-300
          group-hover:text-white
        "
      >
        {description}
      </p>
    </div>
  );
};

export default ExpertiseCard;
