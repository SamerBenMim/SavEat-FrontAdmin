import classes from "./BoxMenu.module.css";
import { useState, useEffect } from "react";
import Box from "./Box";
import AddBoxForm from "./AddBoxForm";
import Modal from "./Modal";
import { getItems } from "../../api/api.item";
import { getBoxes } from "../../api/api.boxes";
import {Loader} from "../../UI/Loader"
const ItemMenu = () => {
  const [fresh, setFresh] = useState(true);
  const [loading, setloading] = useState(true);
  const [addItem, setAddItem] = useState(false);
  const [boxes, setBoxes] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [notsorted, setNotSorted] = useState([]);
  const [updateItem, setUpdateItem] = useState(false);
  const [items, setItems] = useState([]);
 const handleChange = (e)=> {
   if(e.target.value=="alpha"){
    sorted.sort((a,b) => (a.category > b.category) ? -1 : ((b.category > a.category) ? 1 : 0)); 

      setBoxes(sorted)
    }
    else{

      setBoxes(notsorted)
    }
  }
  const listItems = async () => {
    const res = await getItems();
    if (res) {
      return res.items;
    } else {
      return [];
    }
  };
  const get_boxes = async () => {

    const res = await getBoxes();
    if (res) {
      return res;
    } else {
      return [];
    }
  };
  async function getResults() {

    const results = await get_boxes();
    const items = await listItems();
    setloading(false)
    setItems(items);
    if(results.data){

      setBoxes(results.data.boxes);
      setSorted(results.data.boxes)
      setNotSorted(results.data.boxes)
    }
      
  }
  
  useEffect(() => { 
   
    getResults();
  }, [ addItem, updateItem]);
  return (
    <div className={classes.itemMenu}>
      {addItem && (
        <Modal
          close={() => {
            setAddItem(false);
          }}
        >
          <AddBoxForm
            items = {items}
            close={() => {
              setAddItem(false);
            }}
          ></AddBoxForm>
        </Modal>
      )}
      <div className={classes.header}>
        <div className={classes.toggleCategory}>
        </div>
        <div className={classes.order}>
          <label htmlFor="order">Order by :</label>
          <select name="order" id="order" onChange={ handleChange}>
            <option value="alpha" >Alphabetic Orders</option>
            <option value="last" >Last Added</option>
          </select>
        </div>
        <div className={classes.addButton}>
          <h3
            style={{ textAlign: "right" }}
            onClick={() => {
              setAddItem(true);
            }}
          >
            + Add box
          </h3>
        </div>
      </div>
      <div className={classes.titles}>
        <div className={classes.title}>Id</div>
        <div className={classes.title}>category</div>
        <div className={classes.title}>subCategory</div>
        <div className={classes.title}>Price</div>
        <div className={classes.title}>items</div>
        <div className={classes.title} style={{ textAlign: "right" }}>
          Remove
        </div>
        <div className={classes.title} style={{ textAlign: "right" }}>
          Edit
        </div>
      </div>
      <div className={classes.elements}>
        {(!loading)?boxes.map((box, index) => {
          return (
              <>
            <Box
              key={index}
              id={box._id}
              subCategory={box.subCategory}
              category={box.category}
              price={box.price}
              updateBox={updateItem}
              setUpdateItem={setUpdateItem}
              items={box.items}
              get_boxes={getResults}
              all_items={items}
              ></Box>
              <br />
              <br />
              </>
          );
        }):<Loader/>}
      </div>
    </div>
  );
};

export default ItemMenu;
