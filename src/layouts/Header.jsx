import React from 'react';
import { useState } from 'react';
import Frame51 from '../assets/Minergram 1.png';
import Login from '../components/Buttons/Login';
import Signup from '../components/Buttons/Signup';
function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <div className="w-[425px]  lg:pt-8 md:w-screen lg:w-screen max-w-screen-2xl ">
        <nav className="w-screen bg-white rounded md:gap-[110px] md:w-screen lg:w-screen max-w-screen-2xl lg:pl-4 lg:pr-4  ">
          <div className="  px-4 py-4 flex flex-wrap items-center justify-between mx-auto bg-white md:flex md:flex-row md:p-2  ">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src={Frame51}
                className="h-[25px] mr-3 sm:h-9 w-[153px]  "
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              onClick={() => setNavbar(!navbar)}
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <div
              className={`${
                navbar ? 'block' : 'hidden'
              }  w-full md:block md:w-auto  `}
              id="navbar-default"
            >
              <ul className="flex items-center flex-col p-4 gap-[20px] mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:p-0 md:gap-0 ">
                <li>
                  <a
                    href="apidocumentation"
                    className="block py-2 pl-3 pr-4 text-[16px] font-Sans leading-[24px] font-medium text-[#667085] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    API Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="apidocumentation"
                    className="block py-2 pl-3 pr-4 font-Sans leading-[24px] font-medium text-[#667085] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  >
                    Pricing
                  </a>
                </li>
                <Login />
                <Signup />
              </ul>
              <div></div>
            </div>
          </div>
        </nav>
      </div>
      <hr className="h-[1px] hidden md:block w-[768px] lg:block md:w-screen lg:w-screen max-w-screen-2xl " />
    </div>
  );
}

export default Header;
