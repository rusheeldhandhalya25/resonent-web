import React from "react";
import { useFormik } from "formik";
import AppButton from "../../components/buttons/AppButtons.jsx";
import imageAssets from "../../assets/index.js";

const ApplyNowForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      role: "",
      experience: "",
      resume: null,
    },

    validate: (values) => {
      const errors = {};

      if (!values.name) errors.name = "Name is required";
      if (!values.email) errors.email = "Email is required";
      if (!values.role) errors.role = "Role is required";
      if (!values.experience) errors.experience = "Experience is required";
      if (!values.resume) errors.resume = "Resume is required";

      return errors;
    },

    onSubmit: () => {
      // Handle form submission
    },
  });

  return (
    <section className="flex justify-center px-4 py-9">
      <div className="w-full max-w-3xl rounded-2xl bg-newExpertiseGradient p-10">
        <h2 className="mb-8 text-center font-heading text-40 font-6 text-textDefaultClr">
          Apply Now
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* GRID INPUTS */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
              <label className="text-sm text-textDefaultClr">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="mt-2 w-full rounded-lg bg-tagClr px-4 py-3 text-sm text-textDefaultClr outline-none"
              />
              {formik.errors.name && (
                <p className="mt-1 text-xs text-red-400">
                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-textDefaultClr">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="mt-2 w-full rounded-lg bg-tagClr px-4 py-3 text-sm text-textDefaultClr outline-none"
              />
              {formik.errors.email && (
                <p className="mt-1 text-xs text-red-400">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="text-sm text-textDefaultClr">Role</label>
              <input
                type="text"
                name="role"
                placeholder="Enter Role"
                onChange={formik.handleChange}
                value={formik.values.role}
                className="mt-2 w-full rounded-lg bg-tagClr px-4 py-3 text-sm text-textDefaultClr outline-none"
              />
              {formik.errors.role && (
                <p className="mt-1 text-xs text-red-400">
                  {formik.errors.role}
                </p>
              )}
            </div>

            {/* Experience */}
            <div>
              <label className="text-sm text-textDefaultClr">Experience</label>
              <input
                type="text"
                name="experience"
                placeholder="Enter Your Experience"
                onChange={formik.handleChange}
                value={formik.values.experience}
                className="mt-2 w-full rounded-lg bg-tagClr px-4 py-3 text-sm text-textDefaultClr outline-none"
              />
              {formik.errors.experience && (
                <p className="mt-1 text-xs text-red-400">
                  {formik.errors.experience}
                </p>
              )}
            </div>
          </div>

          {/* RESUME UPLOAD */}
          <div>
            <label className="text-sm text-textDefaultClr ">Resume</label>

            <label className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-lightOutlineClr bg-tagClr px-6 py-8 text-center">
              <input
                type="file"
                className="hidden"
                onChange={(e) =>
                  formik.setFieldValue("resume", e.target.files[0])
                }
              />

              <img
                src={imageAssets.uploadIcon}
                alt=""
                className="mb-2 w-[32px] h-[32px]"
              />

              <p className="text-[16px] text-textDefaultClr underline underline-offset-3">
                Upload Resume
              </p>
              <p className="text-xs text-textDisableClr">
                Upload a file up to 5MB
              </p>
            </label>

            {formik.errors.resume && (
              <p className="mt-1 text-xs text-red-400">
                {formik.errors.resume}
              </p>
            )}
          </div>

          {/* SUBMIT */}
          <div className="flex justify-center pt-4">
            <AppButton
              type="submit"
              variant="primary"
              size="sm"
              className="rounded-full px-8 py-3 text-xs"
            >
              Submit
            </AppButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplyNowForm;
