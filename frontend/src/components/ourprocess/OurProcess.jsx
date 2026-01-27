import LineSvg from "../../assets/process/process_line.svg";
import Step01 from "../../assets/process/step_1.svg";
import Step02 from "../../assets/process/step_2.svg";
import Step03 from "../../assets/process/step_3.svg";
import Step04 from "../../assets/process/step_4.svg";
import Step05 from "../../assets/process/step_5.svg";
import Step06 from "../../assets/process/step_6.svg";
import Step07 from "../../assets/process/step_7.svg";

const steps = [
  { icon: Step01, label: "Concept", left: 10, top: 80 },
  { icon: Step02, label: "Documentation", left: 25, top: 50 },
  { icon: Step03, label: "Prototype", left: 38, top: 65 },
  { icon: Step04, label: "Certification", left: 50, top: 100 },
  { icon: Step05, label: "Production", left: 63, top: 35 },
  { icon: Step06, label: "Quality Check", left: 76, top: 25 },
  { icon: Step07, label: "Delivery", left: 90, top: 100 },
];

const ProcessStep = ({ icon, label, left, top }) => {
  return (
    <div
      className="absolute text-center -translate-x-1/2 -translate-y-1/2 "
      style={{ left: `${left}%`, top: `${top}%` }}
    >
      <img src={icon} alt={label} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto" />
      <p className="mt-3 text-white text-xs md:text-sm font-body">
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
        <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-white">
          Our Process
        </h2>
        <p className="mt-4 text-textDisableClr max-w-2xl mx-auto text-base lg:text-lg">
          We follow clear, simple, and organized steps that guide your project
          from idea to final product with smooth, reliable progress.
        </p>
      </div>

      {/* Timeline for Desktop */}
      <div className="hidden md:block relative max-w-7xl mx-auto px-4">
        <div className="relative">
           {/* Aspect ratio container for the SVG line. Padding-top is based on SVG's aspect ratio (169 / 1920) */}
          <div style={{ paddingTop: '8.8%' }} />
          <img
            src={LineSvg}
            alt="process line"
            className="absolute top-0 left-0 w-full h-full"
          />
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>

      {/* Timeline for Mobile */}
      <div className="md:hidden px-4">
        <div className="flex flex-col items-center space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-cardClr rounded-xl p-4 w-full max-w-sm">
              <div className="flex items-center gap-4">
                <img src={step.icon} alt={step.label} className="w-16 h-16" />
                <div>
                  <p className="text-textDisableClr text-xs">STEP {index + 1}</p>
                  <p className="text-white text-sm font-body font-semibold">{step.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
