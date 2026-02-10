import React from "react";

const JobDetail = ({ job }) => {
  if (!job) return null;

  return (
    <div className="h-full text-textDisableClr">
      {/* ROLE TITLE */}
      <h2 className="font-heading text-xl md:text-2xl font-semibold text-textDefaultClr">
        {job.role}
      </h2>

      {/* META INFO */}
      <div className="mt-4 flex flex-wrap gap-2 text-[10px] sm:text-xs text-textDisableClr font-medium">
        <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">{job.time}</span>
        <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">{job.site}</span>
        <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">{job.packageAmount}</span>
        <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">{job.experience}</span>
      </div>

      {/* ABOUT ROLE */}
      <div className="mt-6">
        <h3 className="font-body text-20 font-6 text-textDefaultClr border-b border-white/10 py-3 mb-2">
          About the Role
        </h3>
        <p className="text-textDisableClr leading-relaxed text-xs sm:text-sm">
          {job.aboutRole}
        </p>
      </div>

      {/* KEY RESPONSIBILITIES */}
      <div className="mt-5">
        <h3 className="font-body text-20 font-semibold text-textDefaultClr border-b border-white/10 py-3 mb-2">
          Key Responsibilities
        </h3>
        <ul className="list-disc space-y-1.5 pl-4 text-textDisableClr text-xs sm:text-sm marker:text-primaryDefaultClr">
          {job.responsibilities?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* REQUIRED QUALIFICATIONS */}
      <div className="mt-5">
        <h3 className="font-body text-20 font-semibold text-textDefaultClr border-b border-white/10 py-4 mb-2">
          Required Qualifications
        </h3>
        <ul className="list-disc space-y-1.5 pl-4 text-textDisableClr text-xs sm:text-sm marker:text-primaryDefaultClr">
          {job.qualifications?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDetail;
