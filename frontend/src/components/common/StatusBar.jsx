import Statebar_Divider from "../../assets/svg/Statebar_Divider.svg";

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
        rgba(53, 144, 242, 0.35) 21.74%,
        rgba(53, 144, 242, 0.35) 73.07%,
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
          /* ઊંચાઈ વધારવા માટે py અને h-auto નો ઉપયોગ */
          py-5 md:py-8 
          h-auto
          px-4 sm:px-10
          flex items-center justify-between
          rounded-full
          border border-lightOutlineClr
          shadow-lg
        "
      >
        {StateData.map((item, index) => (
          <div key={index} className="flex items-center flex-1 justify-center gap-1 sm:gap-6">
            {/* TEXT CONTAINER */}
            <div className="text-center leading-tight">
              <h3 className="text-[14px] sm:text-[20px] md:text-[24px] font-bold text-textDefaultClr whitespace-nowrap">
                {item.value}
              </h3>
              <p className="text-[8px] sm:text-[11px] md:text-[14px] text-textDisableClr whitespace-nowrap mt-1">
                {item.label}
              </p>
            </div>

            {/* DIVIDER */}
            {index !== StateData.length - 1 && (
              <img
                src={Statebar_Divider}
                alt="divider"
                /* લાઈન મોટી કરવા માટે h-8 થી h-12 સુધી વધાર્યું */
                className="h-[30px] sm:h-[45px] md:h-[55px] opacity-40 ml-1 sm:ml-2"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatusBar;