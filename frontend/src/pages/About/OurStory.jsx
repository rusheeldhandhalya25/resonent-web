import TimelineItem from "../../components/TimelineItem";
import imageAssets from "../../assets/index.js";

const OurStory = () => {
  return (
    <section
      className="
        relative
        mx-4 sm:mx-8 lg:mx-20
        mt-12 sm:mt-16
        rounded-3xl
        overflow-hidden
      "
      style={{
        backgroundColor: "#002556",
        backgroundImage: `
          linear-gradient(
            240.05deg,
            rgba(4,47,105,0.35) 0%,
            rgba(53,144,242,0.35) 50%,
            rgba(4,47,105,0.35) 100%
          )
        `,
      }}
    >
      {/* MOUNTAIN SVG */}
      <img
        src={imageAssets.hill}
        alt=""
        className="
          absolute
          bottom-0
          left-0
          w-[320px]
          sm:w-[420px]
          lg:w-[520px]
          opacity-40
          lg:opacity-100
          pointer-events-none
        "
      />

      <div
        className="
          relative z-10
          max-w-[1200px]
          mx-auto
          px-5 sm:px-8
          py-12 sm:py-14 lg:py-16
          grid
          grid-cols-1
          lg:grid-cols-[35%_65%]
          gap-12 lg:gap-20
        "
      >
        {/* LEFT SIDE */}
        <div className="flex justify-center lg:justify-start">
          <h2
            className="
              font-heading
              font-6
              text-textDefaultClr
              text-3xl
              sm:text-4xl
              lg:text-40
              text-center
              lg:text-left
            "
          >
            Our Story
          </h2>
        </div>

        {/* RIGHT SIDE TIMELINE */}
        <div
          className="
            flex flex-col
            gap-10 sm:gap-12 lg:gap-14
            text-left
            max-w-full
            lg:max-w-[550px]
            mx-auto
            lg:mx-0
          "
        >
          <TimelineItem
            year="2018"
            title="Founded"
            description="Company started with a vision to simplify IoT innovation."
          />

          <TimelineItem
            year="2020"
            title="Expansion"
            description="Expanded into embedded systems and cloud platforms."
          />

          <TimelineItem
            year="2022"
            title="Global Reach"
            description="Delivered solutions across multiple industries worldwide."
          />

          <TimelineItem
            year="2024"
            title="Innovation"
            description="Leading intelligent and sustainable IoT solutions."
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
