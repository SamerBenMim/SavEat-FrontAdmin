import classes from "./BoxMenu.module.css";
import { useState, useEffect } from "react";
import Offer from "./Offer";
import AddofferForm from "./AddofferForm ";
import Modal from "./Modal";
import { getItems } from "../../api/api.item";
import { getOffers } from "../../api/api.offers";
import {Loader} from "../../UI/Loader"
import UpdateBoxForm from "./updateBoxForm";
const ItemMenu = () => {
  const [fresh, setFresh] = useState(true);
  const [loading, setloading] = useState(true);
  const [addItem, setAddItem] = useState(false);
  const [offers, setoffers] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [notsorted, setNotSorted] = useState([]);
  const [updateItem, setUpdateItem] = useState(false);
  const [items, setItems] = useState([]);
 const handleChange = (e)=> {
//    if(e.target.value=="alpha"){
//     sorted.sort((a,b) => (a.category > b.category) ? -1 : ((b.category > a.category) ? 1 : 0)); 

//       setoffers(sorted)
//     }
//     else{

//       setoffers(notsorted)
//     }
 }
  // const listItems = async () => {
  //   const res = await getItems();
  //   if (res) {
  //     return res.items;
  //   } else {
  //     return [];
  //   }
  // };
  const get_offers = async () => {

    const res = await getOffers();
    if (res) 
      setoffers(res.data.offers)
      setloading(false)
    };

  useEffect(() => { 
   
    get_offers();
  }, [ addItem, updateItem]);
  return (
    <div className={classes.itemMenu}>
      {addItem && (
        <Modal
          close={() => {
            setAddItem(false);
          }}
        >
          <AddofferForm
            items = {items}
            close={() => {
              setAddItem(false);
            }}
          ></AddofferForm>
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
            + Add Offer
          </h3>
        </div>
      </div>
      <div className={classes.titles}>
        <div className={classes.title}>Restaurant</div>
        <div className={classes.title}>Product</div>
        <div className={classes.title}>Description</div>
        <div className={classes.title}>Stock</div>
        <div className={classes.title}>old/new price</div>
        <div className={classes.title} style={{ textAlign: "right" }}>
          Remove
        </div>
        <div className={classes.title} style={{ textAlign: "right" }}>
          Edit
        </div>
      </div>
      <div className={classes.elements}>
        {(!loading)?offers.map((offer, index) => {
          return (
              <>
            <Offer
              key={index}
              id={offer._id}
               restaurant={offer.restaurant}
               product={offer.product}
               description={offer.description}
               stock={offer.stock}
               old={offer.old_price}
               new={offer.new_price}
              updateItem={updateItem}
              setUpdateItem={setUpdateItem}
              get_offers={get_offers}
              ></Offer>
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
