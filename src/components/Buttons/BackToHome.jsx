import React from 'react';
import { useNavigate } from 'react-router-dom';
function BackToHome() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate('/');
        }}
        className="flex flex-row justify-center items-center w-[232px] h-[64px] bg-[#FF6C00] rounded-lg gap-[8px] py-[16px] px-[24px] font-sans font-normal text-[14px] leading-[20px] text-white "
      >
        Back to Home
      </button>
    </div>
  );
}

export default BackToHome;
