const AboutProductCard = ({ logo, title, description }) => {
  return (
    <div
      className="
        w-full
        h-full
        rounded-2xl
        bg-cardClr
        p-5
        text-center
        text-textDefaultClr
        shadow-lg
        flex
        flex-col
        items-center
      "
    >
      {/* Logo */}
      <div className="w-[5rem] h-[5rem] sm:w-[5.5rem] sm:h-[5.5rem] rounded-full bg-textDefaultClr flex items-center justify-center mb-3">
        <img
          src={logo}
          alt={title}
          className="w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="font-heading text-base sm:text-lg font-6 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-[13px] sm:text-[14px] text-textDisableClr leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AboutProductCard;
