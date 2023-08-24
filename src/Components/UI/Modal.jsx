import React from 'react';
import  ReactDOM from 'react-dom';
import modal from "./Modal.module.css"






const Backdrop =()=>{
    return (<div className={modal.backdrop}></div> )
}


const ModallOverLay =(props)=>{
    return (<div className={modal.modal}>

        <div className={modal.content}>
            {props.children}
        </div>
    </div> )
}

const portalELement = document.getElementById("Overlays");

function Modal(props) {
  return (
    <>
     {ReactDOM.createPortal(<Backdrop/>, portalELement)}
     {ReactDOM.createPortal(<ModallOverLay>{props.children}</ModallOverLay>, portalELement)}
    </>
  )
}

export default Modal
