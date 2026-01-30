import React from "react";

const AboutProductCard = ({ logo, title, description }) => {
  return (
    <div
      className="
        w-full
        rounded-2xl
        bg-cardClr
        p-4
        text-center
        text-textDefaultClr
        shadow-lg
        flex
        flex-col
        items-center
      "
    >
      {/* Logo */}
      <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-textDefaultClr flex items-center justify-center mb-3">
        <img
          src={logo}
          alt={title}
          className="w-[4rem] h-[4rem] object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="font-heading text-base font-6 mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-[13px] text-textDisableClr leading-snug ">
        {description}
      </p>
    </div>
  );
};

export default AboutProductCard;
