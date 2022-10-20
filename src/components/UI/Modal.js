import React  from "react";
import ReactDOM  from "react-dom";
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
};


const ModalOverlay = (props) => {
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>)
}


const portalElement = document.getElementById('overlays');


const Modal = (props) => {

    return (<>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}></Backdrop>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>);
};

export default Modal;


// creating a portal steps:
// 1) create a html element in index.html (id='overlays')
// 2) create components that will put into portal
// 3) create portal put component and describe the location components will be sent (id='overlays')
