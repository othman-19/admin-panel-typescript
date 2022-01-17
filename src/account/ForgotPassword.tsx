import React, { useState } from "react";
import  { Link } from 'react-router-dom'
import  { useNavigate } from 'react-router'
import { Formik, FormikHelpers, ErrorMessage, Field, Form} from "formik";
import * as Yup from "yup";

// import { forgotPassword } from "../services/auth.service";
import image from "../assets/moodme-logo.png"
import { ForgotEmail } from '../Models';


const ForgotPassword = () => {

  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  
  const initialValues : ForgotEmail = {
      email: '',
  };

  const validationSchema= Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required")
  });

  const handleSubmit = (
    { email }: ForgotEmail,
    { setSubmitting }: FormikHelpers<ForgotEmail>
  ) => {
    try {
      // await forgotPassword({email, password});
      console.log({email})
      setMessage("Message from forgot password")
      navigate("/resetPassword")
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
            <h1>Forgot Password</h1>
            <img
              src={image}
              alt="profile-img"
              className="profile-img-card"
            />
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  className="form-control"
                  type="email"
                  name="email"
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
                  disabled={
                    isSubmitting ||
                    (!!errors.email && touched.email)
                  }
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Sign In</span>
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

export default ForgotPassword;
