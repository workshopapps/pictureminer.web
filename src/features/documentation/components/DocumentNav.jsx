import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HambergerMenu } from 'iconsax-react';
// import './DocumentNavStyle.scss';
const DocumentNav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className=" bg-white-800 text-black shadow mt-6">
        <button
          className="p-2 md:hidden m-2 flex justify-between rounded-md outline-none focus:border-black-400 focus:border"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              viewBox="0 0 20 20"
              fill="black"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            // <svg
            //   xmlns="http://www.w3.org/2000/svg"
            //   className="w-6 h-6 text-white"
            //   fill="black"
            //   viewBox="0 0 30 30"
            //   stroke="currentColor"
            //   strokeWidth={2}
            // >
            //   <path
            //     xmlns="http://www.w3.org/2000/svg"
            //     d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
            //   />
            // </svg>
            <HambergerMenu size={30} />
          )}
        </button>

        <div className={`md:block ${isOpen ? 'is-active' : 'hidden'}`}>
          <div className="flex md:justify-around  md:flex-row sm: flex-col sm: items-center p-5 text-sm">
            <NavLink
              className=""
              activeClassName="is-active"
              to="/documentation/getting-started"
            >
              Getting Started
            </NavLink>

            <NavLink
              className=""
              activeClassName="is-active"
              to="/documentation/installations"
            >
              Installations
            </NavLink>

            <NavLink
              className=""
              activeClassName="is-active"
              to="/documentation/apis"
            >
              APIs
            </NavLink>
            <NavLink
              className=""
              activeClassName="is-active"
              to="/documentation/examples"
            >
              Examples
            </NavLink>
            <NavLink
              className=""
              activeClassName="is-active"
              to="/documentation/utilities"
            >
              Utilities
            </NavLink>
            <NavLink
              className=""
              activeClassName="is-active"
              to="/documentation/integrations"
            >
              Integrations
            </NavLink>
            <NavLink
              className=""
              activeClassName="is-active"
              to="/documentation/web"
            >
              Web
            </NavLink>
            <NavLink
              className=""
              activeClassName="is-active"
              to="/documentation/mobile"
            >
              Mobile
            </NavLink>
            <NavLink
              className=""
              activeClassName="is-active"
              to="/documentation/verifications"
            >
              Verifications
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DocumentNav;