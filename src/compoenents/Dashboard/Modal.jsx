import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return (
    <div
      onClick={() => {
        props.close();
      }}
      className={classes.backdrop}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop close={props.close} />, portalElement)}

      {ReactDom.createPortal(
        <ModalOverlay>
            {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
