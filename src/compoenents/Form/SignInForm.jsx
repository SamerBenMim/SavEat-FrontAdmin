import React from "react";
import classes from "./SignInForm.module.css";
import { TextField } from "./TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { login } from "../../api/api.user";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { loggedIn } from "../../api/api.user";
import { LoaderPage } from "../../pages/LoginPage/loader";
import ButtonLoader from "../../UI/ButtonLoader";

export const SignInForm = (props) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string()
      .email("Email is invalid !")
      .required("Email is required !"),
    password: Yup.string()
      .required("Password is required !")
      .min(8, "Password must be at least 8 charaters !"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={async(values) => {
        let data = { email: values.email, password: values.password };
        const res = await login(data);

        if (!res) {
          // setFailed("These credentials don't match any account");
        } else {
          setLoading(true)
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }      }}
    >
      {(formik) => (
        <div className={classes.signInForm}>
          <div className={classes.header}>
            <h3 className={classes.title}>Welcome, Admin </h3>
          </div>

          <div className={classes.form}>
            <Form>
              <TextField
                label="Email"
                name="email"
                type="email"
                form="signin"
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                form="signin"
              />
              <h5 className={classes.note}>Forgot your password ?</h5>
              <div className={classes.submit}>
              {!loading ? <Button color="#4DAAAA" content="Submit" type="submit" />:    <div>
            <div style={{height:"10px" ,display:"flex",alignItems:"center",marginBottom:"40px",justifyContent:"center",width:'100%'}}><ButtonLoader/></div>          </div>
      } 
              </div>
              <div className={classes.notes}>
                <h5
                  className={classes.note}
                  style={{ textAlign: "left", color: "#4DAAAA" }}
                >
                  Not Registered ?
                </h5>
                <p className={classes.note} style={{ textAlign: "left" }}>
                  If you are not registered you are not an admin.
                </p>
                <p className={classes.note} style={{ textAlign: "left" }}>
                  Leave this pannel.
                </p>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};
