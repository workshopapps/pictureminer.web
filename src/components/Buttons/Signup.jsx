import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate('/signup');
      }}
      className="capitalize border border-solid bg-[#FF6C00]  py-[16px] px-[24px] gap-[8px] flex flex-row justify-center   rounded-lg items-center  w-[110px] h-[48px] text-[16px] leading-[24px] font-medium font-sans text-white  hover:bg-[#FF9D55] "
    >
      sign up
    </button>
  );
}

export default Signup;
