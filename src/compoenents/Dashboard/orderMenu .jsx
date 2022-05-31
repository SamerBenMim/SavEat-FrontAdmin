import classes from "./orderMenu.module.css";
import  "./style.css";
import { useState, useEffect } from "react";
import Box from "./Box";
import AddBoxForm from "./AddBoxForm";
import Modal from "./Modal";
import { getAllOrders } from "../../api/api.orders";
import { confirmOrder,declineOrder } from "../../api/api.orders";
import {Loader} from "../../UI/Loader"
import submit from '../../assets/check-mark.png'
import cancel from '../../assets/cancel.png'
const OrderMenu = () => {
  const [filter, setfilter] = useState("");
  const [loading, setloading] = useState(true);
  const [addItem, setAddItem] = useState(false);
  const [orders, setorders] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [notsorted, setNotSorted] = useState([]);
  const [updateItem, setUpdateItem] = useState(false);
  const [items, setItems] = useState([]);
 const handleChange = (e)=> {
   if(e.target.value=="Submitted"){
    setfilter("submitted")
    }
    else if(e.target.value=="Confirmed"){
      setfilter("confirmed")

    }
    else if(e.target.value=="Declined"){
      setfilter("declined")

    }
    else setfilter('')
  }
var fn = (e)=>{ if(filter) return e.status==filter
                return true
}

const confirm= async(id)=>{
const res = await confirmOrder(id);
if(res) get_orders()
}
const decline=async(id)=>{
  const res = await declineOrder(id);
if(res) get_orders()
}
  const get_orders = async () => {

    const res = await getAllOrders();
    if (res)  {setorders(res.data.orders) ;setloading(false)}
  };


  
  useEffect(() => { 
   
    get_orders();
  }, [filter]);
  return (
    <div className={classes.itemMenu}>
      <div className={classes.header}>
        <div className={classes.toggleCategory}>
        </div>
        <div className={classes.order}>
          <label htmlFor="order">Filter by :</label>
          <select name="order" id="order" onChange={ handleChange}>
            <option value="all" >All orders</option>
            <option value="Submitted" >Submitted</option>
            <option value="Confirmed" >Confirmed</option>
            <option value="Declined" >Declined</option>
          </select>
        </div>
      </div>
      <div className={classes.titles}>
        <div className={classes.title}>costumer</div>
        <div className={classes.title}>date</div>
        <div className={classes.title}>customer phone</div>
        <div className={classes.title}>customer address</div>
        <div className={classes.title}>total</div>
        <div className={classes.title}>status</div>

      </div>
      <div className={classes.elements}>
        {(!loading&&orders.length)?orders.filter(fn).map((order, index) => {
          return ( 
      <div className={classes.titles} key={index} >
        <h3>{order.customer.firstName??"unknown"}</h3>
        <h3>{order.date}</h3>
        <div>{order.customer_phone}</div>
        <div>{order.customer_address}</div>
        <div>{order.total} dt</div>
        <div className={  `submitted ${(order.status=="confirmed")? "confirmed":" " && (order.status=="declined")?"declined":" " }` } style={{display:"flex"}}>{order.status}
        {((order.status=="submitted"))&&
            <div>
              <img src={submit} alt="submit" style={{width:'40px' , cursor:"pointer",marginTop:"-10px",marginLeft:"15px"}}
              onClick={()=>{confirm(order._id)}}
              />
              <img src={cancel} alt="decline" style={{width:'30px' , cursor:"pointer",marginTop:"-3px",  marginLeft:"20px",  position: "absolute"}} 
               onClick={()=>{decline(order._id)}}
              />
            </div>
            }
        </div>      
      </div>
          );
        }):<Loader/>}
      </div>
    </div>
  );
};

export default OrderMenu;
