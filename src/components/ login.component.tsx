import * as React from "react";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

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
      <><h1>{title}</h1><form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          width={50}
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email} />

        <label>Password</label>
        <input
          width={50}
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password} />

        <button
          type="submit"
          disabled={isSubmitting ||
            !!(errors.email && touched.email) ||
            !!(errors.password && touched.password)}
        >
          Sign In
        </button>
      </form></>

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
        console.log(email, password);
    }
})(InnerForm);

export default Login;
