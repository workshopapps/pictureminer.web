import React from 'react';
import { useNavigate } from 'react-router-dom';
function ApplyPrimary({ completed, buttonBool }) {
  const navigate = useNavigate();

  return (
    <button
      type="submit"
      disabled={!buttonBool}
      onClick={() => {
        navigate('/application');
      }}
      className={`flex flex-row justify-center items-center w-[250px] h-[56px] ${
        completed ? 'bg-[#FF6C00]' : 'bg-[#D2D2D2]'
      } rounded-lg gap-[8px] py-[16px] px-[24px] font-sans font-medium text-[17px] leading-[27px] text-black `}
    >
      Apply
    </button>
  );
}

export default ApplyPrimary;
