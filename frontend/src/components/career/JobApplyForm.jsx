import React from "react";
import { useFormik } from "formik";
import AppButton from "../buttons/AppButtons";
import imageAssets from "../../assets";

const JobApplyForm = ({ job }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      joining: "",
      currentCTC: "",
      expectedCTC: "",
      coverLetter: "",
      resume: null,
    },

    validate: (values) => {
      const errors = {};
      if (!values.fullName) errors.fullName = "Required";
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.phone) errors.phone = "Required";
      if (!values.joining) errors.joining = "Required";
      if (!values.currentCTC) errors.currentCTC = "Required";
      if (!values.expectedCTC) errors.expectedCTC = "Required";
      if (!values.resume) errors.resume = "Required";
      return errors;
    },

    onSubmit: (values) => {
      const payload = new FormData();
      // Append all values
      Object.keys(values).forEach(key => payload.append(key, values[key]));
      // Job info auto attach
      if(job) {
        payload.append("jobRole", job.role);
        payload.append("jobType", job.time);
      }

      console.log("FORM SUBMIT READY");
      for (let pair of payload.entries()) {
        console.log(pair[0], pair[1]);
      }
    },
  });

  const inputClass = "w-full rounded-md bg-tagClr/50 px-3 py-2.5 text-xs sm:text-sm text-textDefaultClr outline-none border border-white/10 focus:border-primaryDefaultClr transition-colors placeholder:text-textDisableClr/50";
  const labelClass = "text-xs text-textDefaultClr mb-1 block font-4 mt-2";
  const errorClass = "text-[10px] text-red-400 mt-0.5 ml-1";

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      {/* Full Name */}
      <div>
        <label className={labelClass}>Full Name</label>
        <input
          name="fullName"
          placeholder="Enter Full Name"
          onChange={formik.handleChange}
          className={inputClass}
        />
        {formik.errors.fullName && <p className={errorClass}>{formik.errors.fullName}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label className={labelClass}>Email</label>
          <input
            name="email"
            placeholder="Enter Email"
            onChange={formik.handleChange}
            className={inputClass}
          />
          {formik.errors.email && <p className={errorClass}>{formik.errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            name="phone"
            placeholder="Enter Phone Number"
            onChange={formik.handleChange}
            className={inputClass}
          />
          {formik.errors.phone && <p className={errorClass}>{formik.errors.phone}</p>}
        </div>

        {/* Experience */}
        <div>
          <label className={labelClass}>Experience (Years)</label>
          <input
            name="experience"
            placeholder="Experience"
            onChange={formik.handleChange}
            className={inputClass}
          />
        </div>

        {/* Joining */}
        <div>
          <label className={labelClass}>Joining </label>
          <select
            name="joining"
            onChange={formik.handleChange}
            className={inputClass}
          >
            <option value="" className="bg-backgroundClr">Select </option>
            <option value="7" className="bg-backgroundClr">7 Days</option>
            <option value="15" className="bg-backgroundClr">15 Days</option>
            <option value="30" className="bg-backgroundClr">30 Days</option>
            <option value="45" className="bg-backgroundClr">45 Days</option>
          </select>
          {formik.errors.joining && <p className={errorClass}>{formik.errors.joining}</p>}
        </div>

        {/* Current CTC */}
        <div>
          <label className={labelClass}>Current CTC</label>
          <input
            name="currentCTC"
            type="number"
            placeholder="Current CTC"
            onChange={formik.handleChange}
            className={inputClass}
          />
          {formik.errors.currentCTC && <p className={errorClass}>{formik.errors.currentCTC}</p>}
        </div>

        {/* Expected CTC */}
        <div>
          <label className={labelClass}>Expected CTC</label>
          <input
            name="expectedCTC"
            type="number"
            placeholder="Expected CTC"
            onChange={formik.handleChange}
            className={inputClass}
          />
          {formik.errors.expectedCTC && <p className={errorClass}>{formik.errors.expectedCTC}</p>}
        </div>
      </div>

      {/* Cover Letter */}
      <div>
        <label className={labelClass}>Short Cover Letter</label>
        <textarea
          name="coverLetter"
          placeholder="Write a short cover letter..."
          onChange={formik.handleChange}
          rows={3}
          className={inputClass}
        />
      </div>

      {/* Resume Upload */}
      <div>
        <label className={labelClass}>Resume</label>
        <label className="mt-1 flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-white/20 bg-tagClr/50 px-4 py-4 text-center hover:bg-white/5 transition-colors group">
          <input
            type="file"
            className="hidden"
            onChange={(e) =>
              formik.setFieldValue("resume", e.currentTarget.files[0])
            }
          />
          
          <img 
            src={imageAssets.uploadIcon} 
            alt="Upload" 
            className="w-6 h-6 mb-2 opacity-70 group-hover:opacity-100 transition-opacity" 
          />
          
          <p className="text-xs text-textDefaultClr underline underline-offset-2">
            Upload Resume
          </p>
          <p className="text-[10px] text-textDisableClr mt-1">
            Supported formats: PDF, DOCX (Max 5MB)
          </p>
          
          {formik.values.resume && (
            <div className="mt-2 px-2 py-1 bg-primaryDefaultClr/20 text-primaryDefaultClr rounded text-[10px] font-medium">
              {formik.values.resume.name}
            </div>
          )}
        </label>
        {formik.errors.resume && <p className={errorClass}>{formik.errors.resume}</p>}
      </div>

      {/* Submit */}
      <div className="flex justify-center pt-2">
        <AppButton
          type="submit"
          variant="primary"
          rounded="full"
          className="px-6 py-2 text-xs sm:text-sm flex items-center justify-center"
        >
          Submit Application
        </AppButton>
      </div>
    </form>
  );
};

export default JobApplyForm;
