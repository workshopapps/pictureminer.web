/* eslint-disable indent */
import React from 'react';

export default function Button({ text, type = 'primary', onClick, disabled, ...props }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex flex-row justify-center items-center w-[100%] 
         rounded-lg gap-[8px] py-[16px] px-[24px] font-sans
        font-normal text-[14px] leading-[20px] ${
          type === 'primary'
            ? 'text-white bg-[#FF6C00] hover:bg-[#FF9D55] disabled:bg-[#FF9D55] disabled:cursor-not-allowed'
            : 'bg-white text-[#FF6C00] border border-[#FF6C00] hover:bg-[#FF6C00] hover:text-white'
        }`}

        {...props}
    >
      {text}
    </button>
  );
}
