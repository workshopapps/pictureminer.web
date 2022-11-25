import React from 'react';

export default function Button({ text, type = 'primary', onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row justify-center items-center w-[100%] h-[64px]
         rounded-lg gap-[8px] py-[16px] px-[24px] font-sans
        font-normal text-[14px] leading-[20px] ${
          type === 'primary'
            ? 'text-white bg-[#FF6C00] hover:bg-[#FF9D55]'
            : 'bg-white text-[#FF6C00] border border-[#FF6C00] hover:bg-[#FF6C00] hover:text-white'
        }`}
    >
      {text}
    </button>
  );
}
