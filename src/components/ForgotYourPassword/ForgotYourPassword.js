import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextField from "../TextField/TextField";
import "./ForgotYourPassword.css";
import Button from "../Button/Button";

const ForgotYourPassword = () => {
  const [sentConfirm, setSentConfirm] = useState(false);

  return (
    <>
      {!sentConfirm && (
        <div className="ForgotYourPassword">
          <h3 className="subtitle">Forgot your password?</h3>

          <p className="text">
            Enter your email address and we will send you a link to reset your
            password.
          </p>

          <Formik
            initialValues={{ email: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(values);
                setSubmitting(false);
                setSentConfirm(true);
              }, 0);
            }}
          >
            <Form>
              <TextField
                name="email"
                type="email"
                placeholder="Email"
                className="TextField"
              />

              <Button padding=".4rem .9rem" type="submit" name="Send" />
            </Form>
          </Formik>
        </div>
      )}

      {sentConfirm && <p>SEND</p>}
    </>
  );
};

export default ForgotYourPassword;
