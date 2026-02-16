import { Formik, Form, Field, ErrorMessage } from "formik";
import AppButton from "../../components/buttons/AppButtons.jsx";
import imageAssets from "../../assets/index.js";

const ProjectForm = ({ onClose }) => {
  const labelClass = "text-sm font-medium text-textDefaultClr mb-1";
  const inputClass =
    "w-full rounded-lg bg-cardClr px-4 py-3 text-sm text-textDisableClr outline-none focus:border-primaryDefaultClr border border-transparent transition-colors placeholder:text-textDisableClr/50";
  const errorClass = "text-red-500 text-xs mt-1";

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

    if (!values.projectType)
      errors.projectType = "Project Type is required";
    if (!values.applicationArea)
      errors.applicationArea = "Application Area is required";
    if (!values.volume) errors.volume = "Volume is required";
    if (!values.budget) errors.budget = "Budget is required";
    if (!values.details)
      errors.details = "Project details are required";

    return errors;
  };

  return (
    <Formik
      initialValues={{
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
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          if (onClose) onClose();
          alert("Project Inquiry Submitted!");
        }, 1000);
      }}
    >
      {({ setFieldValue, values, isSubmitting }) => (
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
                placeholder="+91"
                className={inputClass}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={errorClass}
              />
            </div>

          </div>

          {/* Project Type */}
          <div className="flex flex-col">
            <label className={labelClass}>Project Type</label>
            <Field as="select" name="projectType" className={inputClass}>
              <option value="IoT Project">IoT Project</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Embedded System">Embedded System</option>
            </Field>
            <ErrorMessage
              name="projectType"
              component="div"
              className={errorClass}
            />
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div className="flex flex-col">
              <label className={labelClass}>Application Area</label>
              <Field
                as="select"
                name="applicationArea"
                className={inputClass}
              >
                <option value="">Select Area</option>
                <option value="Industrial">Industrial</option>
                <option value="Consumer">Consumer</option>
                <option value="Medical">Medical</option>
                <option value="Automotive">Automotive</option>
              </Field>
              <ErrorMessage
                name="applicationArea"
                component="div"
                className={errorClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Volume</label>
              <Field as="select" name="volume" className={inputClass}>
                <option value="">Select Volume</option>
                <option value="High">High</option>
                <option value="Low">Low</option>
              </Field>
              <ErrorMessage
                name="volume"
                component="div"
                className={errorClass}
              />
            </div>

          </div>

          {/* Budget */}
          <div className="flex flex-col">
            <label className={labelClass}>Budget</label>
            <Field
              name="budget"
              placeholder="Enter estimated budget"
              className={inputClass}
            />
            <ErrorMessage
              name="budget"
              component="div"
              className={errorClass}
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className={labelClass}>Description</label>
            <Field
              as="textarea"
              name="details"
              rows="4"
              placeholder="Describe your project requirements..."
              className={`${inputClass} resize-none`}
            />
            <ErrorMessage
              name="details"
              component="div"
              className={errorClass}
            />
          </div>

          {/* Document Upload */}
          <div className="flex flex-col">
            <label className={labelClass}>Document</label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-lightOutlineClr bg-cardClr px-6 py-8 text-center hover:bg-cardClr/80 transition-colors">
              <input
                type="file"
                className="hidden"
                onChange={(e) =>
                  setFieldValue("document", e.currentTarget.files[0])
                }
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

              {values.document && (
                <p className="mt-2 text-19 text-primaryDefaultClr">
                  {values.document.name}
                </p>
              )}
            </label>
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

export default ProjectForm;
