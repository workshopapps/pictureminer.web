import React from 'react';

const Modal = ({ children }) => {
  return (
    <>
      <div className="bg-gray-300 h-screen z-10">
        <div className="">{children}</div>
      </div>
    </>
  );
};

export default Modal;
