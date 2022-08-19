import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addAddressAction } from "../../redux/actions/action";
import { feildStyle } from "../login/loginStyles";
import { biilingFormStyles } from "./biilingFormStyles";

const adddressSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, "too short")
    .max(15, "too long")
    .required("first name is required"),
  lastName: Yup.string()
    .min(4, "too short")
    .max(15, "too long")
    .required("last name is required"),
  contactNumber: Yup.array(Yup.number().min(4).required("required")).required(
    "needed"
  ),
  address: Yup.object().shape({
    houseNumber: Yup.number().required("requird feild"),
    street: Yup.string().required("requird feild"),
    city: Yup.string().required("requird feild"),
    state: Yup.string().required("requird feild"),
  }),
});

export const BillingForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={biilingFormStyles.main}>Billing Form</h1>

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
          dispatch(addAddressAction(values.address, values.firstName));

          resetForm();
        }}
      >
        {(values) => (
          <Form>
            <div>
              <Field
                style={biilingFormStyles.billingFeildStyle}
                name="firstName"
                placeholder="first name"
              />
            </div>
            <ErrorMessage
              name="firstName"
              render={(msg) => (
                <div style={biilingFormStyles.errorMsg}>{msg}</div>
              )}
            />

            <div>
              <Field
                style={biilingFormStyles.billingFeildStyle}
                name="lastName"
                placeholder="last name"
              />
            </div>
            <ErrorMessage
              name="lastName"
              render={(msg) => (
                <div style={biilingFormStyles.errorMsg}>{msg}</div>
              )}
            />

            <div>
              <FieldArray
                name="contactNumber"
                render={(arrayHelpers) => (
                  <div>
                    {values.values.contactNumber &&
                    values.values.contactNumber.length > 0
                      ? values.values.contactNumber.map((number, index) => (
                          <div key={index}>
                            <div>
                              <Field
                                style={biilingFormStyles.billingFeildStyle}
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
                            <ErrorMessage
                              name={`contactNumber[${index}`}
                              render={(msg) => (
                                <div style={biilingFormStyles.errorMsg}>
                                  {msg}
                                </div>
                              )}
                            />
                          </div>
                        ))
                      : null}
                  </div>
                )}
              />
            </div>

            <div>
              <Field
                style={biilingFormStyles.billingFeildStyle}
                name="address.houseNumber"
                placeholder="H.NO."
              />
            </div>
            <ErrorMessage
              name="address.houseNumber"
              render={(msg) => (
                <div style={biilingFormStyles.errorMsg}>{msg}</div>
              )}
            />

            <div>
              <Field
                style={biilingFormStyles.billingFeildStyle}
                name="address.street"
                placeholder="street"
              />
            </div>
            <ErrorMessage name="address.street" />
            <div>
              <Field
                style={biilingFormStyles.billingFeildStyle}
                name="address.city"
                placeholder="city"
              />
            </div>
            <ErrorMessage
              name="address.city"
              render={(msg) => (
                <div style={biilingFormStyles.errorMsg}>{msg}</div>
              )}
            />

            <div>
              <Field
                style={biilingFormStyles.billingFeildStyle}
                name="address.state"
                placeholder="State"
              />
            </div>
            <ErrorMessage
              name="address.state"
              render={(msg) => (
                <div style={biilingFormStyles.errorMsg}>{msg}</div>
              )}
            />

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
