import React, { useState } from "react";
import  { Link } from 'react-router-dom'
import  { useNavigate } from 'react-router'
import { Formik, FormikHelpers, ErrorMessage, Field, Form} from "formik";
import * as Yup from "yup";
// import { resetPassword } from "../services/auth.service";
import image from "../assets/moodme-logo.png"
import { resetPassword } from '../Models';

const ResetPassword = () => {
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  
  const initialValues : resetPassword = {
      password: '',
      confirmPassword: '',
      token: '',
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
  });

  const handleSubmit = (
    { password, confirmPassword, token }: resetPassword,
    { setSubmitting }: FormikHelpers<resetPassword>
  ) => {
    try {
      // await login({email, password});
      console.log({password})
      setMessage("Message from resset password service")
      navigate("/login")
    } catch(error) {
      setSubmitting(false);
      console.log(error)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting}) => (
        <div className="col-md-12">
          <div className="card card-container">
            <h1>Reset Password</h1>
            <img
              src={image}
              alt="profile-img"
              className="profile-img-card"
            />
            <Form>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  className="form-control"
                  type="password"
                  name="password"
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
            <Link to="/login">
              Login
            </Link>
          </div>
        </div>
      )}
    </Formik>
  )
}
export default ResetPassword;
