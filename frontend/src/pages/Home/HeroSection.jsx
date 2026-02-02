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
    <section className="bg-backgroundClr text-textDefaultClr">
  <div
    className="
      max-w-[1200px]
      mx-auto
      px-4
      pt-3 lg:pt-0
      pb-12
      grid
      grid-cols-1
      lg:grid-cols-[60%_40%]
      gap-10
      items-center
    "
  >
    {/* TEXT */}
    <div className="text-center lg:text-left">
      <h1 className="font-heading font-6 text-4xl sm:text-5xl lg:text-6xl leading-tight">
        We Build the future of
        <br />
        Connected Products
      </h1>

      <p className="mt-4 font-body text-14 sm:text-16 text-textDisableClr max-w-xl mx-auto lg:mx-0">
        We design smart hardware, software, and cloud systems that help
        companies build reliable connected products and bring their
        technology ideas to life easily.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
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

        <img
          src={imageAssets.VerticleLine_Left}
          alt=""
          className="absolute bottom-[80%] right-[90%] w-full object-contain z-1 opacity-100"
        />
      </div>
    </div>

    {/* IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <div
        className="
      relative
      w-[18rem] sm:w-[22.5rem] lg:w-[30rem]
      h-[26.5rem] sm:h-[32.5rem] lg:h-[38.7rem]
      -translate-y-12 lg:-translate-y-16
    "
      >
        {/* Vertical SVG left */}
        <img
          src={imageAssets.VerticleLine_1}
          alt=""
          className="absolute top-20 left-[30%] h-full object-contain z-0"
        />

        {/* Vertical SVG right */}
        <img
          src={imageAssets.VerticleLine_2}
          alt=""
          className="absolute top-10 right-[12%] h-full object-contain z-0"
        />

        {/* Horizontal curved SVG */}
        <img
          src={imageAssets.HorizontalLine_1}
          alt=""
          className="absolute bottom-[10%] right-[-5%] w-full object-contain z-0 opacity-100"
        />

        

        <div className="absolute bottom-28 right-10 w-[80%] z-10">
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
                className="w-[95%] h-auto  rounded-lg "
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