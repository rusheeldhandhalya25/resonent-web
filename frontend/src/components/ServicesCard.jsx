import imageAssets from "../assets";

const ServicesCard = ({
  step,
  variant = "odd", // "odd" | "even"
  HeadIcon,
  Heading,
  Description,
  Round1,
  Round2,
  Round3,
}) => {
  const isEven = variant === "even";

  return (
    <div className="relative w-full flex justify-center">
      
      {/* BIG NUMBER */}
      <div
        className={`
          absolute
          top-1/2
          -translate-y-1/2
          text-[4rem]
          font-heading
          font-7
          text-textDisableClr/30
          hidden
          lg:block
          ${isEven ? "right-9" : "left-9"}
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
          max-w-4xl
          w-full
          shadow-lg
          transform
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

          <div className="flex flex-col gap-2">
            <h2 className="font-body font-5 text-lg text-textDefaultClr">
              {Heading}
            </h2>

            <p className="font-body font-5 text-sm text-textDisableClr leading-relaxed line-clamp-2">
              {Description}
            </p>
          </div>
        </div>

        {/* PILLS */}
        <div className="flex flex-wrap gap-3 mt-6">
          <Pill icon={imageAssets.Power} text={Round1} />
          <Pill icon={imageAssets.Code} text={Round2} />
          <Pill icon={imageAssets.Graph} text={Round3} />
        </div>
      </div>
    </div>
  );
};

const Pill = ({ icon, text }) => (
  <div className="flex items-center gap-2 bg-tagClr rounded-full px-4 py-2">
    <img src={icon} alt="" className="w-4 h-4" />
    <span className="font-body text-sm text-textDefaultClr">{text}</span>
  </div>
);

export default ServicesCard;
