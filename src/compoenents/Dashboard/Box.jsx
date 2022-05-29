import classes from "./box.module.css";
import Modal from "./Modal";
import UpdateBoxForm from "./updateBoxForm";
import { removeBox } from "../../api/api.boxes";
import { useState } from "react";
const Box = (props) => {
    console.log("all",props.all_items)
    const [updateItem, setUpdateItem] = useState(props.updateItem);
  const remove = async () => {
    const res = await removeBox(props.id);
    props.get_boxes();
  };

  return (
    <div className={classes.element}>
      {updateItem && (
        <Modal
          close={() => {
            setUpdateItem(false);
            props.setUpdateItem(false);
          }}
        >
          <UpdateBoxForm
            id={props.id}
            items={props.items}
            all_items= {props.all_items}
            category={props.category}
            subCategory={props.subCategory}
            price={props.price}
            close={() => {
              setUpdateItem(false);
              props.setUpdateItem(false);
            }}
          ></UpdateBoxForm>
        </Modal>
      )}

      <h3>{props.id}</h3>
      <h3>{props.category}</h3>
      <div>{props.subCategory}</div>
      <div>{props.price} dt</div>
      <div style={{maxHeight:"95px" ,overflowY: "auto"}}>{props.items.map((e,i)=>{ i++
          return (
          <div>

              <div> {i} - <span> {e.name} </span> </div>
          </div>

          )
      })}</div>
      
      <div style={{ textAlign: "right", cursor: "pointer" }} onClick={remove}>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 50 50"
          enableBackground="new 0 0 50 50"
          xmlSpace="preserve"
          width="calc(20px + 1vmin)"
          height=" calc(20px + 1vmin)"
        >
          <path
            fill="#6CD6D6"
            d="M10.289,14.211h3.102l1.444,25.439c0.029,0.529,0.468,0.943,0.998,0.943h18.933
  c0.53,0,0.969-0.415,0.998-0.944l1.421-25.438h3.104c0.553,0,1-0.448,1-1s-0.447-1-1-1h-3.741c-0.055,0-0.103,0.023-0.156,0.031
  c-0.052-0.008-0.1-0.031-0.153-0.031h-5.246V9.594c0-0.552-0.447-1-1-1h-9.409c-0.553,0-1,0.448-1,1v2.617h-5.248
  c-0.046,0-0.087,0.021-0.132,0.027c-0.046-0.007-0.087-0.027-0.135-0.027h-3.779c-0.553,0-1,0.448-1,1S9.736,14.211,10.289,14.211z
   M21.584,10.594h7.409v1.617h-7.409V10.594z M35.182,14.211L33.82,38.594H16.778l-1.384-24.383H35.182z"
          />
          <path
            fill="#6CD6D6"
            d="M20.337,36.719c0.02,0,0.038,0,0.058-0.001c0.552-0.031,0.973-0.504,0.941-1.055l-1.052-18.535
  c-0.031-0.552-0.517-0.967-1.055-0.942c-0.552,0.031-0.973,0.504-0.941,1.055l1.052,18.535
  C19.37,36.308,19.811,36.719,20.337,36.719z"
          />
          <path
            fill="#6CD6D6"
            d="M30.147,36.718c0.02,0.001,0.038,0.001,0.058,0.001c0.526,0,0.967-0.411,0.997-0.943l1.052-18.535
  c0.031-0.551-0.39-1.024-0.941-1.055c-0.543-0.023-1.023,0.39-1.055,0.942l-1.052,18.535C29.175,36.214,29.596,36.687,30.147,36.718
  z"
          />
          <path
            fill="#6CD6D6"
            d="M25.289,36.719c0.553,0,1-0.448,1-1V17.184c0-0.552-0.447-1-1-1s-1,0.448-1,1v18.535
  C24.289,36.271,24.736,36.719,25.289,36.719z"
          />
        </svg>
      </div>

      <div
        style={{ textAlign: "right", cursor: "pointer" }}
        onClick={() => {
            console.log("update")
          setUpdateItem(true);
          props.setUpdateItem(true);
        }}
      >
        <svg
          width="calc(20px + 1vmin)"
          height=" calc(20px + 1vmin)"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="icon-135-pen-angled" fill="#6CD6D6">
              <path
                d="M22.4432278,12.1503345 L11.1570131,23.4499064 L11.1570131,23.4499064 L8.55144652,20.8443397 L19.8435383,9.55064513 L22.4432278,12.1503345 L22.4432278,12.1503345 Z M23.1499164,11.4428096 L24.8790954,9.71158405 C25.269069,9.32114892 25.266195,8.68650423 24.8743,8.29568497 L23.6944866,7.11910998 C23.3018646,6.72756564 22.6692577,6.72452466 22.2779126,7.11592531 L20.5505949,8.84348817 L23.1499164,11.4428096 L23.1499164,11.4428096 Z M7.9037061,21.6108129 L7.26416016,24.7235103 L10.3990645,24.1061713 L7.9037061,21.6108129 L7.9037061,21.6108129 L7.9037061,21.6108129 Z M7,21 L6,26 L11,25 L25.5801067,10.4198932 C26.3642921,9.63570785 26.3661881,8.36618809 25.5897496,7.58974962 L24.4102504,6.41025036 C23.6313906,5.6313906 22.372781,5.62721897 21.5801067,6.41989327 L7,21 L7,21 Z"
                id="pen-angled"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Box;
