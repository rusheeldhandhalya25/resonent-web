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
          lg:py-20
          grid
          grid-cols-1
          lg:grid-cols-[60%_40%]
          gap-10
          items-center
          text-center
          lg:text-left
        "
      >
        {/* TEXT */}
        <div>
          <h1 className="font-heading font-5 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            We build the future of
            <br />
            connected products
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
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-[240px] sm:w-[300px] lg:w-[400px] p-3 bg-cardClr border border-lightOutlineClr rounded-[32px]">
            <img src={imageAssets.Homefirst} alt="Connected Product" className="w-full " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;