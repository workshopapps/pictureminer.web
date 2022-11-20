import React from 'react';

const Modal = ({ children }) => {
  return (
    <>
      {/* Modal */}
      <div className="modal-container fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 max-w-[45rem] w-full z-[100]">
        <div className="bg-white p-6 rounded-xl shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.1),0px_8px_8px_-4px_rgba(16,24,40,0.04)]">
          {children}
        </div>
      </div>
    </>
  );
};

export function Backdrop({ onClick }) {
  return (
    // Modal overlay or Backdrop built with tailwindcss
    <div
      onClick={onClick}
      className="modal-overlay fixed top-0 left-0 w-full h-screen bg-[#222222] opacity-25 z-[99]"
    ></div>
  );
}
export default Modal;
