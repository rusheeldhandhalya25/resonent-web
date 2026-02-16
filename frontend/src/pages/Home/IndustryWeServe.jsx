import React from "react";
import imageAssets from "../../assets";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const industries = [
  {
    title: "Oil and Gas",
    image: imageAssets.oilAndGas,
  },

  {
    title: "Water Treatment",
    image: imageAssets.waterTreatment,
  },

  {
    title: "Agriculture",
    image: imageAssets.agriculture,
  },

  {
    title: "Entertainment",
    image: imageAssets.entertainment,
  },

  {
    title: "Civil Construction",
    image: imageAssets.civilConstruction,
  },

  {
    title: "Food Processing",
    image: imageAssets.foodProcessing,
  },
];

const IndustryWeServe = () => {
  return (
    <section className="w-full bg-backgroundClr pl-4 sm:pl-6 lg:pl-24 pr-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[25rem_1fr] gap-6 items-stretch">
        {/* left card */}

        <div className="rounded-2xl bg-cardClr h-[28.125rem] p-6 flex flex-col ">
          <h3 className="font-heading font-6 text-40 lg:text-60 text-textDefaultClr mt-3 mb-5 leading-loose">
            Industries We Serve
          </h3>

          <p className="text-22 text-textDisableClr leading-relaxed">
            We provide smart technology solutions to many industries for better
            safety, efficiency, and reliability.
          </p>
        </div>

        {/* right side slider  */}

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          loop
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {/* mapping indusrties  */}

          {industries.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="group relative h-[28.125rem] rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30 "></div>
                <span className="absolute bottom-4 left-4 text-textDefaultClr font-6 text-24">
                  {item.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default IndustryWeServe;
