import { Formik , Field , Form ,ErrorMessage } from "formik";
import AppButton from "../../components/buttons/AppButtons.jsx";
import imageAssets from "../../assets/index.js";

const ApplyNowForm = () => {
      const validate = (values) => {
          const errors = {};

          if(!values.name) errors.name = "Required";

          if(!values.email){
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
          {
            errors.email = "Invalid email address"
          }

          if(!values.role) errors.role = "Required";

          if(!values.experience){
            errors.experience = "Required";
          } else if (!/^[0-9]/.test(values.experience)){
            errors.experience = "Must be a number ";
          }

          if(!values.resume) errors.resume = "Required";

          return errors;
            
      }

    const inputClass = `mt-2 w-full rounded-lg bg-tagClr/70 px-4 py-4 text-20 font-6 text-textDefaultClr outline-none border border-white/10 focus:primaryDefaultClr transition-colors placeholder:text-textDisableClr/90`;

    const labelClass = `text-20 text-textDefaultClr font-body font-5`;

    const errorClass = `mt-1 text-19 text-red-400`;

    return(
      <section className="flex justify-center px-10 py-10">
        <div className="w-full max-w-6xl rounded-2xl bg-newExpertiseGradient p-10">
            <h2 className="mb-10 mt-6 text-center font-heading text-60 font-6 text-textDefaultClr">
              Apply Now
            </h2>

            <Formik 
                    initialValues={{
                      name:"",
                      email:"",
                      role:"",
                      experience:"",
                      resume:null,
                    }}
                    validate={validate}
                    onSubmit={ (values) => {
                      console.log(values);
                    }}>

                    {({setFieldValue,values}) => (
                       <Form className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                          {/* names */}
                          <div>
                            <label className={labelClass}>
                              Name
                            </label>
                            <Field type="text"
                                   name="name"
                                   placeholder="Enter Your Name"
                                   className={inputClass} />
                            <ErrorMessage name="name"
                                          component="p"
                                          className={errorClass} />
                          </div>


                          {/* email */}
                           <div>
                            <label className={labelClass}>
                              Email
                            </label>
                            <Field type="email"
                                   name="email"
                                   placeholder="Enter Your Email"
                                   className={inputClass} />
                            <ErrorMessage name="email"
                                          component="p"
                                          className={errorClass} />
                          </div>

                          {/* role */}
                           <div>
                            <label className={labelClass}>
                              Role
                            </label>
                            <Field type="text"
                                   name="role"
                                   placeholder="Enter Your Role"
                                   className={inputClass} />
                            <ErrorMessage name="role"
                                          component="p"
                                          className={errorClass} />
                          </div>

                          {/* experience */}
                           <div>
                            <label className={labelClass}>
                              Experience
                            </label>
                            <Field type="text"
                                   name="experience"
                                   placeholder="Enter Your Experience"
                                   className={inputClass} />
                            <ErrorMessage name="experience"
                                          component="p"
                                          className={errorClass} />
                          </div>

                        </div>


                        {/* resume */}

                        <div>
                            <label className={labelClass}>
                              Resume
                            </label>

                            <label className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-white/30 bg-tagClr px-6 py-8 text-center">
                              <input
                                type="file"
                                className="hidden"
                                onChange={(e) =>
                                  setFieldValue("resume", e.currentTarget.files[0])
                                }
                              />

                              <img
                                src={imageAssets.uploadIcon}
                                alt="Upload"
                                className="mb-2 w-[2rem] h-[2rem]"
                              />

                              <p className="text-[16px] text-textDefaultClr underline underline-offset-3">
                                Upload Resume
                              </p>

                              <p className="text-18 text-textDisableClr">
                                Upload a file up to 5MB
                              </p>

                              {values.resume && (
                                <div className="mt-2 text-xs text-primaryDefaultClr">
                                  {values.resume.name}
                                </div>
                              )}
                            </label>

                            <ErrorMessage
                              name="resume"
                              component="p"
                              className={errorClass}
                            />
                          </div>

                          {/* submit button */}

                          <div className="flex justify-center pt-8">
                            <AppButton
                              type="submit"
                              variant="primary"
                              size="sm"
                              className="rounded-full px-9 py-2 text-19 text-textDefaultClr"
                            >
                              Submit
                            </AppButton>
                          </div>
                       </Form>
                    )}
            </Formik>

        </div>

      </section>
    )
}

export default ApplyNowForm;