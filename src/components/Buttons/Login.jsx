import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate('/login');
      }}
      className="capitalize border border-solid border-[#FF6C00] py-[16px] px-[24px] gap-[8px] flex flex-row justify-center   rounded-lg items-center  w-[110px] h-[48px] text-[16px] leading-[24px] font-medium font-sans text-[#FF6C00]  "
    >
      log in
    </button>
  );
}

export default Login;
