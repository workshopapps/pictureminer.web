import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import logo from '../assets/logo.svg';
import { removeItemFromLocalStorage } from '../localStorage';

import { HambergerMenu } from 'iconsax-react';

const NavBar = () => {
  const [hide, setHide] = useState(true);
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    removeItemFromLocalStorage('user');
  };

  return (
    <nav className="flex w-full justify-between px-6 flex-wrap md:flex-nowrap whitespace-nowrap ">
      <Link to="/">
        <div className="w-[233px] h-[37] pt-4 flex md:inline-block ">
          <img
            src={logo}
            alt="logo"
            className="w-[150px] md:w-[233px] md:h-[37px]"
          />
        </div>
      </Link>
      <button className="md:hidden" onClick={() => setHide((prev) => !prev)}>
        <HambergerMenu size="30" color="#000000" />
      </button>
      <div
        className={`bg-slate-100 md:bg-white p-3 md:p-0 flex-col flex md:flex-row gap-4 md:gap-3 lg:gap-8 md:justify-center md:items-center w-full md:w-fit mt-4 md:mt-0 ${
          hide ? 'hidden md:flex' : ''
        }`}
      >
        <Link
          to="/documentation"
          className="hover:text-[#FF9D55] text-sm lg:text-lg"
        >
          API Documentation
        </Link>
        <Link
          to="/pricing"
          className="hover:text-[#FF9D55]  text-sm lg:text-lg"
        >
          Pricing
        </Link>

        {user ? (
          <Link
            to="/dashboard"
            className="rounded-[8px] w-[100px] h-[48px] lg:w-[150px] flex justify-center items-center  border border-[#FF6C00] text-[#FF6C00] hover:bg-[#FF6C00] hover:text-white font-medium leading-[24px] text-sm lg:text-base"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            to="/login"
            className="rounded-[8px] w-[100px] lg:w-[150px] h-[48px] flex justify-center items-center border border-[#FF6C00] text-[#FF6C00] hover:bg-[#FF6C00] hover:text-white  font-medium leading-[24px] text-sm lg:text-lg"
          >
            Login
          </Link>
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="rounded-[8px] cursor-pointer w-[100px] lg:w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00]  font-medium leading-[24px] text-white bg-[#FF6C00] hover:bg-white hover:text-[#FF6C00]"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/signup"
            className="rounded-[8px] w-[100px] lg:w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00]  font-medium leading-[24px] text-white bg-[#FF6C00] hover:bg-white hover:text-[#FF6C00]"
          >
            Sign up
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
