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
        paddingLeft: 50,
        height: 800,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#f0f4f5",
      }}
    >
      <h1 style={biilingFormStyles.main}>Billing Form</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          Pnum: "",
          Email: "",
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
                {console.log("valuesnv", values.errors)}
                <p
                  style={
                    Object.keys(values.errors).length > 0
                      ? biilingFormStyles.heading
                      : biilingFormStyles.heading2
                  }
                >
                  First Name*
                </p>
                <Field
                  style={biilingFormStyles.feildStyle}
                  name="firstName"
                  placeholder="ex: Hazel"
                />
                <ErrorMessage
                  name="firstName"
                  render={(msg) => (
                    <div style={biilingFormStyles.errorMsg}>{msg}</div>
                  )}
                />
              </div>
              <div style={biilingFormStyles.feildStyle}>
                <p style={
                    Object.keys(values.errors).length > 0
                      ? biilingFormStyles.heading
                      : biilingFormStyles.heading2
                  }>Last Name</p>
                <Field
                  style={biilingFormStyles.feildStyle}
                  name="lastName"
                  placeholder="ex: sith"
                />
                <ErrorMessage
                  name="lastName"
                  render={(msg) => (
                    <div style={biilingFormStyles.errorMsg}>{msg}</div>
                  )}
                />
              </div>
            </div>

            <p style={
                    Object.keys(values.errors).length > 0
                      ? biilingFormStyles.heading
                      : biilingFormStyles.heading2
                  }>Email*</p>
            <div>
              <Field
                style={{ width: 360, height: 30 }}
                name="Email"
                placeholder="Ex- example@ex.com"
              />
              <ErrorMessage
                name="lastName"
                render={(msg) => (
                  <div style={biilingFormStyles.errorMsg}>{msg}</div>
                )}
              />
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
              <p style={
                    Object.keys(values.errors).length > 0
                      ? biilingFormStyles.heading
                      : biilingFormStyles.heading2
                  }>Primary No.*</p>
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
              <p style={
                    Object.keys(values.errors).length > 0
                      ? biilingFormStyles.heading
                      : biilingFormStyles.heading2
                  }>Secondary No.</p>

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
                <p style={
                    Object.keys(values.errors).length > 0
                      ? biilingFormStyles.heading
                      : biilingFormStyles.heading2
                  }>House No.*</p>

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
                <p style={
                    Object.keys(values.errors).length > 0
                      ? biilingFormStyles.heading
                      : biilingFormStyles.heading2
                  }>Street*</p>

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
              <p style={
                    Object.keys(values.errors).length > 0
                      ? biilingFormStyles.heading
                      : biilingFormStyles.heading2
                  }>city*</p>

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
              <p style={
                    Object.keys(values.errors).length > 0
                      ? biilingFormStyles.heading
                      : biilingFormStyles.heading2
                  }>State*</p>

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
              <button
                style={{
                  alignContent: "center",
                  width: 365,
                  height: 40,
                  backgroundColor: "#ededed",
                  marginTop: 23,
                }}
                type="submit"
              >
                submit
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <p style={biilingFormStyles.footerText}>
        All Feilds marked with * are mandatory
      </p>
    </div>
  );
};
