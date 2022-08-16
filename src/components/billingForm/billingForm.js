import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
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
  contactNumber: Yup.array(Yup.number().min(4).required('required')).required("needed"),
  address: Yup.object().shape({
    houseNumber: Yup.number().required("requird feild"),
    street: Yup.string().required("requird feild"),
    city: Yup.string().required("requird feild"),
    state: Yup.string().required("requird feild"),
  }),
});

export const BillingForm = () => {
  return (
    <div>
      <h1>Billing Form</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          contactNumber: [""],
          address: {
            houseNumber: "",
            street: "",
            city: "",
            state: "",
          },
        }}
        validationSchema={adddressSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("values", values);
          resetForm();
        }}
      >
        {(values) => (
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
              <FieldArray
                name="contactNumber"
                render={(arrayHelpers) => (
                  <div>
                    {console.log(values.values.contactNumber)}

                    {values.values.contactNumber &&
                    values.values.contactNumber.length > 0
                      ? values.values.contactNumber.map((number, index) => (
                          <div key={index}>
                            <div>
                              <Field
                                name={`contactNumber.${index}`}
                                placeholder="Contact number"
                              />
                              {index > 0 && (
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  -
                                </button>
                              )}
                              <button
                                type="button"
                                onClick={() => arrayHelpers.insert(index, "")}
                              >
                                +
                              </button>
                            </div>
                            <ErrorMessage name={`contactNumber[${index}`} />
                          </div>
                        ))
                      : null}
                  </div>
                )}
              />
            </div>

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
                placeholder="street"
              />
            </div>
            <ErrorMessage name="address.street" />
            <div>
              <Field
                style={feildStyle}
                name="address.city"
                placeholder="city"
              />
            </div>
            <ErrorMessage name="address.city" />

            <div>
              <Field
                style={feildStyle}
                name="address.state"
                placeholder="State"
              />
            </div>
            <ErrorMessage name="address.state" />

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
