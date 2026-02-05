import { useState } from "react";
import imageAssets from "../assets";

const ServicesCard = ({
  step,
  variant = "odd",
  HeadIcon,
  Heading,
  Description,
  Round1,
  Round2,
  Round3,
}) => {
  const isEven = variant === "even";
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full flex justify-center">
      {/* CARD WRAPPER */}
      <div className="relative max-w-4xl w-full">

        {/* STEP NUMBER (always OUTSIDE card) */}
        <div
          className={`
            absolute
            top-1/2
            -translate-y-1/2
            text-[4rem]
            font-heading
            font-7
            text-textDisableClr/30
            hidden min-[1100px]:block
            ${isEven ? "-right-24" : "-left-24"}
          `}
        >
          {step}
        </div>

        {/* CARD */}
        <div
          className={`
            bg-cardClr
            rounded-2xl
            p-6
            shadow-lg
            transition
            duration-300
            ${isEven ? "lg:rotate-2" : "lg:-rotate-2"}
          `}
        >
          {/* TOP */}
          <div className="flex gap-4 items-start">
            <div className="bg-tagClr border border-lightOutlineClr rounded-xl p-4 shrink-0">
              <img src={HeadIcon} alt="" className="w-6 h-6" />
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-body font-5 text-lg text-textDefaultClr">
                {Heading}
              </h2>

              {/* DESCRIPTION */}
              <p
                className={`font-body font-5 text-sm text-textDisableClr leading-relaxed mt-1 cursor-pointer ${
                  isExpanded ? "" : "line-clamp-2"
                }`}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {Description}
              </p>
            </div>
          </div>

          {/* PILLS */}
          <div
            className="
              flex flex-col
              lg:flex-row lg:flex-wrap
              items-start
              gap-3
              mt-6
            "
          >
            <Pill icon={imageAssets.Power} text={Round1} />
            <Pill icon={imageAssets.Code} text={Round2} />
            <Pill icon={imageAssets.Graph} text={Round3} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Pill = ({ icon, text }) => (
  <div className="inline-flex items-center gap-2 bg-tagClr rounded-full px-4 py-2">
    <img src={icon} alt="" className="w-4 h-4 shrink-0" />
    <span className="font-body text-sm text-textDefaultClr">
      {text}
    </span>
  </div>
);

export default ServicesCard;
