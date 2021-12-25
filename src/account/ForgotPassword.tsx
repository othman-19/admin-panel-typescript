import React, { useState } from "react";
import { withFormik, FormikProps, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
// import { forgotPassword } from "../services/auth.service";
import image from "../assets/moodme-logo.png"

import { ForgotEmail, MyFormProps, OtherProps } from '../Models';

const InnerForm = (props: OtherProps & FormikProps<ForgotEmail>) => {
  const [message, setMessage] = useState("")
  const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      title
  } = props;

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <h1>{title}</h1>
        <img
          src={image}
          alt="profile-img"
          className="profile-img-card"
        />
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              className="form-control"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <ErrorMessage
              name="email"
              component="div"  
              className="alert alert-danger"
            />
          </div>
          <div className="form-group my-4" >
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={isSubmitting || (!!errors.email && touched.email)
              }
            >
              {isSubmitting && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Get temporary Password</span>
            </button>
          </div>
          {message && (
            <div className="form-group my-4">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

const ForgotPassword = withFormik<MyFormProps, ForgotEmail>({
    mapPropsToValues: props => ({
        email: props.initialEmail || ""
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required")
    }),

    handleSubmit(
      { email }: ForgotEmail,
      { props, setSubmitting, setErrors }
    ) {
      // forgotPasword({email});
      console.log(email);
    }
})(InnerForm);

export default ForgotPassword;
