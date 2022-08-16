import { Field, Formik, ErrorMessage, Form, getIn } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { feildStyle } from "./loginStyles";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
});

export const Login = () => {
  const navigate = useNavigate();

  const Auth = (userEmAil, userPassWord) => {
    JSON.parse(localStorage.getItem("LoaclStorageUserEmail")) === userEmAil &&
    JSON.parse(localStorage.getItem("LoaclStorageUserPassword")) ===
      userPassWord
      ? navigate("/home")
      : navigate("/404");
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm }) => {
          const useEmAil = values.email;
          const userPassWord = values.password;

          Auth(useEmAil, userPassWord);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div>
              <Field
                style={feildStyle}
                name="email"
                type="email"
                autoComplete="on"
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
              <ErrorMessage name="password" />
            </div>
            <button type="submit">Log in</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
