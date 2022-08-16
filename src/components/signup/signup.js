import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { feildStyle } from "../login/loginStyles";

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// const handle = () => {
//   localStorage.setItem('Name', name);
//   localStorage.setItem('Password', pwd);
// };

const SignupSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(4, "too Short ")
    .max(12, "too Long")
    .required("first name is required"),
  lastName: yup
    .string()
    .min(4, "too Short ")
    .max(12, "too Long")
    .required("first name is required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
});

export const Signup = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: [""],
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          localStorage.setItem(
            "LoaclStorageUserEmail",
            JSON.stringify(values.email)
          );
          localStorage.setItem(
            "LoaclStorageUserPassword",
            JSON.stringify(values.password)
          );
          localStorage.setItem(
            "LoaclStorageFirstName",
            JSON.stringify(values.firstName)
          );
          localStorage.setItem(
            "LoaclStorageLastName",
            JSON.stringify(values.lastName)
          );

          localStorage.setItem(
            "LocalStoragePhoneNum",
            JSON.stringify(values.phoneNumber)
          ); // localStorage;
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
              <Field
                style={feildStyle}
                name="email"
                type="email"
                placeholder="email"
              />
            </div>
            <ErrorMessage name="email" />

            <div>
              <Field
                style={feildStyle}
                name="password"
                type="password"
                placeholder="password"
              />
            </div>
            <ErrorMessage name="password" />
            <div>
              <div>
                {/* <FieldArray
                  name="phoneNumber"
                  render={(arrayHelpers) => {
                    <div>
                      {console.log(values.values.phoneNumber.length)}
                      { values.values.phoneNumber.length > 0 && values.values.phoneNumber.map((friend, index) => (
                        <div key={index}>
                          <Field name={`phoneNumber.${index}`} />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")}
                          >
                            +
                          </button>
                        </div>
                      ))}
                    </div>;
                  }}
                /> */}

                <FieldArray
                  name="phoneNumber"
                  render={(arrayHelpers) => (
                    <div>
                      {console.log(values.values.phoneNumber)}
                      {values.values.phoneNumber &&
                      values.values.phoneNumber.length > 0
                        ? values.values.phoneNumber.map((friend, index) => (
                            <div key={index}>
                              <Field
                                name={`phoneNumber.${index}`}
                                placeholder="phone number"
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
                          ))
                        : null}
                    </div>
                  )}
                />
              </div>

              <button type="submit">Sign Up</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
