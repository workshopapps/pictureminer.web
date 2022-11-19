import React from 'react';

const Modal = ({ children }) => {
  return (
    <>
      <div className="bg-modalGray z-[5] fixed inset-0 w-full">
        <div className="">{children}</div>
      </div>
    </>
  );
};

export default Modal;
