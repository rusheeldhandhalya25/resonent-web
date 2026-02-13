import { Formik, Form, Field, ErrorMessage } from "formik";
import AppButton from "../components/buttons/AppButtons";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) errors.firstName = "Required";
  if (!values.lastName) errors.lastName = "Required";

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/^[0-9]{10}$/.test(values.phone)) {
    errors.phone = "Must be 10 digits";
  }

  if (!values.subject) errors.subject = "Required";
  if (!values.message || values.message.length < 10) {
    errors.message = "Min 10 characters";
  }

  return errors;
};

const inputClass = `
  w-full bg-tagClr
  border-2 border-lightOutlineClr
  rounded-2xl px-4 py-3
  text-textDefaultClr
  text-19
  placeholder-textDefaultClr
  focus:outline-none
  focus:ring-2
  focus:ring-primaryDefaultClr
`;

const errorClass = "text-red-500 text-19 mt-1";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      }}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {() => (
        <Form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Field
              name="firstName"
              placeholder="First Name"
              className={inputClass}
            />
            <ErrorMessage
              name="firstName"
              component="p"
              className={errorClass}
            />
          </div>

          <div>
            <Field
              name="lastName"
              placeholder="Last Name"
              className={inputClass}
            />
            <ErrorMessage
              name="lastName"
              component="p"
              className={errorClass}
            />
          </div>

          <div>
            <Field name="email" placeholder="Email" className={inputClass} />
            <ErrorMessage name="email" component="p" className={errorClass} />
          </div>

          <div>
            <Field
              name="phone"
              placeholder="Phone Number"
              className={inputClass}
            />
            <ErrorMessage name="phone" component="p" className={errorClass} />
          </div>

          <div className="lg:col-span-2">
            <Field
              name="subject"
              placeholder="Subject"
              className={inputClass}
            />
            <ErrorMessage name="subject" component="p" className={errorClass} />
          </div>

          <div className="lg:col-span-2">
            <Field
              as="textarea"
              rows="5"
              name="message"
              placeholder="Tell Us Something..."
              className={inputClass}
            />
            <ErrorMessage name="message" component="p" className={errorClass} />
          </div>

          <div className="lg:col-span-2">
            <AppButton type="submit" fullWidth>
              Submit
            </AppButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
