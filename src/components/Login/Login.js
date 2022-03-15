import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextField from "../TextField/TextField";
import * as Yup from "yup";
import Button from "../Button/Button";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState([]);

  const validate = Yup.object({
    email: Yup.string()
      .email(<p className="FormError">Invalid email address</p>)
      .required(<p className="FormError">Required</p>),
    password: Yup.string()
      .min(8, <p className="FormError">Must be 8 characters or more</p>)
      .required(<p className="FormError">Required</p>),
  });

  return (
    <div className="Login">
      {!isSubmitted && (
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validate}
          onSubmit={(values) => {
            setIsSubmitted(true);
            setData(values);
          }}
        >
          {(formik) => (
            <Form className="form">
              <h1>Login!</h1>
              <div className="form">
                <TextField
                  className="textField"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <TextField
                  className="textField"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <Button type="submit" name="Login" padding=".4rem .9rem" />

                <div className="links">
                  <NavLink className="link" to="/forgotpassword">
                    <p>Forgot your password?</p>
                  </NavLink>

                  <NavLink className="link" to="/signup">
                    <p>Sign Up</p>
                  </NavLink>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}

      {isSubmitted && (
        <div className="isSubmitted">
          <div className="form">
            <p>Welcome again! {data.email}</p>
          </div>
          <NavLink className="link" to="/">
            <Button name="Go Home" padding=".4rem .9rem" />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Login;
