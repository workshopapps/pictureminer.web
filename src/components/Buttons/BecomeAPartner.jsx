import React from 'react';
import { useNavigate } from 'react-router-dom';

function BecomeAPartner() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate('/apply');
      }}
      className="flex flex-row justify-center items-center w-[200px] h-[48px] bg-[#FF6C00] rounded-lg gap-[8px] py-[16px] px-[24px] font-sans font-normal text-[14px] leading-[20px] text-white hover:bg-[#FF9D55] "
    >
      Become a partner
    </button>
  );
}

export default BecomeAPartner;
