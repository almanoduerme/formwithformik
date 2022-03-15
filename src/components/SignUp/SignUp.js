import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextField from "../TextField/TextField";
import * as Yup from "yup";
import Button from "../Button/Button";
import "./SignUp.css";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState([]);

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, <p className="FormError">Must be 15 characters or less</p>)
      .required(<p className="FormError">Required</p>)
      .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, <p className="FormError">Invalid first name</p>),
    lastName: Yup.string()
      .max(20, <p className="FormError">Must be 20 characters or less</p>)
      .required(<p className="FormError">Required</p>)
      .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, <p className="FormError">Invalid last name</p>),
    email: Yup.string()
      .email(<p className="FormError">Invalid email address</p>)
      .required(<p className="FormError">Required</p>),
    password: Yup.string()
      .min(8, <p className="FormError">Must be 8 characters or more</p>)
      .required(<p className="FormError">Required</p>),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], <p className="FormError">Passwords must match</p>)
      .required(<p className="FormError">Required</p>),
  });

  return (
    <div>
      {!isSubmitted && (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            setIsSubmitted(true);
            setData(values);
          }}
        >
          {(formik) => (
            <div className="SignUp">
              <Form className="form">
                <h1>SignUp!</h1>
                <TextField
                  className="textField"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                />
                <TextField
                  className="textField"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                />
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
                <TextField
                  className="textField"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                />
                <Button type="submit" name="Register" padding=".4rem .9rem" />
              </Form>
            </div>
          )}
        </Formik>
      )}

      {isSubmitted && (
        <div className="isSubmitted">
          <p>Thank you for registering!</p>
          <p>We have sent a confirmation email to {data.email}</p>
          <NavLink to="/">
            <Button name="Go to Homepage" padding=".4rem .9rem" />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default SignUp;
