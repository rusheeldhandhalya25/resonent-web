import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ContactLeft from "./ContactLeft";
import ProjectForm from "./ProjectForm";
import PartnerForm from "./PartnerForm";

const ContactPopup = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("project"); // 'project' | 'partner'

  // Disable body scroll when modal is open
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

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-backgroundClr rounded-3xl w-full max-w-5xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh] shadow-2xl animate-fadeIn z-10">
        {/* Close Button - Positioned absolutely on the right side */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white shadow-md hover:bg-primaryDefaultClr hover:text-white rounded-full transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Left Side (Info & Map) */}
        <ContactLeft />

        {/* Right Side (Forms) */}
        <div className="w-full lg:w-[60%] p-6 sm:p-8 lg:p-10 overflow-y-auto bg-backgroundClr flex-1 custom-scrollbar">
          {/* Tabs */}
          <div className="flex p-1.5 bg-tagClr/60 rounded-full mb-8">
            <button
              onClick={() => setActiveTab("project")}
              className={`flex-1 py-3 text-sm font-6 rounded-full transition-all duration-300 ${
                activeTab === "project"
                  ? "bg-primaryDefaultClr text-white shadow-md"
                  : "text-textDisableClr hover:text-textDefaultClr"
              }`}
            >
              Project Inquiry
            </button>
            <button
              onClick={() => setActiveTab("partner")}
              className={`flex-1 py-3 text-sm font-6 rounded-full transition-all duration-300 ${
                activeTab === "partner"
                  ? "bg-primaryDefaultClr text-white shadow-md"
                  : "text-textDisableClr hover:text-textDefaultClr"
              }`}
            >
              Partner Inquiry
            </button>
          </div>

          {/* Render Form based on Tab */}
          {activeTab === "project" ? (
            <ProjectForm onClose={onClose} />
          ) : (
            <PartnerForm onClose={onClose} />
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ContactPopup;
