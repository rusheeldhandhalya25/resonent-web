import OurPositionCard from "../../components/cards/OurPositionCard";

const positions = [
  {
    role: "Embedded Engineer",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "13LPA - 18LPA",
    experience: "2+ Years Experience",
  },
  {
    role: "Hardware Design",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "13LPA - 18LPA",
    experience: "2+ Years Experience",
  },
  {
    role: "FPGA Developer",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "13LPA - 18LPA",
    experience: "2+ Years Experience",
  },
  {
    role: "Cloud Developer",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "13LPA - 18LPA",
    experience: "2+ Years Experience",
  },
  {
    role: "Flutter Developer",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "13LPA - 18LPA",
    experience: "2+ Years Experience",
  },
  {
    role: "QA",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "13LPA - 18LPA",
    experience: "2+ Years Experience",
  },
  {
    role: "Production",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "13LPA - 18LPA",
    experience: "2+ Years Experience",
  },
  {
    role: "Sales",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "13LPA - 18LPA",
    experience: "2+ Years Experience",
  },
];

const OpenPositions = () => {
  return (
    <section className="bg-backgroundClr px-4 py-5">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center font-6 text-40  font-heading text-textDefaultClr">
          Open Positions
        </h2>

        <div className="grid gap-5 md:gap-3 md:grid-cols-2">
          {positions.map((item, index) => (
            <OurPositionCard
              key={index}
              role={item.role}
              time={item.time}
              site={item.site}
              packageAmount={item.packageAmount}
              experience={item.experience}
              onApply={() => console.log(`Apply ${item.role}`)}
              onViewDetails={() =>
                console.log(`View details ${item.role}`)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
