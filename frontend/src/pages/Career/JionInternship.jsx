import AppButton from "../../components/buttons/AppButtons.jsx";
import imageAssets from "../../assets";
import React from "react";

function JoinIntership() {
  return (
    <section className="px-4 py-10 pt-24 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        {/* CARD */}
        <div className="relative overflow-hidden rounded-2xl bg-newExpertiseGradient px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20">

          {/* LEFT IMAGES */}
          <img
            src={imageAssets.careerInternshipLeftDown}
            alt=""
            className="pointer-events-none absolute bottom-0 left-0 z-0 w-32 sm:bottom-[-5%] sm:left-[1%] sm:w-36 md:bottom-[-2%] md:left-[-1%] md:w-48 lg:bottom-[-25%] lg:left-[-9%] lg:w-auto"
          />

          <img
            src={imageAssets.careerInternshipLeftUp}
            alt=""
            className="pointer-events-none absolute bottom-[1%] left-[-2%] z-0 w-24 sm:bottom-[-10%] sm:left-0 sm:w-28 md:bottom-[-15%] md:left-[-4%] md:w-40 lg:bottom-[-39%] lg:left-[-4%]    lg:w-auto"
          />

          {/* RIGHT IMAGES */}
          <img
            src={imageAssets.careerInternshipRightDown}
            alt=""
            className="pointer-events-none absolute bottom-0 right-0 z-0 w-32 sm:bottom-[-5%] sm:right-[1%] sm:w-36 md:bottom-[-2%] md:right-[-1%] md:w-48 lg:bottom-[-25%] lg:right-[-9%]    lg:w-auto"
          />

          <img
            src={imageAssets.careerInternshipRightUp}
            alt=""
            className="pointer-events-none absolute bottom-[2%] right-[-2%] z-0 w-24 sm:bottom-[-10%] sm:right-[-1%] sm:w-28 md:bottom-[-15%] md:right-[-4%] md:w-40 lg:bottom-[-39%] lg:right-[-4%]  lg:w-auto"
          />

          {/* CONTENT */}
          <div className="relative z-30 mx-auto max-w-3xl text-center">
            <h3 className="font-heading text-2xl font-5 leading-tight text-textDefaultClr sm:text-30">
              Gain real world experience with final year engineering internship
              offering hands on IoT exposure.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl font-body text-sm font-5 leading-relaxed text-textDisableClr sm:text-[14px]">
              Our program is designed to mentor the next generation of tech
              leaders. Work on live projects and learn from the best in the
              industry.
            </p>

            <div className="mt-8 flex justify-center sm:mt-9">
              <AppButton
                variant="primary"
                size="sm"
                className="rounded-full px-6 py-3 text-xs sm:px-4 sm:py-2"
              >
                Join Internship Program
              </AppButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default JoinIntership;
