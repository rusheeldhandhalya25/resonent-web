import React from "react";
import { useFormik } from "formik";
import AppButton from "../../components/buttons/AppButtons.jsx";
import imageAssets from "../../assets/index.js";

const ProjectForm = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      projectType: "IoT Project",
      applicationArea: "",
      volume: "",
      budget: "",
      details: "",
      document: null,
    },
    validate: (values) => {
      const errors = {};
      if (!values.fullName) errors.fullName = "Full Name is required";
      if (!values.companyName) errors.companyName = "Company Name is required";
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.phone) {
        errors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = "Phone number must be 10 digits";
      }
      if (!values.projectType) errors.projectType = "Project Type is required";
      if (!values.applicationArea) errors.applicationArea = "Application Area is required";
      if (!values.volume) errors.volume = "Volume is required";
      if (!values.budget) errors.budget = "Budget is required";
      if (!values.details) errors.details = "Project details are required";
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        if (onClose) onClose();
        alert("Project Inquiry Submitted!");
      }, 1000);
    },
  });

  const labelClass = "text-sm font-medium text-textDefaultClr mb-1";
  const inputClass = "w-full rounded-lg bg-cardClr px-4 py-3 text-sm text-textDisableClr outline-none focus:border-primaryDefaultClr border border-transparent transition-colors placeholder:text-textDisableClr/50";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 animate-fadeIn">
      
      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label className={labelClass}>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            className={inputClass}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className={errorClass}>{formik.errors.fullName}</div>
          )}
        </div>

        <div className="flex flex-col">
          <label className={labelClass}>Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter company name"
            onChange={formik.handleChange}
            value={formik.values.companyName}
            className={inputClass}
          />
          {formik.touched.companyName && formik.errors.companyName && (
            <div className={errorClass}>{formik.errors.companyName}</div>
          )}
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label className={labelClass}>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={inputClass}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={errorClass}>{formik.errors.email}</div>
          )}
        </div>

        <div className="flex flex-col">
          <label className={labelClass}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className={inputClass}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className={errorClass}>{formik.errors.phone}</div>
          )}
        </div>
      </div>

      {/* Row 3: Project Type */}
      <div className="flex flex-col">
        <label className={labelClass}>Project Type</label>
        <select
          name="projectType"
          onChange={formik.handleChange}
          value={formik.values.projectType}
          className={inputClass}
        >
          <option value="IoT Project" className="bg-cardClr">IoT Project</option>
          <option value="Web Development" className="bg-cardClr">Web Development</option>
          <option value="Mobile App" className="bg-cardClr">Mobile App</option>
          <option value="Embedded System" className="bg-cardClr">Embedded System</option>
        </select>
        {formik.touched.projectType && formik.errors.projectType && (
          <div className={errorClass}>{formik.errors.projectType}</div>
        )}
      </div>

      {/* Row 4: Application Area & Volume */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label className={labelClass}>Application Area</label>
          <select
            name="applicationArea"
            onChange={formik.handleChange}
            value={formik.values.applicationArea}
            className={inputClass}
          >
            <option value="" disabled className="bg-cardClr">Select Area</option>
            <option value="Industrial" className="bg-cardClr">Industrial</option>
            <option value="Consumer" className="bg-cardClr">Consumer</option>
            <option value="Medical" className="bg-cardClr">Medical</option>
            <option value="Automotive" className="bg-cardClr">Automotive</option>
          </select>
          {formik.touched.applicationArea && formik.errors.applicationArea && (
            <div className={errorClass}>{formik.errors.applicationArea}</div>
          )}
        </div>

        <div className="flex flex-col">
          <label className={labelClass}>Volume</label>
          <select
            name="volume"
            onChange={formik.handleChange}
            value={formik.values.volume}
            className={inputClass}
          >
            <option value="" disabled className="bg-cardClr">Select Volume</option>
            <option value="High" className="bg-cardClr">High</option>
            <option value="Low" className="bg-cardClr">Low</option>
          </select>
          {formik.touched.volume && formik.errors.volume && (
            <div className={errorClass}>{formik.errors.volume}</div>
          )}
        </div>
      </div>

      {/* Row 5: Budget */}
      <div className="flex flex-col">
        <label className={labelClass}>Budget</label>
        <input
          type="text"
          name="budget"
          placeholder="Enter estimated budget"
          onChange={formik.handleChange}
          value={formik.values.budget}
          className={inputClass}
        />
        {formik.touched.budget && formik.errors.budget && (
          <div className={errorClass}>{formik.errors.budget}</div>
        )}
      </div>

      {/* Row 6: Description */}
      <div className="flex flex-col">
        <label className={labelClass}>Description</label>
        <textarea
          name="details"
          rows="4"
          placeholder="Describe your project requirements..."
          onChange={formik.handleChange}
          value={formik.values.details}
          className={`${inputClass} resize-none`}
        ></textarea>
        {formik.touched.details && formik.errors.details && (
          <div className={errorClass}>{formik.errors.details}</div>
        )}
      </div>

      {/* Row 7: Document Upload */}
      <div className="flex flex-col">
        <label className={labelClass}>Document</label>
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-lightOutlineClr bg-cardClr px-6 py-8 text-center hover:bg-cardClr/80 transition-colors">
          <input
            type="file"
            className="hidden"
            onChange={(e) => formik.setFieldValue("document", e.target.files[0])}
          />
          <img
            src={imageAssets.uploadIcon}
            alt="Upload"
            className="mb-2 w-8 h-8 opacity-60"
          />
          <p className="text-sm text-textDefaultClr underline underline-offset-2">
            Upload File
          </p>
          <p className="text-xs text-textDisableClr mt-1">
           Upload a file of the project requirements
          </p>
        </label>
        {formik.touched.document && formik.errors.document && (
          <div className={errorClass}>{formik.errors.document}</div>
        )}
      </div>

      {/* Row 8: Submit Button */}
      <div className="flex justify-center mt-4">
        <AppButton
          type="submit"
          variant="primary"
          size="lg"
          rounded="full"
          className="px-12 shadow-lg shadow-primaryDefaultClr/20"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Sending..." : "Send Inquiry"}
        </AppButton>
      </div>
    </form>
  );
};

export default ProjectForm;