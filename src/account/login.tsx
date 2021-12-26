import React, { useState } from "react";
import  { Link } from 'react-router-dom'
import  { useNavigate } from 'react-router'

import { Formik, FormikHelpers, FormikProps, ErrorMessage, Field, Form} from "formik";
import * as Yup from "yup";
// import { login } from "../services/auth.service";
import image from "../assets/moodme-logo.png"
import { FormValues, OtherProps } from '../Models';


const Login = (props: OtherProps) => {
  const {
    title,
  } = props;

  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  
  const initialValues : FormValues = {
      email: '',
      password: ''
  };

  const validationSchema = Yup.object().shape({
      email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
      password: Yup.string().required('Password is required')
  });

  const handleSubmit = (
    { email, password }: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      // await login({email, password});
      console.log({email, password})
      setMessage("Message from login")
      navigate("/profile")
    } catch(error) {
      setSubmitting(false);
      console.log(error)
    }
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ errors, touched, isSubmitting, handleBlur, handleChange }) => (
        <div className="col-md-12">
          <div className="card card-container">
            <h1>{title}</h1>
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="email"
                  component="div"  
                  className="alert alert-danger"
                />
    
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group my-4" >
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting ||
                    !!(errors.email && touched.email) ||
                    !!(errors.password && touched.password)}
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
            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default Login;