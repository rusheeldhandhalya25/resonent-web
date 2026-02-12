import React, { useEffect } from "react";

const JobModle = ({ isOpen, mode, onClose, left, right }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Overlay with blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className={`
          relative z-10 w-full rounded-2xl bg-backgroundClr border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]
          ${mode === "apply" ? "max-w-6xl" : "max-w-lg"}
          animate-fadeIn
        `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-all rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Content */}
        <div className="h-full overflow-y-auto custom-scrollbar">
          <div
            className={`flex flex-col ${mode === "apply" ? "md:flex-row" : ""} min-h-full`}
          >
            {/* LEFT SIDE (Job Details) */}
            <div
              className={`
              ${mode === "apply" ? "md:w-[40%] border-b md:border-b-0 md:border-r border-white/10" : "w-full"}
              bg-newExpertiseGradient
            `}
            >
              <div className="p-6 pt-10 md:pt-6 pb-20">{left}</div>
            </div>

            {/* RIGHT SIDE (Apply Form) */}
            {mode === "apply" && (
              <div className="md:w-[60%] bg-backgroundClr border-l border-white/5">
                <div className="p-6 pb-20">{right}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModle;
