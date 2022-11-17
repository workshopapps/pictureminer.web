import React from "react";

const Modal = ({ children }) => {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">{children}</div>
      </div>
    </>
  );
};

export default Modal;
