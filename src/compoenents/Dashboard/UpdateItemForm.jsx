import classes from "./UpdateItemForm.module.css";
import { Formik, Form ,Field} from "formik";
import * as Yup from "yup";
import { TextField } from "../Form/TextField";
import Button from "../button/Button";
import { Select } from "../Form/Select";
import { updateItem } from "../../api/api.item";
import { useState } from "react";
const UpdateItemForm = (props) => {
  const [failed, setFailed] = useState(false);
  const validate = Yup.object({
    name: Yup.string()
      .max(40, "Name is invalid !")
      .required("Name is required !"),
    category: Yup.string().required("Category is required !"),
  });
  const updateItemHandler = async (values) => {
    
    let data = { id: values.id, name: values.name, category: values.category };
    const res = await updateItem(data);
    if (!res) {
      setFailed(true);
    } else {
      props.close();
    }
  };

  return (
    <Formik  
      initialValues={{
        id: props.id,
        name: props.name,
        category: props.category,
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        updateItemHandler(values);
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

export default UpdateItemForm;
