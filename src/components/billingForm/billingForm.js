import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addAddressAction } from "../../redux/actions/action";
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
    <div
      style={{
        width: 400,
        border: (10, "solid"),
        paddingLeft: 90,
        height: 600,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <h1 style={biilingFormStyles.main}>Billing Form</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          Pnum: "",
          Optional: "",
          Snum: "",
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
            <div style={{ width: 400 }}>
              <div style={biilingFormStyles.feildStyle}>
                <Field
                  style={biilingFormStyles.feildStyle}
                  name="firstName"
                  placeholder="first name"
                />
                <ErrorMessage
                  name="firstName"
                  render={(msg) => (
                    <div style={biilingFormStyles.errorMsg}>{msg}</div>
                  )}
                />
              </div>
              <div style={biilingFormStyles.feildStyle}>
                <Field
                  style={biilingFormStyles.feildStyle}
                  name="lastName"
                  placeholder="last name"
                />
                <ErrorMessage
                  name="lastName"
                  render={(msg) => (
                    <div style={biilingFormStyles.errorMsg}>{msg}</div>
                  )}
                />
              </div>
            </div>
            {/* <div> */}
            {/* <FieldArray
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
            </div> */}

            {/* <div> */}
            <div style={biilingFormStyles.feildStyle}>
              <Field
                style={biilingFormStyles.feildStyle}
                name="Pnum"
                placeholder="Primary No."
              />
              <ErrorMessage
                name="address.houseNumber"
                render={(msg) => (
                  <div style={biilingFormStyles.errorMsg}>{msg}</div>
                )}
              />
            </div>
            <div style={biilingFormStyles.feildStyle}>
              <Field
                style={biilingFormStyles.feildStyle}
                name="Snum"
                placeholder="Secondary No."
              />
              <ErrorMessage
                name="address.houseNumber"
                render={(msg) => (
                  <div style={biilingFormStyles.errorMsg}>{msg}</div>
                )}
              />
            </div>

            <div>
              <div style={biilingFormStyles.feildStyle}>
                <Field
                  style={biilingFormStyles.feildStyle}
                  name="address.houseNumber"
                  placeholder="H.NO."
                />
                <ErrorMessage
                  name="address.houseNumber"
                  render={(msg) => (
                    <div style={biilingFormStyles.errorMsg}>{msg}</div>
                  )}
                />
              </div>

              <div style={biilingFormStyles.feildStyle}>
                <Field
                  style={biilingFormStyles.feildStyle}
                  name="address.street"
                  placeholder="street"
                />
                <ErrorMessage
                  name="address.street"
                  render={(msg) => (
                    <div style={biilingFormStyles.errorMsg}>{msg}</div>
                  )}
                />
              </div>
            </div>
            <div style={biilingFormStyles.feildStyle}>
              <Field
                style={biilingFormStyles.feildStyle}
                name="address.city"
                placeholder="city"
              />
              <ErrorMessage
                name="address.city"
                render={(msg) => (
                  <div style={biilingFormStyles.errorMsg}>{msg}</div>
                )}
              />
            </div>

            <div style={biilingFormStyles.feildStyle}>
              <Field
                style={biilingFormStyles.feildStyle}
                name="address.state"
                placeholder="State"
              />
              <ErrorMessage
                name="address.state"
                render={(msg) => (
                  <div style={biilingFormStyles.errorMsg}>{msg}</div>
                )}
              />
            </div>
            <div>
              <Field
                style={biilingFormStyles.billingFeildStyle}
                name="Optional"
                placeholder="OPtional Feild"
              />
              <ErrorMessage
                name="address.state"
                render={(msg) => (
                  <div style={biilingFormStyles.errorMsg}>{msg}</div>
                )}
              />
            </div>
            <div>
              <button
                style={{ alignContent: "center", width: 330, height: 40 }}
                type="submit"
              >
                submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
