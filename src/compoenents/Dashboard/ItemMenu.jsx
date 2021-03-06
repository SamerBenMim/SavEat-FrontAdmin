import classes from "./ItemMenu.module.css";
import { useState, useEffect } from "react";
import Item from "./Item";
import AddItemForm from "./AddItemForm";
import Modal from "./Modal";
import { getItemsCategory } from "../../api/api.item";
import {Loader} from "../../UI/Loader"

const ItemMenu = () => {
  const [loading, setloading] = useState(true);
  
  const [fresh, setFresh] = useState(true);
  const [addItem, setAddItem] = useState(false);
  const [updateItem, setUpdateItem] = useState(false);
  const [sorted, setSorted] = useState([]);
  const [notsorted, setNotSorted] = useState([]);
  const handleChange = (e)=> {
    if(e.target.value=="alpha"){
      setItems(sorted)
    }
    else{
      setItems(notsorted)
    }
  }
  
  const listItems = async () => {
    let category;
    if (fresh) {
      category = "Fresh";
    } else {
      category = "Canned";
    }
    const res = await getItemsCategory(category);
    setloading(false)
    if (res) {
      return res;
    } else {
      return [];
    }
  };
  
  let [items, setItems] = useState([]);
  sorted.sort((a,b) => (a.category > b.category) ? -1 : ((b.category > a.category) ? 1 : 0));
  
  useEffect(() => {
    async function getResults() {
      const results = await listItems();
      
      setItems(results.items);
      
    }
    getResults();
  }, [fresh, addItem, updateItem]);
  return (
    <div className={classes.itemMenu}>
      {addItem && (
        <Modal
          close={() => {
            setAddItem(false);
          }}
        >
          <AddItemForm
            close={() => {
              setAddItem(false);
            }}
          ></AddItemForm>
        </Modal>
      )}
      <div className={classes.header}>
        <div className={classes.toggleCategory}>
          <div
            onClick={() => {
              setFresh(true);
            }}
            className={`${classes.category} ${fresh ? classes.active : ""}`}
          >
            fresh
          </div>
          <div
            onClick={() => {
              setFresh(false);
            }}
            className={`${classes.category} ${!fresh ? classes.active : ""}`}
          >
            canned
          </div>
        </div>
        <div className={classes.order}>
          <label htmlFor="order">Order by :</label>
          <select name="order" id="order" >
            <option value="alpha">Alphabetic Orders</option>
            <option value="last">Last Added</option>
          </select>
        </div>
        <div className={classes.addButton}>
          <h3
            style={{ textAlign: "right" }}
            onClick={() => {
              setAddItem(true);
            }}
          >
            + Add item
          </h3>
        </div>
      </div>
      <div className={classes.titles}>
        <div className={classes.title}>Id</div>
        <div className={classes.title}>Name</div>
        <div></div>
        <div className={classes.title} style={{ textAlign: "right" }}>
          Remove
        </div>
        <div className={classes.title} style={{ textAlign: "right" }}>
          Edit
        </div>
      </div>
      <div className={classes.elements}>
        {(!loading)?items.map((item, index) => {
          return (
            <Item
              key={index}
              id={item._id}
              name={item.name}
              category={item.category}
              updateItem={updateItem}
              setUpdateItem={setUpdateItem}
              items={items}
              setItems={setItems}
            ></Item>
          );
        }):<Loader/>}
      </div>
    </div>
  );
};

export default ItemMenu;
