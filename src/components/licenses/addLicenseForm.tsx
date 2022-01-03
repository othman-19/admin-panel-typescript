import React, { useState } from "react";
import  { Link } from 'react-router-dom'
import { Formik, FormikHelpers, ErrorMessage, Field, Form} from "formik";
import * as Yup from "yup";
import { PostCreateLicense } from "../../services/license/license.service";
import image from "../../assets/moodme-logo.png"
import { CreateLicense } from '../../Models';


const AddLicenseForm = () => {
  const [err, setErr] = useState({message:'', flag: ''})

  const initialValues : CreateLicense = {
    productID: 1,
    appID: '',
    customerID: 0,
    expiresAt: 0,
  };

  const validationSchema = Yup.object().shape({
      appID: Yup.string().required('Application is required'),
      customerID: Yup.number().required('customerID is required'),
  });

  const handleErrorMessage = (data: {error:string}) => {
    data.error
        ? setErr({message:'Error, Licence Not Created', flag:'danger'})
        : setErr({message:'License created', flag:'success'})
  }

  const handleSubmit = async (
    { productID, appID, customerID, expiresAt}: CreateLicense,
    { setSubmitting }: FormikHelpers<CreateLicense>
  ) => {
    try {
      const data = await PostCreateLicense({productID, appID, customerID, expiresAt});
      handleErrorMessage(data)
    } catch(error) {
      setSubmitting(false);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting}) => (
        <div className="col-md-12 ModalForm">
          <div className="card card-container">
            <h3>Create Licence</h3>
            <img
              src={image}
              alt="profile-img"
              className="profile-img-card"
            />
            <Form>
              <div className="form-group">
                <label htmlFor="appID">appID</label>
                <Field
                  className="form-control"
                  type="text"
                  name="appID"
                />
                <ErrorMessage
                  name="appID"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="customerID">customerID</label>
                <Field
                  className="form-control"
                  type="text"
                  name="customerID"
                />
                <ErrorMessage
                  name="customerID"
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
                    (!!errors.productID && touched.productID) ||
                    (!!errors.appID && touched.appID) ||
                    (!!errors.customerID && touched.customerID)
                  }
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Create Licence</span>
                </button>
              </div>
              {err.message && (
                <div className="form-group my-4">
                  <div className={`alert alert-${err.flag}`} role="alert">
                    {err.message}
                  </div>
                </div>
              )}
            </Form>
            <Link to="/">
              Know more about licenses?
            </Link>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default AddLicenseForm;