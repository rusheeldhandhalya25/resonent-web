import imageAssets from "../../assets";

const StateData = [
  { value: "15+", label: "Years Of Experience" },
  { value: "25+", label: "IOT Projects Executed" },
  { value: "19500+", label: "Devices Delivered" },
  { value: "10+", label: "Industries Serving" },
];

const StatusBar = () => {
  const style = {
    backgroundColor: "#002556",
    backgroundImage: `
      linear-gradient(
        220.05deg,
        rgba(4, 47, 105, 0.35) 0.05%,
        rgba(53, 144, 242, 0.35) 11.74%,
        rgba(53, 144, 242, 0.35) 3.07%,
        rgba(4, 47, 105, 0.35) 101.64%
      )
    `,
  };

  return (
    <section className="w-full flex justify-center py-6 pt-9">
      <div
        style={style}
        className="
          w-full max-w-[1660px]
          mx-1 sm:mx-6 md:mx-20
          py-3 md:py-6 
          h-auto
          px-[-1] sm:px-10 md:px-28
          grid grid-cols-4 sm:grid-cols-7 items-center justify-items-center
          rounded-full
          border border-lightOutlineClr
          shadow-lg
        "
      >
        {StateData.flatMap((item, index) => {
          const content = (
            <div
              key={index}
              className="text-center leading-tight col-span-1 my-2 px-40"
            >
              <h3 className="text-[12px] sm:text-[20px] md:text-28 font-7 text-textDefaultClr whitespace-nowrap">
                {item.value}
              </h3>
              <p className="text-[8px] sm:text-[11px] md:text-20 text-textDisableClr whitespace-nowrap mt-2">
                {item.label}
              </p>
            </div>
          );

          if (index === StateData.length - 1) {
            return [content];
          }

          const divider = (
            <div
              key={`d-${index}`}
              className="hidden sm:flex items-center justify-center col-span-1"
            >
              <img
                src={imageAssets.statebarDivider}
                alt="divider"
                className="h-[2rem] sm:h-[2.7rem] md:h-[3.5] opacity-100 filter brightness-150"
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
