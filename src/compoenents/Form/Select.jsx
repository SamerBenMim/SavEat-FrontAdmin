import React from "react";
import { ErrorMessage, useField,Field } from "formik";
import classes from "./Select.module.css";
import { useState } from "react";
export const Select = ({ label, ...props }) => {

  let failed = props.failed || "";
  const [field, meta] = useField(props);
  let styleError;
  const [labelColor, setLabelColor] = useState("#A5A5A5");

  const changeColor = () => {
    setLabelColor("#4DAAAA");
  };

  if (meta.touched && meta.error) {
    styleError = {
      border: "max(0.16em,0.2vw) solid red",
    };
  }

  return (
    <div className={classes.selectBox}>
      <label
        className={classes.label}
        htmlFor={field.name}
        style={{ color: labelColor }}
      >
        {label}
      </label>
      <Field as="select"
        className={classes.select}
        onFocus={changeColor}
        name={props.name}
      >
        <option key={120} className={classes.option} value={""}>
          Select a category
        </option>
        {props.options.map((option, index) => {
          return (
            <option key={index + 1} className={classes.option} value={option}>
              {option}
            </option>
          );
        })}
      </Field>
      <div className={classes.error}>
        {failed !== "" && <p>{failed}</p>}
        {failed === "" && <ErrorMessage name={field.name} />}
      </div>
    </div>
  );
};
