import classes from "./orderMenu.module.css";
import  "./style.css";
import { useState, useEffect } from "react";
import Box from "./Box";
import AddBoxForm from "./AddBoxForm";
import Modal from "./Modal";
import { getAllDeals,confirmDeal,declineDeal } from "../../api/api.deals";
import {Loader} from "../../UI/Loader"
import submit from '../../assets/check-mark.png'
import cancel from '../../assets/cancel.png'
const DealMenu = () => {
  const [filter, setfilter] = useState("");
  const [loading, setloading] = useState(true);
  const [addItem, setAddItem] = useState(false);
  const [deals, setdeals] = useState([]);
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
const res = await confirmDeal(id);
if(res)
 get_deals()
}
const decline=async(id)=>{
  const res = await declineDeal(id);
if(res)
 get_deals()
}
  const get_deals = async () => {

    const res = await getAllDeals();
    if (res)  {setdeals(res.data.deals) ;setloading(false)}
  };


  
  useEffect(() => { 
   
    get_deals();
  }, [filter]);
  return (
    <div className={classes.itemMenu}>
      <div className={classes.header}>
        <div className={classes.toggleCategory}>
        </div>
        <div className={classes.order}>
          <label htmlFor="deal">Filter by :</label>
          <select name="deal" id="deal" onChange={ handleChange}>
            <option value="all" >All deals</option>
            <option value="Submitted" >Submitted</option>
            <option value="Confirmed" >Confirmed</option>
            <option value="Declined" >Declined</option>
          </select>
        </div>
      </div>
      <div className={classes.titles}>
        <div className={classes.title}>costumer</div>
        <div className={classes.title}>product</div>
        <div className={classes.title}>customer phone</div>
        <div className={classes.title}>customer address</div>
        <div className={classes.title}>total</div>
        <div className={classes.title}>status</div>

      </div>
      <div className={classes.elements}>
        {(!loading&&deals.length)?deals.filter(fn).map((deal, index) => {
          console.log(deal)
          
          return ( 
      <div className={classes.titles} >
        <h3>{deal.customer.firstName??"unknown"}</h3>
        <div>{`${deal.offer.product}  (x${deal.quantity})` } </div>
        <div>{deal.customer_phone}</div>
        <div>{deal.customer_address}</div>
        <div>{deal.offer.new_price * deal.quantity} dt</div>
        <div className={  `submitted ${(deal.status=="confirmed")? "confirmed":" " && (deal.status=="declined")?"declined":" " }` } style={{display:"flex"}}>{deal.status}
        {((deal.status=="submitted"))&&
            <div>
              <img src={submit} alt="submit" style={{width:'40px' , cursor:"pointer",marginTop:"-10px",marginLeft:"15px"}}
              onClick={()=>{confirm(deal._id)}}
              />
              <img src={cancel} alt="decline" style={{width:'30px' , cursor:"pointer",marginTop:"-3px",  marginLeft:"20px",  position: "absolute"}} 
               onClick={()=>{decline(deal._id)}}
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

export default DealMenu;
