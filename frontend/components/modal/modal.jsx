import React from 'react'

const Modal = props => (
  <div className={props.modal ? "modal" : "hidden"} onClick={props.toggleModal}>
  </div>
);

export default Modal;