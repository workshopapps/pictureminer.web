import React from 'react';
import logo from '../assets/logo.svg';

export default function PasswordNavBar() {
  return (
    <div className=" px-5 sm:pl-0 w-[233px] py-7 border-b border-[#F2F4F7]">
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className="w-[150px] md:w-[233px] md:h-[25px]"
        />
      </a>
    </div>
  );
}
