import { Formik, Form, Field, ErrorMessage } from "formik";
import AppButton from "../../components/buttons/AppButtons.jsx";

const PartnerForm = ({ onClose }) => {
  const labelClass = "text-20 font-5 text-textDefaultClr mb-1";
  const inputClass =
    "w-full rounded-lg bg-tagClr/50 px-4 py-3 text-20 text-textDisableClr outline-none focus:border-primaryDefaultClr border border-transparent transition-colors placeholder:text-textDisableClr/50 ";
  const errorClass = "text-red-500 text-19 mt-1";

  const validate = (values) => {
    const errors = {};

    if (!values.fullName) errors.fullName = "Full Name is required";
    if (!values.companyName)
      errors.companyName = "Company Name is required";

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }

    if (!values.industry) errors.industry = "Industry is required";
    if (!values.region) errors.region = "Region is required";
    if (!values.productInterest)
      errors.productInterest = "Product Interest is required";
    if (!values.message) errors.message = "Message is required";

    return errors;
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        companyName: "",
        phone: "",
        industry: "",
        region: "",
        productInterest: "",
        message: "",
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          if (onClose) onClose();
          alert("Partner Inquiry Submitted!");
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-5 animate-fadeIn">

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div className="flex flex-col">
              <label className={labelClass}>Full Name</label>
              <Field
                name="fullName"
                placeholder="Enter your full name"
                className={inputClass}
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className={errorClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Company Name</label>
              <Field
                name="companyName"
                placeholder="Enter company name"
                className={inputClass}
              />
              <ErrorMessage
                name="companyName"
                component="div"
                className={errorClass}
              />
            </div>

          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div className="flex flex-col">
              <label className={labelClass}>Email Address</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter email address"
                className={inputClass}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={errorClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Phone Number</label>
              <Field
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                className={inputClass}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={errorClass}
              />
            </div>

          </div>

          {/* Industry */}
          <div className="flex flex-col">
            <label className={labelClass}>Industry</label>
            <Field
              name="industry"
              placeholder="Enter industry"
              className={inputClass}
            />
            <ErrorMessage
              name="industry"
              component="div"
              className={errorClass}
            />
          </div>

          {/* Region */}
          <div className="flex flex-col">
            <label className={labelClass}>Region</label>
            <Field as="select" name="region" className={inputClass}>
              <option value="">Select Region</option>
              <option value="North America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Asia Pacific">Asia Pacific</option>
              <option value="Middle East">Middle East</option>
              <option value="Africa">Africa</option>
              <option value="South America">South America</option>
            </Field>
            <ErrorMessage
              name="region"
              component="div"
              className={errorClass}
            />
          </div>

          {/* Product Interest */}
          <div className="flex flex-col">
            <label className={labelClass}>Product Interest</label>
            <Field
              as="select"
              name="productInterest"
              className={inputClass}
            >
              <option value="">Select Product Interest</option>
              <option value="IoT Solutions">IoT Solutions</option>
              <option value="Embedded Systems">Embedded Systems</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="Consulting">Consulting</option>
            </Field>
            <ErrorMessage
              name="productInterest"
              component="div"
              className={errorClass}
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center mt-4">
            <AppButton
              type="submit"
              variant="primary"
              size="lg"
              rounded="full"
              className="px-24 shadow-lg shadow-primaryDefaultClr/20"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </AppButton>
          </div>

        </Form>
      )}
    </Formik>
  );
};

export default PartnerForm;
