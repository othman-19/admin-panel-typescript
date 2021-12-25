import React, { useState } from "react";
import { withFormik, FormikProps, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
// import { resetPassword } from "../services/auth.service";
import image from "../assets/moodme-logo.png"

import { resetPassword, MyFormProps, OtherProps } from '../Models';

const InnerForm = (props: OtherProps & FormikProps<resetPassword>) => {
  const [message, setMessage] = useState("")
  // still token fetch and status
  const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      title,
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
            <label htmlFor="password">Password</label>
            <Field
              className="form-control"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <ErrorMessage
              name="password"
              component="div"  
              className="alert alert-danger"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>
            <Field
              className="form-control"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"  
              className="alert alert-danger"
            />
          </div>
          <div className="form-group my-4" >
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={
                isSubmitting ||
                (!!errors.password && touched.password) ||
                (!!errors.confirmPassword && touched.confirmPassword)
              }
            >
              {isSubmitting && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Send your email</span>
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

const ResetPassword = withFormik<MyFormProps, resetPassword>({
  mapPropsToValues: props => ({
    password: props.initialPassword || "",
    confirmPassword: props.initialConfirmPassword || "",
    token: props.initialToken || "",
  }),

  validationSchema: Yup.object().shape({
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
  }),

  handleSubmit(
    { password, confirmPassword, token }: resetPassword,
    { props, setSubmitting, setErrors },
  ) {
    // resetPasword({ password, confirmPassword, token });
    console.log(password, confirmPassword, token);
  }
})(InnerForm);

export default ResetPassword;
