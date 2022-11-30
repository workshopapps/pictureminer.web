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
    <nav className="flex w-full justify-between px-6 flex-wrap whitespace-nowrap ">
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
        className={`bg-slate-100 md:bg-white px-2 md:px-0 flex-col flex  md:flex-row gap-4 md:gap-8 md:justify-center md:items-center w-full md:w-fit mt-6 md:mt-0  pt-4   ${
          hide ? 'hidden md:flex' : ''
        }`}
      >
        <Link to="/documentation">API Documentation</Link>
        <Link to="/pricing">Pricing</Link>

        {user ? (
          <Link
            to="/dashboard"
            className="rounded-[8px] w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00] text-[#FF6C00] font-medium leading-[24px]"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            to="/login"
            className="rounded-[8px] w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00] text-[#FF6C00] font-medium leading-[24px]"
          >
            Login
          </Link>
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="rounded-[8px] cursor-pointer w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00]  font-medium leading-[24px] text-white bg-[#FF6C00]"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/signup"
            className="rounded-[8px] w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00]  font-medium leading-[24px] text-white bg-[#FF6C00]"
          >
            Sign up
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
