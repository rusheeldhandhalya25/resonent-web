import React from "react";
import { useFormik } from "formik";
import AppButton from "../../components/buttons/AppButtons.jsx";

const PartnerForm = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      companyName: "",
      phone: "",
      industry: "",
      region: "",
      productInterest: "",
      message: "",
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
      if (!values.industry) errors.industry = "Industry is required";
      if (!values.region) errors.region = "Region is required";
      if (!values.productInterest) errors.productInterest = "Product Interest is required";
      if (!values.message) errors.message = "Message is required";
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        if (onClose) onClose();
        alert("Partner Inquiry Submitted!");
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
            placeholder="Enter phone number"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className={inputClass}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className={errorClass}>{formik.errors.phone}</div>
          )}
        </div>
      </div>

      {/* Industry */}
      <div className="flex flex-col">
        <label className={labelClass}>Industry</label>
        <input
          type="text"
          name="industry"
          placeholder="Enter industry"
          onChange={formik.handleChange}
          value={formik.values.industry}
          className={inputClass}
        />
        {formik.touched.industry && formik.errors.industry && (
          <div className={errorClass}>{formik.errors.industry}</div>
        )}
      </div>

      {/* Region */}
      <div className="flex flex-col">
        <label className={labelClass}>Region</label>
        <select
          name="region"
          onChange={formik.handleChange}
          value={formik.values.region}
          className={inputClass}
        >
          <option value="" disabled className="bg-cardClr">Select Region</option>
          <option value="North America" className="bg-cardClr">North America</option>
          <option value="Europe" className="bg-cardClr">Europe</option>
          <option value="Asia Pacific" className="bg-cardClr">Asia Pacific</option>
          <option value="Middle East" className="bg-cardClr">Middle East</option>
          <option value="Africa" className="bg-cardClr">Africa</option>
          <option value="South America" className="bg-cardClr">South America</option>
        </select>
        {formik.touched.region && formik.errors.region && (
          <div className={errorClass}>{formik.errors.region}</div>
        )}
      </div>

      {/* Product Interest */}
      <div className="flex flex-col">
        <label className={labelClass}>Product Interest</label>
        <select
          name="productInterest"
          onChange={formik.handleChange}
          value={formik.values.productInterest}
          className={inputClass}
        >
          <option value="" disabled className="bg-cardClr">Select Product Interest</option>
          <option value="IoT Solutions" className="bg-cardClr">IoT Solutions</option>
          <option value="Embedded Systems" className="bg-cardClr">Embedded Systems</option>
          <option value="Cloud Computing" className="bg-cardClr">Cloud Computing</option>
          <option value="Mobile App Development" className="bg-cardClr">Mobile App Development</option>
          <option value="Consulting" className="bg-cardClr">Consulting</option>
        </select>
        {formik.touched.productInterest && formik.errors.productInterest && (
          <div className={errorClass}>{formik.errors.productInterest}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          rows="4"
          placeholder="Tell us about the partnership..."
          onChange={formik.handleChange}
          value={formik.values.message}
          className={`${inputClass} resize-none`}
        ></textarea>
        {formik.touched.message && formik.errors.message && (
          <div className={errorClass}>{formik.errors.message}</div>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <AppButton
          type="submit"
          variant="primary"
          size="lg"
          rounded="full"
          className="px-12 shadow-lg shadow-primaryDefaultClr/20"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Sending..." : "Accept"}
        </AppButton>
      </div>
    </form>
  );
};

export default PartnerForm;