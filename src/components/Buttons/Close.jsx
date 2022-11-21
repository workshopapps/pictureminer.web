import React from 'react';
import { useNavigate } from 'react-router-dom';

function Close() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate('/');
      }}
      className="flex flex-row justify-center items-center w-[250px] h-[56px] border border-solid border-[#FF6C00]  rounded-lg gap-[8px] py-[16px] px-[24px] font-sans font-medium text-[17px] leading-[27px] text-[#FF6C00] "
    >
      Close
    </button>
  );
}

export default Close;
