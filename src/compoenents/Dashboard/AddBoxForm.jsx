import classes from "./AddItemForm.module.css";
import { Formik, Form,Field } from "formik";
import * as Yup from "yup";
import { TextField, } from "../Form/TextField";
import Button from "../button/Button";
import { Select } from "../Form/Select";
import { addBox } from "../../api/api.boxes";
import { useEffect, useState } from "react";
const AddBoxForm = (props) => {
  const [failed, setFailed] = useState(false);
  const validate = Yup.object({
    price: Yup.string()
      .max(40, "price is invalid !")
      .required("price is required !"),
    category: Yup.string().required("Category is required !"),
    subCategory: Yup.string().required("sub-category is required !"),

  });
  const addBoxHandler = async (values) => {
    const res = await addBox(values);
    if(res)setFailed(!failed)
  return res
  };
  useEffect(() => {
    
  }, [failed])
  

  return (
    <Formik
      initialValues={{
        price:0,
        category: "",
        subCategory: "",
        items:  []

      }}
      validationSchema={validate}
      onSubmit={async(values) => {
          await addBoxHandler(values);
          props.close()
      }}
    >
      {(formik) => (
        <div className={classes.addItemForm}>
          <div className={classes.form}>
            <Form>
              <TextField label="Price" name="price" type="number" form="signin" />
              <Select
                label="Category"
                name="category"
                options={["mixed", "canned","fresh"]}
                // failed={failed ? "An error occured try again!" : ""}
              ></Select>
              <Select
                label="sub category"
                name="subCategory"
                options={["regular", "special"]}
                // failed={failed ? "An error occured try again!" : ""}
              ></Select>
   

          <div role="group" aria-labelledby="checkbox-group">
                {(props.items).map(e=>{
                    return (   <>
                    <label>
                        <Field type="checkbox" name="items" value={e._id} key={e._id} />
                         <span style={{marginLeft:"10px"}}>
                        { e.name}
                        </span>
                      </label>
                      <br/>
                      <br/>
                    </>
                      )
                }) }
          </div>
        <div className={classes.submit}>
          <Button color="#4DAAAA" content="Submit" type="submit" />
        </div>

          {/* <button type="submit">Submit</button> */}
              <div className={classes.notes}>
                <p className={classes.note} style={{ textAlign: "left" }}>
                  Add a box !
                </p>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AddBoxForm;
