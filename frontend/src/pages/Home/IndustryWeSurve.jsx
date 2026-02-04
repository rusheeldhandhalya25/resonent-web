import React from 'react'
import imageAssets from '../../assets';

import {Swiper , SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const industries = [
    {
        title:"Manufacturing",
        image:imageAssets.Manufacturing,
    },

    {
        title:"Retail",
        image:imageAssets.Retail,
    },

    {
        title:"Healthcare",
        image:imageAssets.Healthcare,
    },

     {
        title:"Manufacturing",
        image:imageAssets.Manufacturing,
    },

    {
        title:"Retail",
        image:imageAssets.Retail,
    },

    {
        title:"Healthcare",
        image:imageAssets.Healthcare,
    },
];

const IndustryWeSurve = () => {
    return (
        <section className='w-full bg-backgroundClr px-4 sm:px-6 lg:px-24 py-16'>
            <div className='grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-stretch'>
            

            {/* left card */}

            <div className='rounded-2xl bg-cardClr p-6 flex flex-col justify-center'>
                <h3 className='font-heading font-6 text-24 sm:text-32 lg:text-40 text-textDefaultClr mb-3'>
                    Industries We Serve
                </h3>

                <p className='text-sm text-textDisableClr leading-relaxed'>
                     We provide smart technology solutions to many industries for better
                     safety, efficiency, and reliability.
                </p>
            </div>


            {/* right side slider  */}

        <Swiper modules={[Autoplay]}
                autoplay={{delay:2500 , disableOnInteraction: true , pauseOnMouseEnter: true}}
                loop
                spaceBetween={16}
                breakpoints={{
                    0: { slidesPerView : 1.2},
                    640: { slidesPerView : 2},
                    1024: { slidesPerView : 3},
                }}
                className="w-full">

                    {/* mapping indusrties  */}
             
             {industries.map((item,i) => (
                <SwiperSlide key={i}>
                    <div className='group relative h-[220px] sm:h-[260px] lg:[300px] rounded-2xl overflow-hidden'>
                        <img src={item.image} 
                            alt={item.title}
                            className='w-full
                                       h-full
                                       object-cover
                                       transition-transform
                                       duration-500
                                       group-hover:scale-110' />
                   

                    <div className='absolute inset-0 bg-black/30 '></div>
                        <span className='absolute bottom-4 left-4 text-textDefaultClr font-6 text-24'>
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

export default IndustryWeSurve;