import classes from "./AddItemForm.module.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "../Form/TextField";
import Button from "../button/Button";
import { Select } from "../Form/Select";
import { addItem } from "../../api/api.item";
import { useState } from "react";
const AddItemForm = (props) => {
  const [failed, setFailed] = useState(false);
  const validate = Yup.object({
    name: Yup.string()
      .max(40, "Name is invalid !")
      .required("Name is required !"),
    category: Yup.string().required("Category is required !"),
  });
  const addItemHandler = async (values) => {
    let data = { name: values.name, category: values.category };
    const res = await addItem(data);
    if (!res) {
      setFailed(true);
    } else {
      props.close();
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        category: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        addItemHandler(values);
      }}
    >
      {(formik) => (
        <div className={classes.addItemForm}>
          <div className={classes.form}>
            <Form>
              <TextField label="Name" name="name" type="text" form="signin" />
              <Select
                label="Category"
                name="category"
                options={["Fresh", "Canned"]}
                failed={failed ? "An error occured try again!" : ""}
              ></Select>
              <div className={classes.submit}>
                <Button color="#4DAAAA" content="Submit" type="submit" />
              </div>
              <div className={classes.notes}>
                <p className={classes.note} style={{ textAlign: "left" }}>
                  Add an item , items have unique names.
                </p>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AddItemForm;
