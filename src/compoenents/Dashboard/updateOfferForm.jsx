import classes from "./updateBoxForm.module.css";
import { Formik, Form,Field } from "formik";
import * as Yup from "yup";
import { TextField, } from "../Form/TextField";
import Button from "../button/Button";
import { Select } from "../Form/Select";
import { addBox } from "../../api/api.boxes";
import { useEffect, useState } from "react";
import { removeOffer,addOffer } from "../../api/api.offers";

const UpdateBoxForm = (props) => {
    console.log("props",props.price)
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
        restaurant:props.restaurant,
        product: props.Product,
        stock: props.stock,
        description: props.description,
        new_price:props.new_price,
        old_price:props.old_price
      }}
      // validationSchema={validate}
      onSubmit={async(values) => {
        console.log(values)
          await removeOffer(props.id)
          await addOffer(values);
          props.close()
          
      }}
    >
      {(formik) => (
        <div className={classes.addItemForm}>
          <div className={classes.form}>
            <Form>

            <TextField label="restaurant" name="restaurant" type="text" form="signin"  />
              <TextField label="product" name="product" type="text" form="signin"  />
              <TextField label="description" name="description" type="text" form="signin"  />
              <TextField label="stock" name="stock" type="number" form="signin"  />
              <TextField label="new_price" name="new_price" type="number" form="signin"  />
              <TextField label="old_price" name="old_price" type="number" form="signin"  />
              

   

          <div role="group" aria-labelledby="checkbox-group">
     
          </div>
        <div className={classes.submit}>
          <Button color="#4DAAAA" content="Submit" type="submit" />
        </div>

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

export default UpdateBoxForm;
