import React, { useState } from "react";
import OurPositionCard from "../../components/cards/OurPositionCard";
import JobModal from "./JobModel";
import JobDetail from "../../components/career/JobDetail";
import JobApplyForm from "../../components/career/JobApplyForm";

const positions = [
  {
    role: "Embedded Engineer",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "3LPA - 5LPA",
    experience: "2+ Years Experience",

    aboutRole:
      "As an Embedded Engineer, you will design, develop, and optimize embedded firmware and systems for real-world hardware applications.",

    responsibilities: [
      "Develop and maintain embedded firmware",
      "Work with microcontrollers and embedded processors",
      "Debug hardware and software issues",
      "Collaborate with hardware and QA teams",
    ],

    qualifications: [
      "Strong knowledge of C/C++",
      "Experience with microcontrollers",
      "Understanding of embedded systems",
    ],
  },

  {
    role: "Hardware Design",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "3LPA - 5LPA",
    experience: "2+ Years Experience",

    aboutRole:
      "The Hardware Design Engineer will be responsible for designing and testing electronic circuits and PCB layouts.",

    responsibilities: [
      "Design schematic diagrams and PCB layouts",
      "Test and validate hardware circuits",
      "Work closely with firmware engineers",
      "Troubleshoot hardware-level issues",
    ],

    qualifications: [
      "Experience in PCB design tools",
      "Knowledge of electronic components",
      "Ability to debug circuits",
    ],
  },

  {
    role: "FPGA Developer",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "3LPA - 5LPA",
    experience: "2+ Years Experience",

    aboutRole:
      "FPGA Developer will design and implement digital logic solutions using FPGA technologies.",

    responsibilities: [
      "Develop FPGA-based digital logic",
      "Write and test HDL code",
      "Optimize performance and resource usage",
      "Collaborate with hardware teams",
    ],

    qualifications: [
      "Experience with Verilog/VHDL",
      "Understanding of digital electronics",
      "FPGA debugging skills",
    ],
  },

  {
    role: "Cloud Developer",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "3LPA - 5LPA",
    experience: "2+ Years Experience",

    aboutRole:
      "The Cloud Developer will design, deploy, and maintain scalable cloud-based solutions.",

    responsibilities: [
      "Deploy applications on cloud platforms",
      "Manage cloud infrastructure",
      "Ensure security and scalability",
      "Monitor system performance",
    ],

    qualifications: [
      "Knowledge of cloud platforms (AWS/Azure/GCP)",
      "Understanding of DevOps practices",
      "Linux and networking basics",
    ],
  },

  {
    role: "Flutter Developer",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "3LPA - 5LPA",
    experience: "2+ Years Experience",

    aboutRole:
      "Flutter Developer will build and maintain cross-platform mobile applications with high performance and clean UI.",

    responsibilities: [
      "Develop Flutter applications",
      "Integrate REST APIs",
      "Ensure UI/UX consistency",
      "Fix bugs and improve performance",
    ],

    qualifications: [
      "Strong Flutter & Dart knowledge",
      "Experience with REST APIs",
      "Understanding of mobile UI principles",
    ],
  },

  {
    role: "QA",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "3LPA - 5LPA",
    experience: "2+ Years Experience",

    aboutRole:
      "QA Engineer will ensure software quality through systematic testing and validation processes.",

    responsibilities: [
      "Write and execute test cases",
      "Perform manual testing",
      "Identify and report bugs",
      "Collaborate with development teams",
    ],

    qualifications: [
      "Understanding of testing methodologies",
      "Attention to detail",
      "Basic knowledge of software development",
    ],
  },

  {
    role: "Production",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "3LPA - 5LPA",
    experience: "2+ Years Experience",

    aboutRole:
      "Production Engineer will oversee manufacturing processes and ensure efficient production operations.",

    responsibilities: [
      "Monitor production workflows",
      "Ensure quality standards",
      "Coordinate with engineering teams",
      "Optimize production efficiency",
    ],

    qualifications: [
      "Knowledge of manufacturing processes",
      "Problem-solving skills",
      "Ability to work on the production floor",
    ],
  },

  {
    role: "Sales",
    time: "Full-Time",
    site: "On-site",
    packageAmount: "3LPA - 5LPA",
    experience: "2+ Years Experience",

    aboutRole:
      "Sales Executive will manage client relationships and drive business growth.",

    responsibilities: [
      "Identify and approach potential clients",
      "Present company products and services",
      "Negotiate deals and close sales",
      "Maintain customer relationships",
    ],

    qualifications: [
      "Strong communication skills",
      "Sales and negotiation abilities",
      "Basic understanding of business processes",
    ],
  },
];


const OpenPositions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("view"); // 'view' or 'apply'
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (job) => {
    setSelectedJob(job);
    setModalMode("apply");
    setIsModalOpen(true);
  };

  const handleView = (job) => {
    setSelectedJob(job);
    setModalMode("view");
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <section className="bg-backgroundClr px-4 py-5">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-textDefaultClr text-center text-40 font-semibold">
          Open Positions
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {positions.map((item, index) => (
            <OurPositionCard
              key={index}
              role={item.role}
              time={item.time}
              site={item.site}
              packageAmount={item.packageAmount}
              experience={item.experience}
              onApply={() => handleApply(item)}
              onViewDetails={() => handleView(item)}
            />
          ))}
        </div>
      </div>

      {/* Modal Integration */}
      <JobModal
        isOpen={isModalOpen}
        mode={modalMode}
        onClose={handleClose}
        left={<JobDetail job={selectedJob} />}
        right={<JobApplyForm job={selectedJob} />}
      />
    </section>
  );
};

export default OpenPositions;
