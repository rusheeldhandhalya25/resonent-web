import imageAssets from "../../assets";

const StateData = [
  { value: "15+", label: "Year Of Experience" },
  { value: "25+", label: "IoT Project Executed" },
  { value: "19500+", label: "Devices Delivered" },
  { value: "10+", label: "Industries Serving" },
];

const StatusBar = () => {
  const style = {
    backgroundColor: "#002556",
    backgroundImage: `
      linear-gradient(
        240.05deg,
        rgba(4, 47, 105, 0.35) 0.05%,
        rgba(53, 144, 242, 0.35) 11.74%,
        rgba(53, 144, 242, 0.35) 3.07%,
        rgba(4, 47, 105, 0.35) 101.64%
      )
    `,
  };

  return (
    <section className="w-full flex justify-center py-6">
      <div
        style={style}
        className="
          w-full max-w-[1200px]
          mx-2 sm:mx-6 md:mx-9
          py-3 md:py-5 
          h-auto
          px-4 sm:px-10
          grid grid-cols-4 sm:grid-cols-7 items-center justify-items-center
          rounded-full
          border border-lightOutlineClr
          shadow-lg
        "
      >
        {StateData.flatMap((item, index) => {
          const content = (
            <div key={index} className="text-center leading-tight col-span-1">
              <h3 className="text-[14px] sm:text-[20px] md:text-[22px] font-bold text-textDefaultClr whitespace-nowrap">
                {item.value}
              </h3>
              <p className="text-[8px] sm:text-[11px] md:text-[14px] text-textDisableClr whitespace-nowrap mt-1">
                {item.label}
              </p>
            </div>
          );

          if (index === StateData.length - 1) {
            return [content];
          }

          const divider = (
            <div key={`d-${index}`} className="hidden sm:flex items-center justify-center col-span-1">
              <img
                src={imageAssets.statebarDivider}
                alt="divider"
                className="h-[30px] sm:h-[45px] md:h-[55px] opacity-100 filter brightness-150"
              />
            </div>
          );

          return [content, divider];
        })}
      </div>
    </section>
  );
};

export default StatusBar;
