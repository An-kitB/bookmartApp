import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { feildStyle } from "../login/loginStyles";

const adddressSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, "too short")
    .max(15, "too long")
    .required("first name is required"),
  lastName: Yup.string()
    .min(4, "too short")
    .max(15, "too long")
    .required("last name is required"),
});

export const BillingForm = () => {
  return (
    <div>
      <h1>Billing Form</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          // contactNumber: [],
          address: {
            houseNumber: "",
            street: "",
            // city: "",
            // state: "",
            // landMark: "",
          },
        }}
        validationSchema={adddressSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("values", values);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div>
              <Field
                style={feildStyle}
                name="firstName"
                placeholder="first name"
              />
            </div>
            <ErrorMessage name="firstName" />

            <div>
              <Field
                style={feildStyle}
                name="lastName"
                placeholder="last name"
              />
            </div>
            <ErrorMessage name="lastName" />

            <div>
              <Field
                style={feildStyle}
                name="address.houseNumber"
                placeholder="H.NO."
              />
            </div>
            <ErrorMessage name="address.houseNumber" />

            <div>
              <Field
                style={feildStyle}
                name="address.street"
                placeholder="Street"
              />
            </div>
            <ErrorMessage name="street" />

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
