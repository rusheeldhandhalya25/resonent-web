import React, { useState } from "react";
import FirstParagraph from "./Career/FirstParagraph.jsx";
import JoinUs from "./Career/Joinus.jsx";
import OurCulture from "./Career/OurCulture.jsx";
import OpenPositions from "./Career/OpenPosition.jsx";
import JoinIntership from "./Career/JionInternship.jsx";
import JobModal from "./Career/JobModel.jsx";
import ApplyNowForm from "./Career/ApplyNowForm.jsx";
import JobDetail from "../components/career/JobDetail.jsx";
import JobApplyForm from "../components/career/JobApplyForm.jsx";

function Career() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(null); // "apply" | "view"
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (job) => {
    setSelectedJob(job);
    setMode("apply");
    setOpen(true);
  };

  const handleView = (job) => {
    setSelectedJob(job);
    setMode("view");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMode(null);
    setSelectedJob(null);
  };

  return (
    <div className="bg-backgroundClr">
      <FirstParagraph />
      <JoinUs />
      <OurCulture />

      <OpenPositions
        onApply={handleApply}
        onView={handleView}
      />

      <JoinIntership />

      <JobModal
        isOpen={open}
        mode={mode}
        onClose={handleClose}
        left={<JobDetail job={selectedJob} />}
        right={<JobApplyForm job={selectedJob} />}
      />

      <ApplyNowForm />
    </div>
  );
}

export default Career;
