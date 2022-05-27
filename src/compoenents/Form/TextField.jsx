import React from "react";
import { ErrorMessage, useField } from "formik";
import classes from "./TextField.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let styleError;
  let styleErrorInput;
  const [passVisible, setPassVisible] = useState(false);
  const [labelColor, setLabelColor] = useState("#A5A5A5");
 

  let failed = props.failed || "";
  const [isFocus, setIsFocus] = useState(false);
  const changeColor = () => {
    setIsFocus(true);
    setLabelColor("#4DAAAA");
  };
  const resetColor = () => {
    setIsFocus(false);
  };

  if (meta.touched && meta.error) {
    styleError = {
      border: "max(0.16em,0.2vw) solid red",
    };
  }
  const passwordVisible = () => {
    setPassVisible(!passVisible);
  };

  let style;
  const getStyle = () => {
    if (meta.touched && meta.error) {
      style = styleError;
    } 
  };
  return (
    <div className={classes.inputBox}>
      <label htmlFor={field.name} style={{ color: labelColor }}>
        {label}
      </label>
      {getStyle()}
      <div className={classes.input} style={style}>
        <input
          onFocus={changeColor}
          onBlur={resetColor}
          className={classes.formControl}
          {...field}
          {...props}
          autoComplete="off"
          style={
             meta.touched && meta.error
              
              ? styleErrorInput : null
          }
          type={passVisible && props.type !== "email" ? "password" : "text"}
        />
        {(props.type === "password" || props.type === "confirmPassword") && (
          <span onClick={passwordVisible} className={classes.passIcon}>
            {!passVisible ? (
              <Icon icon="bi:eye-slash" />
            ) : (
              <Icon icon="akar-icons:eye" />
            )}
          </span>
        )}

        {props.type === "email" && (
          <span className={classes.passIcon}>
            <Icon icon="fluent:mail-24-filled" />
          </span>
        )}
      </div>
      <div className={classes.error} style={props.type === "email" ? { marginBottom: "20px"} : {}}>
        {failed !== "" && (
          <p style={props.type === "email" ? { color: "#4DAAAA"} : {}}>
            {failed}
          </p>
        )}
        {failed === "" && <ErrorMessage name={field.name} />}
      </div>
    </div>
  );
};
