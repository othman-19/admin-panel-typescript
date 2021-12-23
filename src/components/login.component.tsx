import * as React from "react";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { login } from "../services/auth.service";
import image from "../assets/moodme-logo.png"

import { FormValues, MyFormProps, OtherProps } from '../interfaces';

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
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
          </form>
        </div>
      </div>
    );
};

const Login = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
        email: props.initialEmail || "",
        password: props.initialPassword || ""
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string().required("Password is required")
    }),

    handleSubmit(
      { email, password }: FormValues,
      { props, setSubmitting, setErrors }
    ) {
      // login({email, password});
      console.log(email, password);
    }
})(InnerForm);

export default Login;
