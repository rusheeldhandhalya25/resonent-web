import Power from "../assets/icons/power_expertise_pills.svg";
import Code from "../assets/icons/code_expertise_pills.svg";
import Graph from "../assets/icons/graph_expertise_pills.svg";

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
          text-[6rem]
          font-heading
          font-6
          text-white/10
          hidden
          lg:block
          ${isEven ? "right-[-50px]" : "left-[-50px]"}
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
          <div className="bg-tagClr border border-lightOutlineClr rounded-xl p-3 shrink-0">
            <img src={HeadIcon} alt="" className="w-5 h-5" />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-body font-5 text-lg text-textDefaultClr">
              {Heading}
            </h2>

            <p className="font-body font-5 text-sm text-textDisableClr leading-relaxed">
              {Description}
            </p>
          </div>
        </div>

        {/* PILLS */}
        <div className="flex flex-wrap gap-3 mt-6">
          <Pill icon={Power} text={Round1} />
          <Pill icon={Code} text={Round2} />
          <Pill icon={Graph} text={Round3} />
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
