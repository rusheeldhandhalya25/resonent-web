import { Formik , Form , Field , ErrorMessage } from "formik";
import AppButton from "../buttons/AppButtons.jsx";
import imageAssets from "../../assets";

const JobApplyForm = ({job}) =>{
      const validate = (values) => {
        const errors = {};

        if(!values.fullName) errors.fullName ="Required";

        if(!values.email){
          errors.email = "Required";
        } else if ( !/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        {
          errors.email = "Invalid email address"
        }

        if(!values.phone){
          errors.phone = "Required";
        } else if (!/^[0-9]{10}/.test(values.phone)){
          errors.phone = "Must be 10 number ";
        } else if (!values.phone || values.phone.length < 10){
          errors.phone = "Must be 10 number ";
        }

        if(!values.experience){
          errors.experience = "Required";
        } else if (!/^[0-9]/.test(values.experience)){
          errors.experience = "Must be In Number ";
        }

        if(!values.joining) errors.joining = "Required";
        if(!values.currentCTC) errors.currentCTC = "Required";
        if(!values.expectedCTC) errors.expectedCTC = "Required";

        if(!values.coverLetter){
          errors.coverLetter = "Required";
        } else if (!values.coverLetter || values.coverLetter.length < 10){
          errors.coverLetter = "Min 10 character";
        }

        if(!values.resume) errors.resume = "Required";

        return errors;

      };

      const inputClass = `w-full rounded-xl bg-tagClr/50 px-3 py-2.5 mt-1 text-19 sm:text-20 text-textDefaultClr outline-none border border-white/10 focus:primaryDefaultClr transition-colors placeholder:text-textDisableClr/50`;

      const labelClass = `text-19 text-textDefaultClr mb-1 block font-5 mt-2 font-body`;

      const errorClass =  `text-[0.8rem] text-red-400 mt-0.5 ml-1`;

   
    return(
      <Formik 
              initialValues={{
                fullName:"",
                email:"",
                phone:"",
                experience:"",
                joining:"",
                currentCTC:"",
                expectedCTC:"",
                coverLetter:"",
                resume:null,
              }}

              validate={validate}
              onSubmit={(values , {resetForm}) =>{
                console.log(values);
                resetForm();
              }}>
                {({setFieldValue , values }) => (
                   <Form className="space-y-4">


                  {/* full name  */}
                    <div>
                      <label className={labelClass}>fullName</label>
                      <Field name="fullName"
                             placeholder="Full Name"
                             className={inputClass} />
                      <ErrorMessage name="fullName"
                                    component="p"
                                    className={errorClass} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          
                          {/* email */}
                          <div>
                            <label className={labelClass}>Email</label>
                            <Field name="email"
                                  placeholder="Enter Your Email"
                                  className={inputClass} />
                            <ErrorMessage name="email"
                                          component="p"
                                          className={errorClass} />
                          </div>
                          
                          {/* phone */}
                          <div>
                            <label className={labelClass}>Phone Number</label>
                            <Field name="phone"
                                  placeholder="+91"
                                  className={inputClass} />
                            <ErrorMessage name="phone"
                                          component="p"
                                          className={errorClass} />
                          </div>

                          {/* experience */}
                          <div>
                            <label className={labelClass}>Experience (Years)</label>
                            <Field name="experience"
                                  placeholder="Enter years Of Experience"
                                  className={inputClass} />
                            <ErrorMessage name="experience"
                                          component="p"
                                          className={errorClass} />
                          </div>


                        {/* Joining */}
                          <div>
                            <label className={labelClass}>Joining</label>
                            <Field
                              as="select"
                              name="joining"
                              className={inputClass}
                            >
                              <option value="">Select</option>
                              <option value="7">7 Days</option>
                              <option value="15">15 Days</option>
                              <option value="30">30 Days</option>
                              <option value="45">45 Days</option>
                            </Field>

                            <ErrorMessage
                              name="joining"
                              component="p"
                              className={errorClass}
                            />
                          </div>

                          {/* currentCTC */}
                          <div>
                            <label className={labelClass}>CurrentCTC</label>
                            <Field name="currentCTC"
                                   type="number"
                                   placeholder="INR(₹)"
                                   className={inputClass} />
                            <ErrorMessage name="currentCTC"
                                          component="p"
                                          className={errorClass}/>
                          </div>

                          {/* ExpectedCTC */}
                          <div>
                            <label className={labelClass}>ExpectedCTC</label>
                            <Field name="expectedCTC"
                                   type="number"
                                   placeholder="INR(₹)"
                                   className={inputClass} />
                            <ErrorMessage name="expectedCTC"
                                          component="p"
                                          className={errorClass}/>
                          </div>

                          {/* cover letter */}
                         
                    </div>

                     <div>
                            <label className={labelClass}>Short Cover Letter </label>
                            <Field as="textarea"
                                   name="coverLetter"
                                   rows="3"
                                   placeholder="Enter Description"
                                   className={inputClass}/> 
                          </div>

                          {/* resume */}

                          <div>
                             <label className={labelClass}> Resume </label>
                             <label className="mt-1 flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-white/20 bg-tagClr/50 px-4 py-4 text-center hover:bg-white/5 transition-colors group">
                             <input type="file"
                                    className="hidden"
                                    onChange={ (e) => setFieldValue("resume",e.currentTarget.files[0])} />

                              <img src={imageAssets.uploadIcon} 
                                   alt="Upload Icon"
                                   className="w-6 h-6 mb-2 opacity-70 group-hover:opacity-100 transition-opacity" />

                              <p className="text-20 text-textDefaultClr underline underline-offset-2">
                                Upload Resume
                              </p>

                              <p className="text-[10px] text-textDisableClr mt-1">
                                Supported formats: PDF, DOCX (Max 5MB)
                              </p>

                              {values.resume && (
                                <div className="mt-2 px-2 py-1 bg-primaryDefaultClr/20 text-primaryDefaultClr rounded text-[14px] font-5">
                                    {values.resume.name}
                                </div>
                              )}
                              </label>

                              <ErrorMessage name="resume"
                                            component="p"
                                            className={errorClass}/>
                          </div>

                          {/* submit button  */}

                          <div className="flex justify-center pt-2">
                              <AppButton type="submit"
                                        variant="primary"
                                        rounded="full"
                                        className="px-6 py-2 mt-7 text-19 flex items-center justify-center text-textDefaultClr">
                                  Apply Now
                              </AppButton>
                          </div>

                   </Form>
                )}


              </Formik>
    )
}


export default JobApplyForm;