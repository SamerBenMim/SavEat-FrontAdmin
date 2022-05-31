import React, { useState } from "react";
import classes from "./SideBar.module.css";
import Box from "../icons/Box";
import ItemIcon from "../icons/ItemIcon";
import Order from "../icons/Order";
const SideBar = ({ fn }) => {
  const green = "#4daaaa";
  const grey = "#BCC5C5";
  const [active, setActive] = useState(1);
  return (
    <div className={classes.sidebar}>
      <div
        onClick={() => {
          setActive(1);
          fn(1);
        }}
        className={`${classes.sideItem} ${active === 1 ? classes.active : ""}`}
      >
        <ItemIcon color={`${active === 1 ? green : grey}`}></ItemIcon>
        <h3>Items</h3>
      </div>
      <div
        onClick={() => {
          setActive(2);
          fn(2);
        }}
        className={`${classes.sideItem} ${active === 2 ? classes.active : ""}`}
      >
        <Box color={`${active === 2 ? green : grey}`}></Box>

        <h3>Boxes</h3>
      </div>
      <div
        onClick={() => {
          setActive(3);
          fn(3);
        }}
        className={`${classes.sideItem} ${active === 3 ? classes.active : ""}`}
      >
        <Order color={`${active === 3 ? green : grey}`}></Order>

        <h3>Orders</h3>
      </div>
      <div
        onClick={() => {
          setActive(4);
          fn(4);
        }}
        className={`${classes.sideItem} ${active === 4? classes.active : ""}`}
      >
        <Order color={`${active === 4? green : grey}`}></Order>

        <h3>Offers</h3>
      </div>
      <div
        onClick={() => {
          setActive(5);
          fn(5);
        }}
        className={`${classes.sideItem} ${active === 5? classes.active : ""}`}
      >
        <Order color={`${active === 5? green : grey}`}></Order>

        <h3>Deals</h3>
      </div>
    </div>
  );
};

export default SideBar;
