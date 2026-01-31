import imageAssets from "../../assets";

const FounderCard = () => {
  const style = {
    backgroundColor: "#002556",
    backgroundImage: `
      linear-gradient(
        240.05deg,
        rgba(4, 47, 105, 0.35) 0.05%,
        rgba(53, 144, 242, 0.35) 100.74%,
        rgba(53, 144, 242, 0.35) 20.07%,
        rgba(4, 47, 105, 0.35) 101.64%
      )
    `,
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-20 mt-12">
      <div
        style={style}
        className="relative w-full max-w-7xl rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 items-start">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={imageAssets.CEOImage}
              alt="Founder"
              className="
                rounded-xl
                w-[180px]
                h-[180px]
                sm:w-[200px]
                sm:h-[200px]
                lg:w-[230px]
                lg:h-[230px]
                object-cover
              "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-textDefaultClr flex flex-col justify-between">
            <p className="
              font-body
              font-4
              text-sm
              sm:text-base
              lg:text-lg
              leading-relaxed
              mb-6
              text-justify
            ">
              Rushabh Shah guides Resonent with deep technical insight, ensuring innovation, reliability, and smooth execution across every IoT project while supporting clients worldwide with complete product design, engineering excellence, and long-term technology vision.
            </p>

            <div>
              <h4 className="font-heading text-lg sm:text-xl font-6">
                – Rushabh Shah
              </h4>
              <p className="text-sm sm:text-base text-textDisableClr mt-1">
                Founder & Managing Director
              </p>
            </div>
          </div>
        </div>

        {/* BACKGROUND PATTERN */}
        <img
          src={imageAssets.PatternImage}
          alt=""
          className="
            absolute
            bottom-0
            right-0
            w-[160px]
            h-[160px]
            sm:w-[200px]
            sm:h-[200px]
            lg:w-[250px]
            lg:h-[250px]
            opacity-30
            sm:opacity-50
            lg:opacity-100
            pointer-events-none
          "
        />
      </div>
    </div>
  );
};

export default FounderCard;