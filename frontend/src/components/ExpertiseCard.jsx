const ExpertiseCard = ({ icon, title, description }) => {
  const style = {
    backgroundImage: `
      linear-gradient(
        240.05deg,
        rgba(4,47,105,0.35) 0%,
        rgba(53,144,242,0.35) 50%,
        rgba(4,47,105,0.35) 100%
      )
    `,
  };

  return (
    <div
      style={style}
      className="
        w-full
        rounded-2xl
        px-5 py-6
        sm:px-6 sm:py-7
        lg:px-7 lg:py-8
        flex flex-col items-center text-center
        min-h-[210px]
      "
    >
      <img
        src={icon}
        alt={title}
        className="
          w-9 h-9
          sm:w-10 sm:h-10
          lg:w-11 lg:h-11
          mb-4
        "
      />

      <p className="text-white font-body font-6 text-[15px] sm:text-[16px] lg:text-[18px]">
        {title}
      </p>

      <p className="mt-2 text-[#c7d9ee] font-body text-[13px] sm:text-[14px] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ExpertiseCard;
