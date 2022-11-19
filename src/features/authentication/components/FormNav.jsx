import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tozilla from '../images/Tozilla.png';

const FormNav = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth <= 500 ? setIsMobile(true) : setIsMobile(false);
    });
  });
  return (
    <div className="bg-white shadow-sm py-2">
      <div className="w-[90%] flex justify-between mx-auto">
        <img src={tozilla} className="w-[70px] h-[20px] mt-2" />
        {!isMobile ? (
          <Link
            to="/login"
            className="px-10 py-3 text-center bg-[#FF971E] text-white text-xs rounded-xl"
          >
            Login to account
          </Link>
        ) : (
          <Link
            to="/login"
            className="hidden px-10 py-3 text-center bg-[#FF971E] text-white text-xs rounded-xl"
          >
            Login to account
          </Link>
        )}
      </div>
    </div>
  );
};

export default FormNav;
