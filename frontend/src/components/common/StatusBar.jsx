import Statebar_Divider from "../../assets/svg/Statebar_Divider.svg";

const StateData = [
    { value : "15+" , label : " Year Of Experience "},
    { value : "25+" , label : " IOT Project Executed "},
    { value : "19500+" , label : " Devices Delivered "},
    { value : "10+" , label : " Indusries Serving "},
];

const StatusBar = () => {

    const style = {
      backgroundColor: "#002556",
      backgroundImage: `
        linear-gradient(
          240.05deg,
          rgba(4, 47, 105, 0.35) 0.05%,
          rgba(53, 144, 242, 0.35) 1.74%,
          rgba(53, 144, 242, 0.35) 3.07%,
          rgba(4, 47, 105, 0.35) 101.64%
        )
      `,
    }

    return (
    <section className="w-full flex justify-center px-4">
      <div
        style={style}
        className="
          w-full max-w-[1350px]
          min-h-[90px]
          py-5 px-20
          flex flex-col lg:flex-row
          rounded-full
          items-center justify-between
          border border-lightOutlineClr
          gap-8
        "
      >
        {StateData.map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            {/* TEXT */}
            <div className="text-center lg:text-left">
              <h3 className="text-[24px] font-7 text-textDefaultClr text-center">
                {item.value}
              </h3>
              <p className="mt-1 text-[19px] font-5 text-textDisableClr">
                {item.label}
              </p>
            </div>

            {/* DIVIDER */}
            {index !== StateData.length - 1 && (
              <img
                src={Statebar_Divider}
                alt=""
                className="hidden lg:block h-[60px] opacity-100"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatusBar;