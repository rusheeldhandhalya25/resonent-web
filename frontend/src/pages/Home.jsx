import React from 'react';
import AppButton from '../components/buttons/AppButtons';
import phoneLogo from '../assets/images/phone_logo.png';

const Herosection = () => {
  return (
    <section className="bg-backgroundClr text-textDefaultClr">
      <div
        className="
          max-w-[1200px]
          mx-auto
          py-14 lg:py-16
          px-4
          grid
          grid-cols-1
          lg:grid-cols-[60%_40%]
          gap-10
          items-center
          text-center
          lg:text-left
        "
      >
        {/* LEFT SIDE */}
        <div className="lg:mt-0">
          <h1
            className="
              font-heading
              text-4xl
              md:text-5xl
              lg:text-6xl
              leading-tight
              font-5
              text-textDefaultClr
            "
          >
            We build the future of
            <br />
            connected products
          </h1>

          <p
            className="
              mt-4
              font-body
              text-12
              md:text-lg
              text-textDisableClr
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            We design smart hardware, software, and cloud systems that help
            companies build reliable connected products and bring their
            technology ideas to life easily.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <AppButton variant="primary" size="sm" rounded="full" className="px-4 py-2">
              start your project
            </AppButton>

            <AppButton variant="secondary" size="sm" rounded="full" className="px-8 py-2 bg-slate-500">
              see our work
            </AppButton>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={phoneLogo}
            alt="Connected Product"
            className="
              w-[220px]
              h-auto
              sm:w-[260px]
              lg:w-[490px]
              rounded-2xl
            "
          />
        </div>
      </div>
    </section>
  );
};

function Home() {
  return (
    <div className="bg-backgroundClr text-textDefaultClr min-h-full">
      <Herosection />
    </div>
  )
}

export default Home;