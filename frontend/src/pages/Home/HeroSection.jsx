import AppButton from "../../components/buttons/AppButtons";
import imageAssets from "../../assets";

const handleScrollToProjects = () => {
  const section = document.getElementById("our-project");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroSection = () => {
  return (
    <section className="bg-backgroundClr text-textDefaultClr overflow-hidden">
      <div
        className="
          max-w-[1200px] xl:max-w-[1320px]
          mx-auto
          px-4
          pt-6 lg:pt-10           /* ❌ unchanged */
          pb-10
          grid
          grid-cols-1
          lg:grid-cols-[62%_38%]
          gap-10
          items-center
          lg:pr-8 xl:pr-16       /* ✅ RIGHT-SIDE SPACE FIX */
        "
      >
        {/* TEXT */}
        <div
          className="
            text-center lg:text-left
            relative z-10
            lg:-mt-6              /* ✅ TEXT UP ONLY */
          "
        >
          <h1 className="font-heading font-6 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            We Build the future of
            <br />
            Connected Products
          </h1>

          <p
            className="
              mt-4
              font-body
              text-14 sm:text-16
              text-textDisableClr
              max-w-xl
              mx-auto lg:mx-0
              text-center lg:text-justify
            "
          >
            We design smart hardware, software, and cloud systems that help
            companies build reliable connected products and bring their
            technology ideas to life easily.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start relative">
            <AppButton variant="primary" size="sm" rounded="full">
              Start your project
            </AppButton>

            <AppButton
              variant="secondary"
              size="sm"
              rounded="full"
              className="px-8"
              onClick={handleScrollToProjects}
            >
              See our work
            </AppButton>

            {/* Decorative left SVG — unchanged */}
            <img
              src={imageAssets.VerticleLine_Left}
              alt=""
              className="
                hidden lg:block
                absolute
                -top-60
                -left-24
                w-[260px]
                opacity-100
                z-0
              "
            />
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end relative">
          <div
            className="
              relative
              w-[18rem] sm:w-[22.5rem]
              lg:w-[26rem] xl:w-[28rem]
              h-[26.5rem] sm:h-[32.5rem]
              lg:h-[34rem] xl:h-[36rem]
              -translate-y-8 lg:-translate-y-10
            "
          >
            {/* SVGs — UNCHANGED */}
            <img
              src={imageAssets.VerticleLine_1}
              alt=""
              className="absolute top-20 left-[28%] h-full z-0"
            />

            <img
              src={imageAssets.VerticleLine_2}
              alt=""
              className="absolute top-10 right-[14%] h-full z-0"
            />

            <img
              src={imageAssets.HorizontalLine_1}
              alt=""
              className="
                absolute
                top-[79%]
                left-[40%]
                -translate-x-1/2
                -translate-y-1/2
                w-[170%]
                xl:w-[150%]
                max-w-none
                z-0
                opacity-100
              "
            />

            {/* Main illustration */}
            <div className="absolute bottom-24 right-6 w-[82%] z-10">
              <div className="relative">
                <img
                  src={imageAssets.Basefirstlogo}
                  alt="Base decorative background"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={imageAssets.Homefirst}
                    alt="Main illustration"
                    className="w-[95%] h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
