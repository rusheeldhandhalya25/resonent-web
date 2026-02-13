import imageAssets from "../../assets";

const steps = [
  { icon: imageAssets.step01, label: "Concept", left: 10, top: 80 },
  { icon: imageAssets.step02, label: "Documentation", left: 25, top: 50 },
  { icon: imageAssets.step03, label: "Prototype", left: 38, top: 65 },
  { icon: imageAssets.step04, label: "Certification", left: 50, top: 100 },
  { icon: imageAssets.step05, label: "Production", left: 63, top: 35 },
  { icon: imageAssets.step06, label: "Quality Check", left: 76, top: 25 },
  { icon: imageAssets.step07, label: "Delivery", left: 90, top: 100 },
];

const ProcessStep = ({ icon, label, left, top }) => {
  return (
    <div
      className="absolute text-center -translate-x-1/2 -translate-y-1/2 "
      style={{ left: `${left}%`, top: `${top}%` }}
    >
      <img src={icon} alt={label} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto" />
      <p className="mt-5 text-textDefaultClr  text-24 font-body">
        {label}
      </p>
    </div>
  );
};

const OurProcess = () => {
  return (
    <section className="bg-backgroundClr py-20 lg:py-32">
      {/* Heading */}
      <div className="text-center mb-16 lg:mb-24 px-4">
        <h2 className="font-heading text-40 lg:text-60 font-6 text-textDefaultClr">
          Our Process
        </h2>
        <p className="mt-4 text-textDisableClr max-w-2xl mx-auto text-19 lg:text-19">
          We follow clear, simple, and organized steps that guide your project
          from idea to final product with smooth, reliable progress.
        </p>
      </div>

      {/* Timeline for Desktop */}
      <div className="hidden md:block relative max-w-[95rem] mx-auto px-4">
        <div className="relative">
           {/* Aspect ratio container for the SVG line. Padding-top is based on SVG's aspect ratio (169 / 1920) */}
          <div style={{ paddingTop: '8.8%' }} />
          <img
            src={imageAssets.lineSvg}
            alt="process line"
            className="absolute top-0 left-0 w-[140%] h-[110%]"
          />
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>

     
      {/* Timeline for Mobile */}
              <div className="md:hidden px-4">
                <div className="relative max-w-md mx-10">

                  {/* vertical line */}
                  <div className="
                    absolute
                    left-[2rem]
                    top-0
                    bottom-0
                    w-[5px]
                    bg-primaryDefaultClr
                    opacity-60
                    flex items-center justify-center
                  " />

                  <div className="flex flex-col gap-[3.5rem] ">
                    {steps.map((step, index) => (
                      <div key={index} className="relative flex items-start gap-7">

                        {/* circle with number */}
                        <div className="relative z-10">
                          <div className="
                            w-14 h-14
                            rounded-full
                            bg-gradient-to-br
                            from-[#6EC1FF]
                            to-[#2F80ED]
                            flex
                            items-center
                            justify-center
                            shadow-[0_0_0_10px_rgba(47,128,237,0.25)]
                          ">
                            <span className="
                              text-[#0B2B4F]
                              font-heading
                              font-7
                              text-lg
                            ">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>

                        {/* label */}
                        <div className="pt-3">
                          <p className="text-white font-heading font-6 text-30">
                            {step.label}
                          </p>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              </div>

    </section>
  );
};

export default OurProcess;
